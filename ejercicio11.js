//Herencia. Crear una clase Figura. Debe tener un método area() y perímetro() que las subclases Cuadrado y Triangulo deben sobrescribir.
//Tip: llamar a constructor de la superclase
class Figura{
    constructor(ancho,alto){
        this.ancho=ancho;
        this.alto=alto;
    }
    area(){
        return this.ancho*this.alto;
    }
    perimetro(){
        return 2*(this.ancho+this.alto);
    }
}
class Cuadrado extends Figura{
    constructor(ancho,alto){
        super(ancho,alto);
    }
    area(){
        return super.area();
    }
    perimetro(){
        return super.perimetro();
    }
}
class Triangulo extends Figura{
    constructor(ancho,alto){
        super(ancho,alto);
    }
    area(){
        return super.area();
    }
    perimetro(){
        return super.perimetro();
    }
}
let cuadrado=new Cuadrado(5,5);
let triangulo=new Triangulo(5,5);
alert("El área del cuadrado es: "+cuadrado.area()+"\nEl perímetro del cuadrado es: "+cuadrado.perimetro()+"\nEl área del triangulo es: "+triangulo.area()+"\nEl perímetro del triangulo es: "+triangulo.perimetro());