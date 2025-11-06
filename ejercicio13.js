class Empleado{
    constructor(nombre,sueldoBase){
        this.nombre=nombre;
        this.sueldoBase=sueldoBase;
    }
    calcularSueldo(){
        return this.sueldoBase;
    }
}
class Programador extends Empleado{
    constructor(nombre,sueldoBase,lenguaje){
        super(nombre,sueldoBase);
        this.lenguaje=lenguaje;
    }
    calcularSueldo(){
        let sueldo=super.calcularSueldo();
        sueldo=sueldo*1.1;
        return sueldo;
    }
}
class ProgramadorSenior extends Programador{
    constructor(nombre,sueldoBase,lenguaje){
        super(nombre,sueldoBase,lenguaje);
    }
    calcularSueldo(){
        let sueldo=super.calcularSueldo();
        sueldo=sueldo*1.25;
        return sueldo;
    }
}
let Juan=new Programador("Juan",10000,"Javascript");
let Maria=new ProgramadorSenior("Maria",10000,"Javascript");
console.log("Juan: "+Juan.nombre+" sueldo: "+Juan.calcularSueldo());
console.log("Maria: "+Maria.nombre+" sueldo: "+Maria.calcularSueldo());