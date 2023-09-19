const fs = require('fs');

const guardarDBReservas = (data) =>{

    const archivo = './db/dataReservas.json';

    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarDBReservas
}