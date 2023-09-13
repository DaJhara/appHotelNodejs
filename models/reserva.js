class Reserva {
    id = '';
    idCliente = '';
    fechaIngreso = '';
    dias = 0;
    idHabitacion = ''; 
    precio = 0; 
    servicios = [];

    constructor(id, idCliente, fechaIngreso, dias, idHabitacion, servicios) {
        this.id = id;
        this.idCliente = idCliente;
        this.fechaIngreso = fechaIngreso;
        this.dias = dias;
        this.idHabitacion = idHabitacion;
        this.servicios = servicios;
    }
}

module.exports = Reserva;
