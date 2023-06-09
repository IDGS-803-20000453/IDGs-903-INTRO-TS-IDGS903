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