class auto{
    constructor(color, marca, modelo, encendido){
        this._color = color;
        this._marca = marca;
        this._modelo = modelo;
        this._encendido = encendido;
    }
    mostrardatos(){
        document.write(this._color+"<br>"+ this._marca + "<br>" + this._modelo + "<br>" + this._encendido)
    }
    encender(){
        this._encendido = true;
        document.write("<p>Auto encendido</p>") 
    }

    apagar(){
        this._encendido = false;
        document.write("<p>El auto se apago</p>")
    }
}

const Camaro = new auto("Rojo", "chevrolet", "Camaro", false);
Camaro.encender();
Camaro.apagar();
Camaro.mostrardatos();