require("colors");
const { inquirerMenu, pausa, leerInput, inquirerMenuClientes, inquirerMenuHabitaciones,
inquirerMenuServicios, inquirerMenuReservas} = require('./helpers/inquirer');
const { guardarDB } = require('./helpers/guardarArchivo');
const Tareas = require('./models/clientes');

console.clear();
const main = async () => {
    let opt = '';
    const tareas = new Tareas();

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                do {
                    opcionClientes = await inquirerMenuClientes();
                    switch (opcionClientes) {
                        case '1':
                            // Lógica para registrar cliente
                            break;
                        case '2':
                            // Lógica para ver clientes registrados
                            break;
                        case '3':
                            // Lógica para actualizar cliente
                            break;
                        case '4':
                            // Lógica para borrar cliente
                            break;
                        default:
                            break;
                    }
                } while (opcionClientes != '0')
                break;
            case '2':
                do {
                    opcionHabitacion = await inquirerMenuHabitaciones();
                    switch (opcionHabitacion) {
                        case '1':
                            // Lógica
                            break;
                        case '2':
                            // Lógica 
                            break;
                        case '3':
                            // Lógica
                            break;
                        case '4':
                            // Lógica 
                            break;
                        case '5':
                            //
                            break;
                        case '6':
                            break;
                            //
                        default:
                            break;
                    }

                } while (opcionHabitacion != '0')
                break;
            case '3':
                do {
                    opcionServicios = await inquirerMenuServicios();
                    switch (opcionServicios) {
                        case '1':
                            // Lógica
                            break;
                        case '2':
                            // Lógica 
                            break;
                        case '3':
                            // Lógica
                            break;
                        case '4':
                            // Lógica 
                            break;
                        default:
                            break;
                    }
                } while (opcionServicios != '0')
                break;
            case '4':
                do {
                    opcionReserva = await inquirerMenuReservas();
                    switch (opcionReserva) {
                        case '1':
                            // Lógica para registrar cliente
                            break;
                        case '2':
                            // Lógica para ver clientes registrados
                            break;
                        case '3':
                            // Lógica para actualizar cliente
                            break;
                        case '4':
                            // Lógica para borrar cliente
                            break;
                        default:
                            break;
                    }
                } while (opcionReserva != '0')
                break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt != '0')

}

main();