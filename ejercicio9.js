//Control de inventario con encapsulación. Crear una clase Producto con atributos privados nombre, precio, stock.
//Implementa setters que validen que el precio y el stock sean mayores a 0
//Agregar un método vender(cantidad) que disminuya el stock solo si hay unidades suficientes
class Producto{
    constructor(nombre,precio,stock){
        this.nombre=nombre;
        this.precio=precio;
        this.stock=stock;
    }
    setNombre(nombre){
        if(nombre.length>0){
            this.nombre=nombre;
        }
    }
    getNombre(){
        return this.nombre;
    }
    setPrecio(precio){
        if(precio>0){
            this.precio=precio;
        }
    }
    getPrecio(){
        return this.precio;
    }
    setStock(stock){
        if(stock>0){
            this.stock=stock;
        }
    }
    getStock(){
        return this.stock;
    }
    vender(cantidad){
        if(this.stock>=cantidad){
            this.stock-=cantidad;
        }
    }
}
let product=new Producto("Jugo de agua",1.5,10);
