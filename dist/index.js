"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var home_controller_1 = __importDefault(require("./controllers/home_controller"));
var recursos_controller_1 = __importDefault(require("./controllers/recursos_controller"));
var cors_1 = __importDefault(require("cors"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.get('/', home_controller_1.default.index);
app.get('/api/recursos', recursos_controller_1.default.index);
app.listen(3000, function () {
    console.log('API listening on port 3000');
});
//# sourceMappingURL=index.js.map