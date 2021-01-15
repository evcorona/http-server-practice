# SERVIDOR HTTP
[Node HTTP Documentación](https://nodejs.org/dist/latest-v14.x/docs/api/http.html#http_http_createserver_options_requestlistener)

## MÉTODOS DE PETICIÓN HTTP
HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent, o cacheable.

### VERBOSE
* **GET:** El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
* **HEAD:** El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
* **POST:** El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
* **PUT:** El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
* **DELETE:** El método DELETE borra un recurso en específico.
* **CONNECT:** El método CONNECT establece un túnel hacia el servidor identificado por el recurso.
* **OPTIONS:** El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.
* **TRACE:** El método TRACE  realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
* **PATCH:** El método PATCH  es utilizado para aplicar modificaciones parciales a un recurso.

[Fuente](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)

[Fuente 2](https://www.w3schools.com/nodejs/obj_http_incomingmessage.asp)

### RUTAS

Ejemplo: _youtube.com/videos/abcd_
* youtube.com - direccion del servidor
* /videos/abcd - recursos del servidor, ruta

/clases
GET /clases
POST /clases
DELETE /clases

[Recurso](https://insomnia.rest/)

## [Node.js http.createServer() Method](https://www.w3schools.com/nodejs/met_http_createserver.asp)

* The **http.createServer()** method turns your computer into an HTTP server.
* The **http.createServer()** method creates an HTTP Server object.
* The **HTTP Server object** can listen to ports on your computer and execute a function, a **requestListener**, each time a request is made.

```
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.write('Hello World!');
  res.end();
}).listen(8080);
```
**req = request**
### [Node.js requestListener() Function](https://www.w3schools.com/nodejs/func_http_requestlistener.asp)
Specifies a function to be executed every time the server gets a request. This function is called a **requestListener**, and handles request from the user, as well as response back to the user.

* The **requestListener function** is the function that is executed each time the server gets a request.
* The **requestListener function** is passed as a parameter to the http.createServer() method.
* The **requestListener function** handles requests from the user, and also the response back to the user

### [Node.js IncomingMessage Object](https://www.w3schools.com/nodejs/obj_http_incomingmessage.asp)

The **IncomingMessage object** is passed as the first argument in the requestListener function.

The **IncomingMessage object** represents the request to the server.

```
var http = require('http');
http.createServer(function (req, res) {
  res.end(req.url);
}).listen(8080);
```

#### IncomingMessage Methods and Properties

* **destroy()**
* **httpVersion**    Returns the HTTP version sent by the client
* **method**         Returns the request method
* **rawHeaders**     Returns an array of the request headers
* **rawTrailers**    Returns an array of the raw request trailer keys and values
* **setTimeout()**   Calls a specified function after a specified number of milliseconds
* **statusCode**     Returns the HTTP response status code
* **socket**         Returns the Socket object for the connection
* **trailers**       Returns an object containing the trailers
* **url**            Returns the request URL string

---
⌨️ con ❤️ por [veroxcrown](https://github.com/veroxcrown) 😊

# PRACTICA 1
```
//const { log } = require('console')
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('url', request.url)
    
    response.write('HOLA MUNDO DESDE MI PRIMER SERVIDOR ---> ')
    switch (request.method) {
        case "GET"://const { log } = require('console')
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('url', request.url)
    
    response.write('HOLA MUNDO DESDE MI PRIMER SERVIDOR ---> ')
    switch (request.method) {
        case "GET":
            response.write('-- :D OBTENDRÁS UN RECURSO ---')
            break;
        case "POST":
            response.write('-- :D CREARÁS UN RECURSO ---')
            break;
        case "DELETE":
            response.write('-- :D ELIMINARÁS UN RECURSO ---')
            break;
        default:
            response.write('-- :D NADA ---')
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

            response.write('-- :D CREARÁS UN RECURSO ---')
            break;
        case "DELETE":
            response.write('-- :D ELIMINARÁS UN RECURSO ---')
            break;
        default:
            response.write('-- :D NADA ---')
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
```
