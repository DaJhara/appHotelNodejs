const fs = require('fs');

const guardarDBHabitaciones = (data) =>{

    const archivo = './db/dataHabitaciones.json';

    fs.writeFileSync(archivo, JSON.stringify(data));
}

module.exports = {
    guardarDBHabitaciones,
}