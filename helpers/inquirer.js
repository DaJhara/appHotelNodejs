require('colors'); //require del plugin colors
const inquirer = require('inquirer'); //intania de un variable del require del plugin inquirer
const prompt = inquirer.createPromptModule();

// se crea constante con una un arreglo que incluye las opcines diponibles en el menu
const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        messge: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. Clientes`
            },
            {
                value: '2',
                name: `${'2'.red}. Servicios`
            },
            {
                value: '3',
                name: `${'3'.red}. Habitaciones `
            },
            {
                value: '4',
                name: `${'4'.red}. Reservas`
            },
            {
                value: '0',
                name: `${'0'.red}. Salir`
            }
        ]
    }
]

const inquirerMenu = async () =>{
    console.log("==================================================".green);
    console.log("            Administración".blue);
    console.log("==================================================".green);
    let otp = '';
    const opt = await prompt(preguntas).then(data => {
        otp = data ['opcion']
    })

    return otp;
}

const preguntasClientes = [
    {
        type: 'list',
        name: 'opcion',
        messge: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. Registrar Cliente`
            },
            {
                value: '2',
                name: `${'2'.red}. Ver Clientes registrados`
            },
            {
                value: '3',
                name: `${'3'.red}. Borrar Cliente`
            },
            {
                value: '0',
                name: `${'0'.red}. Volver`
            }
        ]
    }
]

const inquirerMenuClientes = async () =>{
    console.log("==================================================".green);
    console.log("            Administración".blue);
    console.log("==================================================".green);
    let otp = '';
    const opt = await prompt(preguntasClientes).then(data => {
        otp = data ['opcion']
    })

    return otp;
}

const preguntasHabitaciones = [
    {
        type: 'list',
        name: 'opcion',
        messge: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. Crear Habitación`
            },
            {
                value: '2',
                name: `${'2'.red}. Ver todas las Habitaciones`
            },
            {
                value: '3',
                name: `${'3'.red}. Ver Habitaciones disponibles`
            },
            {
                value: '4',
                name: `${'4'.red}. Ver Habitaciones ocupadas`
            },
            {
                value: '5',
                name: `${'5'.red}. Borrar Habitación`
            },
            {
                value: '0',
                name: `${'0'.red}. Volver`
            }
        ]
    }
]

const inquirerMenuHabitaciones = async () =>{
    console.log("==================================================".green);
    console.log("            Administración".blue);
    console.log("==================================================".green);
    let otp = '';
    const opt = await prompt(preguntasHabitaciones).then(data => {
        otp = data ['opcion']
    })

    return otp;
}

const preguntasServicios = [
    {
        type: 'list',
        name: 'opcion',
        messge: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. Crear servicio`
            },
            {
                value: '2',
                name: `${'2'.red}. Ver servicios`
            },
            {
                value: '3',
                name: `${'3'.red}. Borrar servicios`
            },
            {
                value: '0',
                name: `${'0'.red}. Volver`
            }
        ]
    }
]

const inquirerMenuServicios = async () =>{
    console.log("==================================================".green);
    console.log("            Administración".blue);
    console.log("==================================================".green);
    let otp = '';
    const opt = await prompt(preguntasServicios).then(data => {
        otp = data ['opcion']
    })

    return otp;
}

const preguntasReservas = [
    {
        type: 'list',
        name: 'opcion',
        messge: 'Qué desea hacer?',
        choices: [
            {
                value: '1',
                name: `${'1'.red}. Crear reserva`
            },
            {
                value: '2',
                name: `${'2'.red}. Ver reservas`
            },
            {
                value: '3',
                name: `${'3'.red}. Editar reserva`
            },
            {
                value: '4',
                name: `${'4'.red}. Cancelar reserva`
            },
            {
                value: '0',
                name: `${'0'.red}. Volver`
            }
        ]
    }
]

const inquirerMenuReservas = async () =>{
    console.log("==================================================".green);
    console.log("            Administración".blue);
    console.log("==================================================".green);
    let otp = '';
    const opt = await prompt(preguntasReservas).then(data => {
        otp = data ['opcion']
    })

    return otp;
}

const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            messge: `\nPresione ${'ENTER'.green} para continuar\n`
        }
    ]
    let pau = "";
    console.log('\n');
    await inquirer.prompt(question).then(data =>{
        pau = data['message']
    });

    return pau;
}

const leerInput = async (message) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if (value.length === 0){
                    return "Por favor ingresa un valor";
                }
                return true;
            }
        }
    ]
    let leer = "";
    return await inquirer.prompt(question).then(data =>{
        return leer = data['desc']
    });
}

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    inquirerMenuClientes,
    inquirerMenuHabitaciones,
    inquirerMenuServicios,
    inquirerMenuReservas
}