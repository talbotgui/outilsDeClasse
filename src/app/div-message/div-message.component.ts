import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AbstractComponent } from '../directives/abstract.component';
import { MessageAafficher } from '../model/message-model';
import { ContexteService } from '../service/contexte-service';

@Component({
    selector: '[div-message]', templateUrl: './div-message.component.html', styleUrl: './div-message.component.scss',
    standalone: true, imports: []
})
export class DivMessageComponent extends AbstractComponent implements OnInit {

    /** Message à afficher */
    public messagesAafficher: MessageAafficher[] = [];

    /** Constructeur pour injection des dépendances. */
    public constructor(private contexteService: ContexteService) { super(); }

    /** Au chargement du composant */
    public ngOnInit(): void {

        // à chaque message généré, on l'affiche en masquant le précédent
        const sub = this.contexteService.obtenirUnObservableSurLesMessagesGeneraux()
            .pipe(tap(message => {
                if (message) {
                    // on retire tout message venant de la même source
                    this.messagesAafficher = this.messagesAafficher.filter(m => m.codeEmetteurDuMessage !== message.codeEmetteurDuMessage);
                    //s'il n'est pas vide
                    if (message.message) {
                        // on ajoute le nouveau message
                        this.messagesAafficher.push(message);
                        // et on le masque au bout de 3 secondes
                        setTimeout(this.retirerMessage.bind(this), 30000, message);
                    }
                    // pour remettre l'utilisateur en haut de la page
                    window.scrollTo(0, 0);
                }
            }))
            .subscribe();
        super.declarerSouscription(sub);
    }

    /** Retirer le message de la liste */
    private retirerMessage(message: MessageAafficher): void {
        if (message) {
            const index = this.messagesAafficher.indexOf(message);
            if (index !== -1) {
                this.messagesAafficher.splice(index, 1);
            }
        }
    }
}
