import { HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as mockito from 'ts-mockito';
import * as model from '../model/model';
import { Jdd } from '../model/model-jdd';
import { DataRepository } from '../service/data.repository';
import { SauvegardeService } from '../service/sauvegarde.service';
import { donnees } from './donneesDeTest/donnees08AvecBeaucoupDeNotes';

describe('SauvegardeService', () => {

  let dataRepositoryMock: DataRepository;
  let sauvegardeService: SauvegardeService;
  let http: HttpTestingController;

  beforeAll(() => {
    // Creation du mock de DataService
    dataRepositoryMock = mockito.mock(DataRepository);
  });

  // Pour réinitialiser le composant de test avant chaque test
  beforeEach(() => {

    // Reset du localstorage
    window.localStorage.clear();

    // Reset des mock
    mockito.reset(dataRepositoryMock);

    // Creation de l'environnement de test du composant
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, MatSnackBarModule, BrowserAnimationsModule],
      providers: [
        SauvegardeService,
        { provide: DataRepository, useValue: mockito.instance(dataRepositoryMock) }
      ]
    }).compileComponents();

    // Récupération des instances de composants
    sauvegardeService = TestBed.get(SauvegardeService);
    http = TestBed.get(HttpTestingController);
  });

  it('getlisteSauvegardesDuServeur', () => {
    // Arrange
    const jdd = ['a', 'b', 'c', 'd'];
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url.endsWith('//192.168.1.91/download/upload.php')
        && req.body === 'methode=liste'
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.getlisteSauvegardesDuServeur().subscribe((val) => { });
    http.expectOne(requestDefinition).flush(jdd);

    // Assert : valeurs retournées et pas d'autre requete HTTP
    http.verify();
  });

  it('chargeAnneeDuFichier', () => {
    // Arrange
    const anneeRetournee = new model.Annee();
    const nomFichier = 'nomDeMonFichier';
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url.endsWith('//192.168.1.91/download/upload.php')
        && req.body === 'methode=charge&nomFichier=' + nomFichier
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.chargeAnneeDuFichier(nomFichier);
    http.expectOne(requestDefinition).flush(anneeRetournee);

    // Assert : valeurs retournées et pas d'autre requete HTTP
    mockito.verify(dataRepositoryMock.setAnneeChargee(mockito.anyOfClass(model.Annee))).once();
    http.verify();
  });

  it('sauvegardeAnneeDansFichier', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_SIMPLISTE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url.endsWith('//192.168.1.91/download/upload.php')
        && (req.body + '').indexOf('methode=sauvegarde&nomFichier=') !== -1
        && (req.body + '').indexOf('.json&contenuFichier=') !== -1
        && (req.body + '').indexOf('periodes') !== -1
        && (req.body + '').indexOf('libellesTypeTempsJournal') !== -1
        && (req.body + '').indexOf('historique') !== -1
        && (req.body + '').indexOf('erreursChargement') !== -1
        && (req.body + '').indexOf('taches') !== -1
        && (req.body + '').indexOf('enseignant') !== -1
        && (req.body + '').indexOf('Toto') !== -1
        && (req.body + '').indexOf('dateDerniereSauvegarde') !== -1
        && (req.body + '').indexOf('competences') !== -1
        && (req.body + '').indexOf('notes') !== -1
        && (req.body + '').indexOf('journal') !== -1
        && req.method === 'POST';
    };

    // Act : appel au service et récupération du résultat + réponse à la requete HTTP déclenchée dans le service
    sauvegardeService.sauvegardeAnneeSurServeur();
    http.expectOne(requestDefinition).flush('');

    // Assert : valeurs retournées et pas d'autre requete HTTP
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
    http.verify();
  });

  it('sauvegardeAnneeDansUnBlob', () => {
    // Arrange
    const annee = Jdd.getAnnee(Jdd.JDD_RICHE);
    mockito.when(dataRepositoryMock.getAnneeChargee()).thenReturn(annee);

    // Act
    sauvegardeService.sauvegardeAnneeParTelechargement();

    // Assert
    mockito.verify(dataRepositoryMock.getAnneeChargee()).twice();
  });

  it('chargeAnneeDepuisText - fichier minimaliste', () => {
    // Arrange
    const nomDuFichier = 'fichier.json';
    const contenuDuFichier = '{}';

    // Act
    sauvegardeService.chargeAnneeDepuisText(nomDuFichier, contenuDuFichier);

    // Assert
    mockito.verify(dataRepositoryMock.setAnneeChargee(mockito.anything())).once();
  });

  it('chargeAnneeDepuisText - fichier minimal', () => {
    // Arrange
    const nomDuFichier = 'fichier.json';
    const contenuDuFichier = JSON.stringify(donnees, null, 2);

    // Act
    sauvegardeService.chargeAnneeDepuisText(nomDuFichier, contenuDuFichier);

    // Assert
    mockito.verify(dataRepositoryMock.setAnneeChargee(mockito.anything())).once();
  });

  it('getlisteSauvegardesDuServeur hors réseau', () => {
    // Arrange
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url.endsWith('//192.168.1.91/download/upload.php');
    };
    sauvegardeService.travailleHorsReseau();
    // Act : aucun appel au HTTP normalement
    sauvegardeService.getlisteSauvegardesDuServeur().subscribe((val) => { });
    // Assert : valeurs retournées et pas d'autre requete HTTP
    http.expectNone(requestDefinition);
    http.verify();
  });

  it('getlisteSauvegardesDuServeur hors réseau 2', () => {
    // Arrange
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url.endsWith('//192.168.1.91/download/upload.php');
    };
    sauvegardeService.travailleHorsReseau();
    // Act : aucun appel au HTTP normalement
    sauvegardeService.chargeAnneeDuFichier('fichier');
    // Assert : valeurs retournées et pas d'autre requete HTTP
    http.expectNone(requestDefinition);
    http.verify();
  });

  it('sauvegardeAnneeSurServeur hors réseau', () => {
    // Arrange
    const requestDefinition = (req: HttpRequest<any>) => {
      return req.url.endsWith('//192.168.1.91/download/upload.php');
    };
    sauvegardeService.travailleHorsReseau();
    // Act : aucun appel au HTTP normalement
    sauvegardeService.sauvegardeAnneeSurServeur();
    // Assert : valeurs retournées et pas d'autre requete HTTP
    http.expectNone(requestDefinition);
    http.verify();
  });
});
