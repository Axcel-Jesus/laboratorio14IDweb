function generarContraseña(){
    let num="";
    for(let i=0;i<6;i++){
        num+=Math.floor(Math.random()*10);
    }
    return num;
}
alert("su contraseña es: "+generarContraseña());