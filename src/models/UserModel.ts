import { MedicamentosModel } from "./Medicamentos";

export interface UserModel {
  id: number;
  nome: string;
  email: string;
  senha: string;
  medicamentos?: MedicamentosModel[];
}
