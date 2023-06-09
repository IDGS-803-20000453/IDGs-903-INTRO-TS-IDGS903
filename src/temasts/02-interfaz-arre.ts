// Objetos, arreglos e interfaces
interface Alumno{
    matricula: number;
    nombre: string;
    email: string;
}


const alumno:Alumno = {
    nombre: 'Guillermo',
    matricula: 201345,
    email: 'guillermos_elmaiz@hotmail.com'
}

let mascotas=['perro','gato','perico']
mascotas[1]='gatito'
mascotas.push('tortuga')
//arreglos de varios tipos
let tem:(number|string)[]=[]
tem.push('nombre')
tem.push(224)

console.log(alumno)
console.log(mascotas)
console.table(alumno)