class Reserva {
    id = '';
    idCliente = '';
    fechaIngreso = "";

    constructor(nombre, id, edad){
        this.nombre = nombre;
        this.id = id;
        this.edad = edad;
    }
}

module.exports = Reserva;