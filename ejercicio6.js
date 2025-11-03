function generarContraseña(){
    let num="";
    for(let i=0;i<6;i++){
        num+=Math.random(10);
    }
    return num;
}
alert(generarContraseña());