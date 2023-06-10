//desestructuracion de objetos
interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
}
interface Grupo{
    grupo:string;
    year:number;
}

const alumno2:Alumno1={
    matricula1:12345,
    nombre:'Mario',
    edad:20,
    correo:'marioroberto@gmail.com',
    grupo:{
        grupo:'idgs',
        year:2023
    }
}

console.log('La matricula es: ${alumno2.matricula1}')
console.log('El nombre es: ${alumno2.nombre}')
console.log('el año del grupo es: ${alumno2.grupo.year}')

const {matricula1,grupo:xx}=alumno2
const {grupo,year:anio}=xx

console.log('La matricula es: ${matricula1}')
console.log('El Nombre es: ${nom}')
console.log('el grupo es: ${grupo}')
console.log('el año del grupo es: ${anio}')

//desestructuracion de arreglos
const gps:string[]=['IDGS','IEVN','IEMT','REDES'];

console.log('Grupo 1: ${gps[0]}')
console.log('Grupo 2: ${gps[1]}')
console.log('Grupo 3: ${gps[2]}')

const [a,,b]=gps

console.log('Grupo 1: ${a}')