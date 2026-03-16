import { TipoMedicamento } from "@/enuns/TipoMedicamento";

export interface MedicamentosModel {
  id: number;
  nome: string;
  horarioMedicacao: string;
  dataVencimento: string | Date;
  statusMedicacao: TipoMedicamento;
  quatidadeCaps: number;
}
