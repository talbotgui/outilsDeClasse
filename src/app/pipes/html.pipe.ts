import { Pipe, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'html', standalone: true, })
export class HtmlPipe {

    /** Constructeur pour injection des dépendances. */
    constructor(private sanitizer: DomSanitizer) { }

    /** Nettoyage de la string */
    public transform(html: string | undefined): string | null {
        return this.sanitizer.sanitize(SecurityContext.HTML, html || '');
    }
}