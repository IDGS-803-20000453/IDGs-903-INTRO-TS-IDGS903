function suma():void{
    console.log(2+7)
    }
    
    suma();
    
    function suma2(num1:number,num2:number):void{
        console.log(num1+num2)
    }
    suma2(2,3)

    
    function suma3(num1:number,num2:number):number{
        return num1+num2
    }
    console.log(suma3(10,3))

    const suma4=(a:number,b:number):string=>{
        return `${a+b}`
    }
    
    function multiplicar(num1:number,num2:number,num3=3):number{
        let tem= num1* num3;
        return tem
    }

    interface mascota{
        nombre:string;
        edad:number;
        mostrarEdad:()=>void;
    }
    function calcular(mascota:mascota,x:number):void{
        mascota.edad+=x;
        console.log(mascota)
    }

    const nuevaMascota:mascota={
        nombre:'firulais',
        edad:3,
        mostrarEdad(){
            console.log('La edad es: '+this.edad);
        },
    }
    calcular(nuevaMascota,5)
    nuevaMascota.mostrarEdad()
    console.log(multiplicar(3,0,2))
//funciones anonimas
const funcSumar = function(valor1:number,valor2:number):number{
    return valor1+valor2;
}
console.log(funcSumar(4,5))

//funcion con parametros opcionales
function calcularParamOp(n1:number, n2:number, n3?:number):number{
    if(n3){
        return n1+n2+n3;
    }else{
        return n1+n2;
    }
}
console.log(calcularParamOp(3,2,5))
console.log(calcularParamOp(3,2))

//Parametros REST en funciones
function calcular2(...valores:number[]):number{
    let suma=0;
    for(let x=0;x<valores.length;x++){
        suma+=valores[x];
    }
    return suma;
}

console.log(calcular2(10,2,3,4))
console.log(calcular2(1,2))