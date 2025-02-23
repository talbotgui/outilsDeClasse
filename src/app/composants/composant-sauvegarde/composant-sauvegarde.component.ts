import { afterNextRender, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { filter, interval, mergeMap, Observable, of, tap } from 'rxjs';
import { AbstractComponent } from '../../directives/abstract.component';
import { DemonstrationService } from '../../service/bouchon-service';
import { ChargementService } from '../../service/chargement-service';
import { ContexteService } from '../../service/contexte-service';
import { DateService } from '../../service/date-service';

@Component({
    selector: '[composant-sauvegarde]', templateUrl: './composant-sauvegarde.component.html',
    standalone: true, imports: [
        // Pour les composants Material
        MatButtonModule, MatTooltipModule,
        // FontAwesome
        FontAwesomeModule
    ]
})
export class ComposantSauvegardeComponent extends AbstractComponent implements OnInit {

    /** Nombre de ms entre deux sauvegardes (3mn). */
    private static readonly DELAI_SAUVEGARDE = 3 * 60 * 1000;

    /** Flag indiquant si les données sont chargées. */
    public donneesChargees = false;

    /** Sauvegarde active par défaut. */
    public activationSauvegarde = true;

    /** Référence vers le lien de téléchargement caché. */
    @ViewChild('boutonTelechargementCache')
    public lienTelechargement: ElementRef<HTMLAnchorElement> | undefined;

    /** Constructeur pour injection des dépendances. */
    public constructor(private contexteService: ContexteService, private chargementService: ChargementService, private demonstrationService: DemonstrationService, private dateService: DateService) {
        super();

        // L'usage de 'window' étant interdit en dehors d'un 'afterNextRender' lui-même interdit en dehors d'un constructeur
        afterNextRender(() => {
            // Toutes les 5mn
            const sub = interval(ComposantSauvegardeComponent.DELAI_SAUVEGARDE).pipe(
                mergeMap(() => this.declencherSauvegarde())
            ).subscribe();
            super.declarerSouscription(sub);
        });
    }

    /** Au chargement du composant */
    public ngOnInit(): void {

        // Au chargement des données, récupéation de  la liste des élèves
        const sub = this.contexteService.obtenirUnObservableDuChargementDesDonneesDeClasse().pipe(
            tap(donnees => {
                if (donnees) {
                    // Sauvegarde du flag de chargement des données
                    this.donneesChargees = true;

                    // Si un jdd a été chargé, la sauvegarde est désactivée par défaut
                    this.activationSauvegarde = !this.demonstrationService.unJeuDeDonneesDeDemonstrationEstCharge;
                }
            })
        ).subscribe();
        super.declarerSouscription(sub);
    }

    /** Activation/désactivation de la sauvegarde */
    public activerDesactiverSauvegarde() {
        this.activationSauvegarde = !this.activationSauvegarde;

        // A l'activation de la sauvegarde, se déclenche une sauvegarde immédiate (en plus des futures sauvegardes au bout de qq mn)
        if (this.activationSauvegarde) {
            const sub = this.declencherSauvegarde().subscribe();
            super.declarerSouscription(sub);
        }
    }

    /** Déclenchement de la sauvegarde. */
    public declencherSauvegarde(): Observable<any> {
        // si les données sont chargées et la sauvegarde active
        if (this.donneesChargees && this.activationSauvegarde) {
            // génération du fichier
            return this.chargementService.genererContenuJsonPourSauvegarde().pipe(

                // s'il n'est pas vide
                filter(fichier => fichier.byteLength > 0),

                // création d'un BLOB et déclenchement du téléchargement
                tap(fichier => {
                    if (this.lienTelechargement) {
                        const url = window.URL.createObjectURL(new Blob([fichier], { type: 'application/octet-stream' }));
                        this.lienTelechargement.nativeElement.href = url;
                        this.lienTelechargement.nativeElement.download = 'sauvegarde-' + this.dateService.formaterDateEtHeure(new Date());
                        this.lienTelechargement.nativeElement.click();
                        window.URL.revokeObjectURL(url);
                    }
                })
            );
        } else {
            return of();
        }
    }

    /** Lancement de l'impression de la page courante. */
    public demarrerImpression(): void {
        window.print();
    }
}
