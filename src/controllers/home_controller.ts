import { Home } from '../modelviews/home';

class HomeController {
  static index: (req:any, res:any) => void = (req, res) => {
    const home: Home = {
      mensagem: "Bem vindo a API na mentoria do torne-se um programador",
      endpoints: [
        "/api/recursos"
      ]
    };
    res.json(home);
  }
}

export default HomeController;