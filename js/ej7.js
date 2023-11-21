class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono;
    }

    igual(otroContacto) {
        return this.nombre === otroContacto.nombre;
    }
}

class Agenda {
    constructor(tamano = 10) {
        this.contactos = [];
        this.tamano = tamano;
    }

    get getTamano(){
        return this.contactos;
    }

    setTamano(nuevoTamano){
        this.tamano = nuevoTamano;
    }

    aniadirContacto(contacto) {
        if (this.agendaLlena()) {
            console.log("La agenda está llena. No se puede añadir más contactos.");
        } else if (this.existeContacto(contacto)) {
            console.log("El contacto ya existe en la agenda.");
        } else {
            this.contactos.push(contacto);
            console.log("Contacto " + contacto.nombre + " añadido a la agenda.");
        }
    }

    existeContacto(contacto) {
        return this.contactos.some(c => c.igual(contacto));
    }

    listarContactos() {
        console.log("Lista de contactos:");
        this.contactos.forEach(contacto => console.log( contacto.nombre + ":" + contacto.telefono));
    }

    buscarContacto(nombre) {
        const contactoEncontrado = this.contactos.find(contacto => contacto.nombre === nombre);
        if (contactoEncontrado) {
            console.log("Teléfono de " + nombre +":" + contactoEncontrado.telefono);
        } else {
            console.log("No se encontró ningún contacto con el nombre " + nombre + ".");
        }
    }

    eliminarContacto(contacto) {
        const indice = this.contactos.findIndex(c => c.igual(contacto));
        if (indice !== -1) {
            this.contactos.splice(indice, 1);
            console.log("Contacto " + contacto.nombre + " eliminado de la agenda.");
        } else {
            console.log("No se encontró ningún contacto con el nombre "+ contacto.nombre + ".");
        }
    }

    agendaLlena() {
        return this.contactos.length === this.tamano;
    }

    huecosLibres() {
        return this.tamano - this.contactos.length;
    }
}

function mostrarMenu() {
    console.log("Iniciando agenda.");
    let opcion;
    const elegirAgenda = parseInt(prompt(`Ingrese el modo en el que desea crear la agenda: 
    1- Por defecto (Cuenta con 10 espacios para contactos).
    2- Seleccione la cantidad de espacios que desee.
    `));
    if (elegirAgenda === 1) {
        agenda = new Agenda();
    } else if (elegirAgenda === 2) {
        const cantidad = parseInt(prompt("Ingrese la cantidad de espacios para ingresar contactos que desea:"));
        agenda = new Agenda();
        agenda.setTamano(cantidad);
    }


    do {
        opcion = parseInt(prompt(`
        Menú de Agenda Telefónica:
        1- Añadir un contacto.
        2- Verificar si el contacto existe.
        3- Listar todos los contactos.
        4- Buscar un contacto por nombre.
        5- Eliminar un contacto.
        6- Verificar si la agenda está llena.
        7- Verificar cuántos contactos se pueden ingresar.
        8- Salir.
    `));
        switch (opcion) {
            case 1:
                const nombre = prompt("Ingrese el nombre del contacto:");
                const telefono = parseInt(prompt("Ingrese el teléfono del contacto:"));
                const nuevoContacto = new Contacto(nombre, telefono);
                agenda.aniadirContacto(nuevoContacto);
                break;
            case 2:
                const nombreExiste = prompt("Ingrese el nombre del contacto a verificar:");
                if (agenda.existeContacto(new Contacto(nombreExiste))) {
                    console.log("El contacto " + nombreExiste + " existe en la agenda.");
                } else {
                    console.log("El contacto " + nombreExiste + " no existe en la agenda.");
                }
                break;
            case 3:
                agenda.listarContactos();
                break;
            case 4:
                const nombreBuscar = prompt("Ingrese el nombre del contacto a buscar:");
                agenda.buscarContacto(nombreBuscar);
                break;
            case 5:
                const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar:");
                agenda.eliminarContacto(new Contacto(nombreEliminar));
                break;
            case 6:
                console.log("La agenda " + agenda.agendaLlena() + "? está : no está" +  llena+ ".");
                break;
            case 7:
                console.log("Huecos libres en la agenda: " + agenda.huecosLibres());
                break;
            case 8:
                console.log("Cerrando agenda.");
                break;
            default:
                console.log("Opción no válida. Por favor, seleccione una opción del 1 al 8.");
        }
    } while (opcion !== 8);
}

mostrarMenu();