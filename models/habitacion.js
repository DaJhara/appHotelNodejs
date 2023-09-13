class Habitacion {
    numero = '';
    nombre = '';
    precio = 0;
    cantidadPersonas = 0;
    ocupada = null;

    constructor(numero, nombre, precio, cantidadPersonas){
        this.nombre = nombre;
        this.numero = numero;
        this.precio = precio;
        this.cantidadPersonas = cantidadPersonas;
        this.ocupada = false;
    }
}

module.exports = Habitacion;