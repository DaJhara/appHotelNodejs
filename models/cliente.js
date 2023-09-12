class Cliente {
    id = '';
    nombre = '';
    edad = "";

    constructor(nombre, id, edad){
        this.nombre = nombre;
        this.id = id;
        this.edad = edad;
    }
}

module.exports = Cliente;