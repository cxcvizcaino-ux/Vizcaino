import {Figura} from "./Figura";
export class Octagono extends Figura {
    lado: number;

    constructor(lado: number = 10) {
        super();
        this.lado = lado;
    }

    calcularPerimetro(): number {
      
        return this.lado * 8;
    }
}