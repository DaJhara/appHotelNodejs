const Servicio = require('./servicio');

class Servicios{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const servicio = this._listado[key];
            listado.push(servicio);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    crearServicio(id, nombre, precio){
        const servicio = new Servicio(id, nombre, precio);
        this._listado[servicio.id] = servicio;
    }

    borrarServicio(id) {
        const servicio = Object.values(this._listado).find(servicio => servicio.id === id);
        if (servicio) {
            delete this._listado[servicio.id];
            console.log('Servicio borrado con éxito.');
        } else {
            console.log('No existe servicio con ese ID.');
        }
    }
}

module.exports = Servicios;