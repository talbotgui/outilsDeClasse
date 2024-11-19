export const CONSTATS_EN_PREPARATION_PAR_DEFAUT = 'Constats : \nOutils : ';

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
  public constatEnPreparation?: string = CONSTATS_EN_PREPARATION_PAR_DEFAUT;
  public idsProjets?: string[];
}
