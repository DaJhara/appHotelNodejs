const Reserva = require('./reserva');

class Reservas{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const reserva = this._listado[key];
            listado.push(reserva);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearReserva(id, idCliente, fechaIngreso, dias, idHabitacion){
        const reserva = new Reserva(id, idCliente, fechaIngreso, dias, idHabitacion);
        this._listado[reserva.id] = reserva;
    }

    cancelarReserva(id) {
        const reserva = Object.values(this._listado).find(reserva => reserva.id === id);
        if (reserva) {
            delete this._listado[reserva.id];
            console.log('Reserva borrada con éxito.');
        } else {
            console.log('No existe reserva con ese ID.');
        }
    }
}

module.exports = Reservas;