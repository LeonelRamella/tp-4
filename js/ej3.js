class Rectangulo {
    constructor(alto, ancho) {
        this.alto = alto;
        this.ancho = ancho;
    }
    modificarAlto(nuevoAlto) {
        this.alto = nuevoAlto;
    }
    modificarAncho(nuevoAncho) {
        this.ancho = nuevoAncho;
    }
    mostrarPropiedades() {
        document.write("Rectángulo: Alto = " + this.alto + ", Ancho = " + this.ancho + "<br>");
    }
    calcularPerimetro() {
        return 2 * (this.alto + this.ancho);
    }
    calcularArea() {
        return this.alto * this.ancho;
    }
}
const rectangulo1 = new Rectangulo(5, 10);
rectangulo1.mostrarPropiedades();
rectangulo1.modificarAlto(8);
rectangulo1.modificarAncho(12);
rectangulo1.mostrarPropiedades();
document.write("<br>Perímetro del rectángulo1:", rectangulo1.calcularPerimetro());
document.write("<br>Área del rectángulo1:", rectangulo1.calcularArea());