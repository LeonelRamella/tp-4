const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar(cantidad){
        this.saldo = this.saldo + cantidad;
        document.write("<p>Ingreso de dinero exitoso.</p>")
    },

    extraer(cantidad){
        this.saldo = this.saldo - cantidad;
        document.write("<p>Retiro de dinero exitoso.</p>")
    },

    informar(){
        document.write("<p>El monto actual de la cuenta es de " + this.saldo + "DLS.</p>");
    }
}


cuenta.informar();
cuenta.ingresar(3000);
cuenta.ingresar(parseInt(Math.random() * 10000));
cuenta.informar();
cuenta.extraer(parseInt(Math.random() * 5000))
cuenta.informar();