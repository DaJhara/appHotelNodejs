class Reserva {
    id = '';
    idCliente = '';
    fechaIngreso = '';
    dias = 0;
    servicios = [];

    constructor(id, idCliente, fechaIngreso, dias, servicios) {
        this.id = id;
        this.idCliente = idCliente;
        this.fechaIngreso = fechaIngreso;
        this.dias = dias;
        this.servicios = servicios;
    }
}

module.exports = Reserva;