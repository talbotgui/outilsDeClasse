export class Competence {
  public id?: string;
  public text?: string;
  public parent?: string;
}
export class Note {
  public id?: string;
  public dateCreation?: Date;
  public idPeriode?: string;
  public idItem?: string;
  public valeurEvaluation?: string;
  public commentaireEvaluationPublic?: string;
  public commentaireEvaluationPrive?: string;
  public constatEnPreparation?: string = 'Constats : \nOutils : ';
  public idsProjets?: string[];
}
