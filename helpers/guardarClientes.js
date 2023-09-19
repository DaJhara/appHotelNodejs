const fs = require('fs');

const guardarDBClientes = (data) =>{

    const archivo = './db/dataClientes.json';

    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarDBClientes,
}