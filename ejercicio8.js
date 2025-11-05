//. Normalización de calificaciones. Dado un arreglo de calificaciones, normalizar todos los valores al rango 0–1 dividiendo cada nota entre el máximo del arreglo Tip: usa el operador de propagación: Math.max(...array)
function normalizarCalificaciones(array){
    let max=Math.max(...array);
    for(let i=0;i<array.length;i++){
        array[i]=array[i]/max;
    }
    return array;
}
let calificaciones=new Array();
for(let i=0;i<5;i++){
    calificaciones.push(ParseFloat(prompt("Escriba la calificación de la nota "+(i+1))));
}
alert("Las calificaciones normalizadas son: "+normalizarCalificaciones(calificaciones));