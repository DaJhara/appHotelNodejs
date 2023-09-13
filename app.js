require("colors");
const { inquirerMenu, pausa, leerInput, inquirerMenuClientes, inquirerMenuHabitaciones,
    inquirerMenuServicios, inquirerMenuReservas } = require('./helpers/inquirer');
const { guardarDB } = require('./helpers/guardarArchivo');
const Clientes = require("./models/clientes");
const Servicios = require("./models/servicios");
const Habitaciones = require("./models/habitaciones");

console.clear();
const main = async () => {
    let opt = '';
    

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case '1':
                const cliente = new Clientes();
                do {
                    opcionClientes = await inquirerMenuClientes();
                    switch (opcionClientes) {
                        case '1':
                            const nombre = await leerInput('Nombre: ');
                            const id = await leerInput('Identificación: ');
                            const edad = await leerInput('Edad: ');
                            cliente.registrarCliente(nombre, id, edad);
                            break;
                        case '2':
                            console.log(cliente.listadoArr);
                            break;
                        case '3':
                            const idBorrar = await leerInput('Ingrese el ID del cliente a borrar: ');
                            cliente.borrarCliente(idBorrar);
                            break;
                        default:
                            break;
                    }
                } while (opcionClientes != '0')
                break;
            case '2':
                const servicio = new Servicios();
                do {
                    opcionServicios = await inquirerMenuServicios();
                    switch (opcionServicios) {
                        case '1':
                            const id = await leerInput('ID del servicio: ');
                            const nombre = await leerInput('Nombre del servicio: ');
                            const precio = await leerInput('Precio del servicio: ');
                            servicio.crearServicio(id, nombre, precio);
                            break;
                        case '2':
                            console.log(servicio.listadoArr);
                            break;
                        case '3':
                            const idBorrar = await leerInput('Ingrese el ID del servicio a borrar: ');
                            servicio.borrarServicio(idBorrar);
                            break;
                        default:
                            break;
                    }

                } while (opcionServicios != '0')
                break;
            case '3':
                const habitacion = new Habitaciones();
                do {
                    opcionHabitacion = await inquirerMenuHabitaciones();
                    switch (opcionHabitacion) {
                        case '1':
                            const id = await leerInput('Número de la habitación: ');
                            const nombre = await leerInput('Nombre de la habitación: ');
                            const precio = await leerInput('Precio de la habitación por día: ');
                            const cantidadPersonas = await leerInput('Capacidad de la habitación: ');
                            habitacion.registrarHabitacion(id, nombre, precio, cantidadPersonas)
                            break;
                        case '2':
                            console.log(habitacion.listadoArr);
                            break;
                        case '3':
                            console.log(habitacion.listadoArrDisponibles);
                            break;
                        case '4':
                            console.log(habitacion.listadoArrOcupadas);
                            break;
                        case '5':
                            const idBorrar = await leerInput('Ingrese el número de la habitación a borrar: ');
                            habitacion.borrarHabitacion(idBorrar);
                            break;
                        default:
                            break;
                    }
                } while (opcionHabitacion != '0')
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

        //guardarDB(tareas.listadoArr);
        await pausa();

    } while (opt != '0')

}

main();