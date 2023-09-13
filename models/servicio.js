class Servicio {
    id = '';
    nombre = '';
    precio = 0;

    constructor(id, nombre, precio){
        this.nombre = nombre;
        this.id = id;
        this.precio = precio;
    }
}

module.exports = Servicio;