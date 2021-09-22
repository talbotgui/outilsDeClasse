
export class Competence {
  public id?: string; public text?: string; public parent?: string;
}

export class Annee {
  public competences: Competence[] = [];
}
