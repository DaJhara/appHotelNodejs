require("colors");

const mostrarMenu = () =>{
    return new Promise(resolve => {
        console.clear();
        console.log("==================================================".green);
        console.log("            Gestión de Hotel".blue);
        console.log("==================================================".green);
        console.log("".green);
        console.log("1. Clientes".grey);
        console.log("2. Habitaciones");
        console.log("3. Servicios".grey);
        console.log("4. Reservas");
        console.log("0. Salir\n".grey);

        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('Elija una opción: ', (opt => {
            readline.close();
            
            resolve(opt);
        }))
    })
}

module.exports = {
    mostrarMenu,
}