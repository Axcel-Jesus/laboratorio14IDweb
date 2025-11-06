class Carrito{
    #productos=[];
    agregarProducto(producto){
        this.#productos.push(producto);
    }
    calcularTotal(){
        let total=0;
        this.#productos.forEach(function(producto){
            total+=producto.getPrecio()*producto.getCantidad();
        });
        return total;
    }
    mostrarResumen(){
        let total=this.calcularTotal();
        alert("Total: "+total);
    }
}
class Producto{
    #nombre;
    #precio;
    #cantidad;
    constructor(nombre,precio,cantidad){
        this.#nombre=nombre;
        this.#precio=precio;
        this.#cantidad=cantidad;
    }
    getNombre(){
        return this.#nombre;
    }
    getPrecio(){
        return this.#precio;
    }
    getCantidad(){
        return this.#cantidad;
    }
}