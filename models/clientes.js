const Cliente = require('./cliente');

class Clientes{

    _listado = {};

    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        })
        return listado;
    }

    constructor(){
        this._listado = {};
    }

    registrarCliente(nombre,id,edad){
        const cliente = new Cliente(nombre,id,edad);
        this._listado[cliente.id] = cliente;
    }

    borrarCliente(id) {
        const cliente = Object.values(this._listado).find(cliente => cliente.id === id);
        if (cliente) {
            delete this._listado[cliente.id];
            console.log('Cliente borrado con éxito.');
        } else {
            console.log('No existe cliente con ese ID.');
        }
    }
}

module.exports = Clientes;
