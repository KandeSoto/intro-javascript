//Desestructuracion
//Asignación Desestructurante
const persona = {
    nombre: "Tony",
    edad: 45,
    clave: "Ironman",
    //rango: "Soldado",
};

const { nombre, edad, clave } = persona;

console.log(nombre);
console.log(edad);
console.log(clave);

// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const use_Context = ({ clave, nombre, edad, rango = "Capitan" }) => {
    //console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 12.2345,
            lng: -17.9827,
        },
    };
};

// const {
//     nombreClave,
//     anios,
//     latlng: { lat, lng },
// } = use_Context(persona);

const { nombreClave, anios, latlng } = use_Context(persona);
const { lat, lng } = latlng;

console.log(nombreClave, anios);
console.log(lat, lng);
