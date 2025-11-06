class Producto{
    #nombre;
    #precio;
    #stock;
    constructor(nombre,precio,stock){
        this.#nombre=nombre;
        this.#precio=precio;
        this.#stock=stock;
    }
    setNombre(nombre){
        this.#nombre=nombre;
    }
    getNombre(){
        return this.#nombre;
    }
    setPrecio(precio){
        if(precio>0){
            this.#precio=precio;
        }
        else{
            alert("el precio no puede ser negativo");
        }
    }
    getPrecio(){
        return this.#precio;
    }
    setStock(stock){
        if(stock>0){
            this.#stock=stock;
        }
    }
    getStock(){
        return this.#stock;
    }
    vender(cantidad){
        if(this.#stock>=cantidad){
            this.#stock-=cantidad;
            alert(cantidad + " unidades vendidas");
        }
        else{
            alert("no hay suficiente stock");
        }
    }
}
let product=new Producto(prompt("ingrese el nombre del producto"),parseFloat(prompt("ingrese el precio del producto")),parseInt(prompt("ingrese el stock del producto")));
alert("Nombre: "+product.getNombre()+"\nPrecio: "+product.getPrecio()+"\nStock: "+product.getStock());
product.setNombre("jugo de piña");
alert("el nombre del producto ha cambiado a: "+product.getNombre());
alert("se quiere vender 10 unidades");
product.vender(10);
alert("el stock del producto ha cambiado a: "+product.getStock());