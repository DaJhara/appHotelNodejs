const Habitacion = require('./habitacion');

class Habitaciones{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const servicio = this._listado[key];
            listado.push(servicio);
        })
        return listado;
    }

    get listadoArrOcupadas() {
        const listadoCompletas = Object.values(this._listado).filter(habitacion => habitacion.ocupada !== null);
        return listadoCompletas;
    }

    get listadoArrDisponibles() {
        const listadoPendientes = Object.values(this._listado).filter(habitacion => habitacion.ocupada === false);
        return listadoPendientes;
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