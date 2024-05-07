//desestructuracion de arreglos
const personajes = ["Goku", "Vegeta", "Trunks"];

// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

//Tarea
//1. el primer valor del arr se llamara nombre
//2. el segundo valor del arr se llamara setNombre
const use_State = (valor) => {
    return [
        valor,
        () => {
            console.log("Hola Mundo");
        },
    ];
};

//const arr = use_State("Goku");
const [nombre, setNombre] = use_State("Goku");

//arr[1]();
console.log(nombre);
setNombre();
