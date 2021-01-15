//const { log } = require('console')
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('url', request.url)

    if (request.url === '/koders') {
        switch (request.method) {
            case "GET":
                response.write('-- :D GET A KODERS ---')
                break;
            case "POST":
                response.write('-- :D POST A KODERS ---')
                break;
            case "DELETE":
                response.write('-- :D DELETE A KODERS ---')
                break;
            default:
                response.write('-- :D NADA ---')
                break;
        }
    }
    else {
        response.write(' ** Otra Ruta **')
    }
    response.end(' X')
})

server.listen(8080, () => {
    console.log('servidor escuchando en puerto 8080')
})

// request - funcion que se va a ejecutar cuando el server reciba el request

//practica
//RESPONDER OBTENDRAS UN RECUSO CUANDO NIS LLAMEN CON UN METODO GET
// RESPONDER CREARAS UN RECURSOCUANDO NOS LLAMEN CON UN METODO POST
