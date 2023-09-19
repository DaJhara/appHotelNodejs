class Reserva {
    id = '';
    idCliente = '';
    fechaIngreso = '';
    dias = 0;
    idHabitacion = ''; 
    precio = 0; 

    constructor(id, idCliente, fechaIngreso, dias, idHabitacion) {
        this.id = id;
        this.idCliente = idCliente;
        this.fechaIngreso = fechaIngreso;
        this.dias = dias;
        this.idHabitacion = idHabitacion;
    }
}

module.exports = Reserva;
