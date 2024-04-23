//Objetos Literales
//Operador Spread

const persona = {
    nombre: "Tony",
    apellido: "Stark",
    edad: 45,
    direccion: {
        ciudad: "New York",
        zip: 5532178,
        lat: 14.3232,
        lng: 34.9233,
    },
};

// console.table(persona);

//si haces esto solo copias la referencia en memoria y no crea un nuevo objeto
//const persona2 = persona;
const persona2 = { ...persona };

persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
