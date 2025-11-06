function normalizarCalificaciones(array){
    let maximo=Math.max(...array);
    for(let i=0;i<array.length;i++){
        array[i]=Math.floor((array[i]/maximo)*100)/100;
    }
    return array;
}
let calificaciones=new Array();
alert("Ingrese 5 calificaciones separadas por comas");
for(let i=0;i<5;i++){
    calificaciones.push(parseInt(prompt("Escriba la calificación de la nota "+(i+1))));
}
alert("Las calificaciones normalizadas son: "+normalizarCalificaciones(calificaciones));