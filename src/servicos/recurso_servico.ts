import { Recurso } from '../models/recurso';

const recursos: Recurso[] = [
  {
    id: 1,
    nome: "Recurso 1",
    descricao: "Descrição do Recurso 1",
    quantidade: 10,
  },
  {
    id: 2,
    nome: "Recurso 2",
    descricao: "Descrição do Recurso 2",
    quantidade: 20,
  },
];

export const getAllRecursos = (): Recurso[] => {
  return recursos;
};