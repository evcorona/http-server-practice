const { log } = require('console')
const http = require('http')

const server = http.createServer((request, response) => {
    response.write('HOLA MUNDO DESDE MI PRIMER SERVIDOR---')
    switch (request.method) {
        case "GET":
            response.end('OBTENDRAS UN RECURSO CUANDO NOS LLAMEN CON UN METODO GET')
            break;
        case "POST":
            response.end('OBTENDRAS UN RECURSO CUANDO NOS LLAMEN CON UN METODO POST')
            break;
        case "DELETE":
            response.end('OBTENDRAS UN RECURSO CUANDO NOS LLAMEN CON UN METODO DELETE')
            break;
        case "PUT":
            response.end('OBTENDRAS UN RECURSO CUANDO NOS LLAMEN CON UN METODO PUT')
            break;
        case "PATCH":
            response.end('OBTENDRAS UN RECURSO CUANDO NOS LLAMEN CON UN METODO PATCH')
            break;
    }
    response.end()
})

server.listen(8080, () => {
    console.log('servidor escuchando en puerto 8080')
})

// request - funcion que se va a ejecutar cuando el server reciba el request

//practica
//RESPONDER OBTENDRAS UN RECUSO CUANDO NIS LLAMEN CON UN METODO GET
// RESPONDER CREARAS UN RECURSOCUANDO NOS LLAMEN CON UN METODO POST
