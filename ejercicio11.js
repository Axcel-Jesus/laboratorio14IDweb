class Figura{
    constructor(ancho,alto){
        this.ancho=ancho;
        this.alto=alto;
    }
    area(){
    }
    perimetro(){
    }
}
class Cuadrado extends Figura{
    constructor(lado,lado){
        super(ancho,alto);
    }
    area(){
        return lado*lado;
    }
    perimetro(){
        return 4*lado;
    }
}
class Triangulo extends Figura{
    constructor(base,altura){
        super(base,altura);
    }
    area(){
        return base*altura/2;
    }
    perimetro(){
        return base+altura+Math.sqrt(base**2+altura**2,2);
    }
}
let lado=parseFloat(prompt("ingrese el lado del cuadrado"));
let cuadrado=new Cuadrado(lado, lado);
let triangulo=new Triangulo(parseFloat(prompt("ingrese la base del triangulo")),parseFloat(prompt("ingrese la altura del triangulo")));
alert("El área del cuadrado es: "+cuadrado.area()+"\nEl perímetro del cuadrado es: "+cuadrado.perimetro()+"\nEl área del triangulo es: "+triangulo.area()+"\nEl perímetro del triangulo es: "+triangulo.perimetro());