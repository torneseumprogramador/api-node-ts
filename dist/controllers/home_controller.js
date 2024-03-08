"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.index = function (req, res) {
        var home = {
            mensagem: "Bem vindo a API na mentoria do torne-se um programador",
            endpoints: [
                "/api/recursos"
            ]
        };
        res.json(home);
    };
    return HomeController;
}());
exports.default = HomeController;
//# sourceMappingURL=home_controller.js.map