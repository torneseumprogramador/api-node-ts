"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var recurso_servico_1 = require("../servicos/recurso_servico");
var RecursosController = /** @class */ (function () {
    function RecursosController() {
    }
    RecursosController.index = function (req, res) {
        var allRecursos = (0, recurso_servico_1.getAllRecursos)();
        res.json(allRecursos);
    };
    return RecursosController;
}());
exports.default = RecursosController;
//# sourceMappingURL=recursos_controller.js.map