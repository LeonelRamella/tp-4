class persona{
    constructor(nombre, edad, sexo, peso, altura, anioNacimiento){
        this.nombre = nombre;
        this.edad = edad;
        this.DNI = this.generaDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNacimiento = anioNacimiento;
    }

    mostrarGeneracion(){
        if(this.anioNacimiento >= 1994 && this.anioNacimiento <= 2010){
            document.write("<p> "+ this.nombre + " pertenece a la GENERACIÓN Z y su rasgo característico es la IRREVERENCIA.</p>");
        } else if(this.anioNacimiento >= 1981 && this.anioNacimiento <= 1993){
            document.write("<p>"+ this.nombre + " pertenece a la GENERACIÓN Y y su rasgo característico es la FRUSTRACIÓN.</p>")
        } else if(this.anioNacimiento >= 1969 && this.anioNacimiento <= 1980){
            document.write("<p>" + this.nombre + " pertenece a la GENERACIÓN X y su rasgo característico es la OBSESIÓN POR EL ÉXITO.</p>");
        } else if(this.anioNacimiento >= 1949 && this.anioNacimiento <= 1968){
            document.write("<p>"+ this.nombre + " pertenece a la GENERACIÓN BABY BOOM y su rasgo característico es la AMBICIÓN.</p>");
        } else if(this.anioNacimiento >= 1930 && this.anioNacimiento <= 1948){
            document.write("<p>" + this.nombre + " pertenece a la SILENT GENERATION y su rasgo característico es la AUSTERIDAD.</p>");
        }
    }

    get miEdad(){
        return this.edad;
    }

    esMayorDeEdad(edad){
        if(edad >= 60){
            document.write("<p>" + this.nombre + " Esta en la tercera edad.</p>");
        } else {
            document.write("<p>" + this.nombre + " no esta en la tercera edad.</p>");
        }
    }

    mostrarDatos(){
        document.write("<h3>Datos de la persona</h3><ul><li>Nombre: " + this.nombre + "</li><li>Edad: " + this.edad + "</li><li>DNI: " + this.DNI + "</li><li>Sexo: " + this.sexo + "</li><li>Peso: " + this.peso + "kg</li><li>Altura: "+ this.altura + "mts</li><li>Año de nacimiento: " + this.anioNacimiento + "</li></ul>");
    }

    generaDNI(){
       const aux = Math.floor(Math.random() * 90000000)
       return aux;
    }
}

const yo = new persona("Leonel Lautaro Ramella", 23, "H", 85, 1.75, 2000);
yo.mostrarDatos();
yo.esMayorDeEdad(yo.miEdad);
yo.mostrarGeneracion();