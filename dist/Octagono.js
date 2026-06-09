"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Octagono = void 0;
const Figura_1 = require("./Figura");
class Octagono extends Figura_1.Figura {
    constructor(lado = 10) {
        super();
        this.lado = lado;
    }
    calcularPerimetro() {
        return this.lado * 8;
    }
}
exports.Octagono = Octagono;
