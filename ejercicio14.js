class Cuenta{
    #saldo=0;
    constructor(saldo){
        this.#saldo=saldo;
    }
    getSaldo(){
        return this.#saldo;
    }
    depositar(cantidad){
        this.#saldo+=cantidad;
    }
    retirar(cantidad){
        if(this.#saldo>=cantidad){
            this.#saldo-=cantidad;
        }else{
            alert("No hay suficiente saldo");
        }
    }
}
class CuentaAhorro extends Cuenta{
    constructor(saldo){
        super(saldo);
    }
    retirar(cantidad){
        if(this.saldo>=cantidad){
            this.saldo-=cantidad;
        }else{
            alert("No hay suficiente saldo");
        }
    }
}
class CuentaCorriente extends Cuenta{
    #limite=1000;
    constructor(saldo){
        super(saldo);
    }
    retirar(cantidad){
        if(this.saldo>=cantidad&&this.#limite>=cantidad){
            this.saldo-=cantidad;
        }else{
            alert("No hay suficiente saldo");
        }
    }
}
let cuenta1=new CuentaAhorro(1000);
let cuenta2=new CuentaCorriente(1000);
cuenta1.depositar(100);
cuenta2.depositar(100);
cuenta1.retirar(100);
cuenta2.retirar(100);
console.log("Cuenta1: "+cuenta1.getSaldo());
console.log("Cuenta2: "+cuenta2.getSaldo());