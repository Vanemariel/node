//npm init
//npm node

/*ejercicio
Escriba un programa que reciba
como argumento una URL y realice una petición HTTP GET 
a la misma. Luego deberá imprimir por consola el
contenido de cada evento "data", cada uno por línea
 */

const http = require('http');
const readline = require('readline');

const url = process.argv[2]; // Obtener la URL como argumento del programa

http.get(url, (res) => {
  // Crear una interfaz de lectura para leer el contenido de la respuesta línea por línea
  const rl = readline.createInterface({
    input: res,
    crlfDelay: Infinity
  });

  rl.on('line', (line) => {
    const data = JSON.parse(line); // Convertir la línea a un objeto JSON
    if (data.event === 'data') {
      console.log(data); // Imprimir el objeto si es un evento "data"
    }
  });
});
n