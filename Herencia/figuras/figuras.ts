// programa de figuras geometricas
// calcula el area y perimetro de cuadrado, trapecio y pentagono
// materia: programacion orientada a objetos

// clase base abstracta
abstract class FiguraGeometrica {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    getNombre(): string {
        return this.nombre;
    }

    abstract calcularArea(): number;
    abstract calcularPerimetro(): number;

    mostrar(): void {
        console.log("Figura: " + this.nombre);
        console.log("Area: " + this.calcularArea().toFixed(2));
        console.log("Perimetro: " + this.calcularPerimetro().toFixed(2));
        console.log("----------------------------");
    }
}

// clase cuadrado
class Cuadrado extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super("Cuadrado");
        this.lado = lado;
    }

    getLado(): number {
        return this.lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    calcularPerimetro(): number {
        return 4 * this.lado;
    }
}

// clase trapecio
class Trapecio extends FiguraGeometrica {
    private baseMayor: number;
    private baseMenor: number;
    private altura: number;
    private lado1: number;
    private lado2: number;

    constructor(baseMayor: number, baseMenor: number, altura: number, lado1: number, lado2: number) {
        super("Trapecio");
        this.baseMayor = baseMayor;
        this.baseMenor = baseMenor;
        this.altura = altura;
        this.lado1 = lado1;
        this.lado2 = lado2;
    }

    getBaseMayor(): number { return this.baseMayor; }
    getBaseMenor(): number { return this.baseMenor; }
    getAltura(): number { return this.altura; }

    calcularArea(): number {
        return ((this.baseMayor + this.baseMenor) / 2) * this.altura;
    }

    calcularPerimetro(): number {
        return this.baseMayor + this.baseMenor + this.lado1 + this.lado2;
    }
}

// clase pentagono
class Pentagono extends FiguraGeometrica {
    private lado: number;

    constructor(lado: number) {
        super("Pentagono Regular");
        this.lado = lado;
    }

    getLado(): number {
        return this.lado;
    }

    calcularArea(): number {
        return (5 * this.lado * this.lado * Math.tan(Math.PI / 5)) / 4;
    }

    calcularPerimetro(): number {
        return 5 * this.lado;
    }
}

// main - aqui se mandan los datos a las clases
const cuadrado = new Cuadrado(6);
const trapecio = new Trapecio(10, 6, 4, 5, 5);
const pentagono = new Pentagono(7);

const figuras: FiguraGeometrica[] = [cuadrado, trapecio, pentagono];

console.log("============================");
console.log("  FIGURAS GEOMETRICAS");
console.log("============================");

for (let i = 0; i < figuras.length; i++) {
    figuras[i].mostrar();
}
