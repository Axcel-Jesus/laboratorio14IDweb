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
    setPrecio(precioo){
        this.precio=Number(precioo);
        if(precio>0){
            this.precio=precio;
        }
    }
    getPrecio(){
        return this.precio.toFixed(2);
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
    }s
}