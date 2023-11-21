class producto{
    constructor(codigo, nombre, precio){
        this.codigo = codigo;
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarProducto(){
        document.write("<ul><li>Codigo: " + this.codigo + ".</li><li>Nombre: " + this.nombre + ".</li><li>Precio: " + this.precio + ".</li></ul>");
    }
}


const producto1 = new producto(54642000, "Mate", 1000);
const producto2 = new producto(42135004, "Pelota de futbol copa america 2021", 40000);
const producto3 = new producto(27962007, "Pañuelo de Messi que uso cuando se despidio del barcelona", 10000000);
const arrayDeProductos = [producto1, producto2, producto3];

arrayDeProductos[0].mostrarProducto();
arrayDeProductos[1].mostrarProducto();
arrayDeProductos[2].mostrarProducto();