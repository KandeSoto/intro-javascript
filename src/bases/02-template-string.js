// Template Strings

const nombre = "Candelario";
const apellido = "Soto";

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre) {
    return "Hola Mundo " + nombre;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`);
