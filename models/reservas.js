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

    registrarHabitacion(id, nombre, precio, cantidadPersonas){
        const habitacion = new Habitacion(id, nombre, precio, cantidadPersonas);
        this._listado[habitacion.id] = habitacion;
    }

    borrarHabitacion(id) {
        const habitacion = Object.values(this._listado).find(habitacion => habitacion.numero === id);
        if (habitacion) {
            delete this._listado[habitacion.numero];
            console.log('Habitación borrado con éxito.');
        } else {
            console.log('No existe habitacion con ese ID.');
        }
    }
}

module.exports = Habitaciones;