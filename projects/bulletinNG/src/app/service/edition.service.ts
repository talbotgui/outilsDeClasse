import { Injectable } from '@angular/core';


@Injectable()
export class EditionService {

    private static popupOuverte: Window | null;

    creePageEtOuvrePopup(contenu: string, styleCss: string, titre: string | undefined): void {
        const page = `
        <!DOCTYPE html>
        <html moznomarginboxes mozdisallowselectionprint>
         <head>
          <meta charset=\'UTF-8\' />
          <title>` + titre + `</title>
          <style type=\'text/css\' media=\'print\'>
            tr { page-break-after: always; page-break-inside: avoid; }
            @page { margin: 10px; }
          </style>
          <style>` + styleCss + `</style>
         </head>
         <body>` + contenu + `
         </body>
        </html>`;

        // Si la popup est déjà ouverte, on la ferme
        if (EditionService.popupOuverte) {
            EditionService.popupOuverte.close();
        }

        // Ouverture d'une popup
        EditionService.popupOuverte = window.open(window.location.href, titre);
        if (!EditionService.popupOuverte) {
            alert('Merci d\'accepter les popups pour cette page puis de relancer l\'édition');
        }

        // Remplissage de la popup
        if (EditionService.popupOuverte) {
            EditionService.popupOuverte.document.write(page);
            EditionService.popupOuverte.document.close();
        }
    }
}
