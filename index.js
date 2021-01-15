const { log } = require('console')
const http = require('http')

const server = http.createServer((request, response) => {
    response.write('HOLA MUNDO DESDE MI PRIMER SERVIDOR ---> ')
    switch (request.method) {
        case "GET":
            response.write('-- :D GET ---')
            break;
        case "POST":
            response.write('-- :D POST ---')
            break;
        case "DELETE":
            response.write('-- :D DELETE ---')
            break;
        case "PUT":
            response.write('-- :D PUT ---')
            break;
        case "PATCH":
            response.write('-- :D PATCH ---')
            break;
    }
    response.end(' FIN RESPUESTA')
})

server.listen(8080, () => {
    console.log('servidor escuchando en puerto 8080')
})

// request - funcion que se va a ejecutar cuando el server reciba el request

//practica
//RESPONDER OBTENDRAS UN RECUSO CUANDO NIS LLAMEN CON UN METODO GET
// RESPONDER CREARAS UN RECURSOCUANDO NOS LLAMEN CON UN METODO POST
