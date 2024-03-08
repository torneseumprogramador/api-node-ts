import { getAllRecursos } from '../servicos/recurso_servico';

class RecursosController {
  static index: (req:any, res:any) => void = (req, res) => {
    const allRecursos = getAllRecursos();
    res.json(allRecursos);
  }
}

export default RecursosController;