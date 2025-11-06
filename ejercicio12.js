class Usuario{
    constructor(nombre,email){
        this.nombre=nombre;
        this.email=email;
    }
    mostrarInfo(){
        alert("Nombre: "+this.nombre+"\nEmail: "+this.email);
    }
}
class Cliente extends Usuario{
    constructor(nombre,email){
        super(nombre,email);
        this.fidelidad=Math.floor(Math.random()*5)+1;
    }
    mostrarInfo(){
        super.mostrarInfo();
        alert("Fidelidad: "+this.fidelidad);
    }
}
class Administrador extends Usuario{
    constructor(nombre,email){
        super(nombre,email);
    }
    crear(){
        alert("Se ha creado un administrador");
    }
    mostrarInfo(){
        super.mostrarInfo();
        alert("Permisos: "+this.permisos);
    }
}

//siguente problema

let usuarios=[new Cliente("Juan","juan@gmail.com"),new Administrador("Maria","maria@gmail.com"),new Usuario("Pepe","pepe@gmail.com"),new Administrador("Luis","luis@gmail.com")];
usuarios.forEach(function(usuario){
    usuario.mostrarInfo();
});