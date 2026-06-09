import { Figura } from "./Figura";
export class Octagono extends Figura {
    lado;
    constructor(lado = 10) {
        super();
        this.lado = lado;
    }
    calcularPerimetro() {
        return this.lado * 8;
    }
}
