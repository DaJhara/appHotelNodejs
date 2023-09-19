require("colors");
const { inquirerMenu, pausa, leerInput, inquirerMenuClientes, inquirerMenuHabitaciones,
    inquirerMenuServicios, inquirerMenuReservas } = require('./helpers/inquirer');
const { guardarDBClientes } = require('./helpers/guardarClientes');
const { guardarDBHabitaciones } = require('./helpers/guardarHabitaciones');
const { guardarDBReservas } = require('./helpers/guardarReservas');
const Clientes = require('./models/clientes');
const Habitaciones = require('./models/habitaciones');
const Reservas = require("./models/reservas");

const fs = require('fs');

console.clear();
const main = async () => {
    let opt = '';
    const habitacion = new Habitaciones();
    const cliente = new Clientes();
    const reserva = new Reservas();
    do {
        opt = await inquirerMenu();


        switch (opt) {
            case '1':

                do {
                    opcionClientes = await inquirerMenuClientes();
                    switch (opcionClientes) {
                        case '1':
                            const id = await leerInput('ID del cliente: ');
                            const nombre = await leerInput('Nombre del Cliente: ');
                            const edad = await leerInput('Edad del Cliente: ');
                            cliente.registrarCliente(id, nombre, edad);
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
            case '3':

                do {
                    opcionReserva = await inquirerMenuReservas();

                    const hab = new Habitaciones();
                    switch (opcionReserva) {
                        case '1':
                            const id = await leerInput('Número de la Reserva: ');
                            const idcli = await leerInput('Id del cliente: ');
                            const hab = await leerInput('Número de la habitación: ');
                            const precioxdia = await leerInput('Precio x dia: ');
                            const fechaIngreso = await leerInput('Ingrese la fecha inicial (d,m,a): ');
                            const cantdias = await leerInput('Número de días: ');
                            const precio = cantdias * precioxdia;
                            reserva.crearReserva(id, idcli, fechaIngreso, cantdias, hab);
                            break;
                        case '2':
                            console.log(reserva.listadoArr);
                            break;
                        case '3':
                            const idBorrar = await leerInput('Ingrese el número de la reserva a borrar: ');
                            reserva.cancelarReserva(idBorrar);
                            break;
                        default:
                            break;
                    }
                } while (opcionReserva != '0')
                break;
            default:
                break;
        }



        await pausa();

    } while (opt != '0')
    guardarDBClientes(cliente.listadoArr);
    guardarDBHabitaciones(habitacion.listadoArr);
    guardarDBReservas(reserva.listadoArr);
}

main();
