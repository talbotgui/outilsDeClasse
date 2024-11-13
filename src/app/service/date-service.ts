import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class DateService {

    /** Constructeur pour injection des dépendances. */
    constructor() { }

    /** Formattage d'une date. */
    public formaterDate(date?: Date, formatLong: boolean = false, separateur: string = '/'): string {
        if (date) {
            const mapJours = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
            const jour = mapJours[date.getDay()];
            const j = this.formaterNombre(date.getDate());
            const m = this.formaterNombre(date.getMonth() + 1);
            const y = date.getFullYear();
            if (formatLong) {
                return jour + ' ' + j + separateur + m + separateur + y;
            } else {
                return j + separateur + m + separateur + y;
            }
        } else {
            return '';
        }
    }

    /** Formattage d'une date. */
    public formaterDateEtHeure(date?: Date): string {
        if (date) {
            const s = this.formaterNombre(date.getSeconds());
            const mi = this.formaterNombre(date.getMinutes());
            const h = this.formaterNombre(date.getHours());
            const j = this.formaterNombre(date.getDate());
            const m = this.formaterNombre(date.getMonth() + 1);
            const y = date.getFullYear();
            return y + m + j + '-' + h + mi + s;
        } else {
            return '';
        }
    }

    /** Formattage d'un nombre sur 2 chiffres. */
    public formaterNombre(n: number | undefined): string {
        if (!n) {
            return '';
        }
        else if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
}