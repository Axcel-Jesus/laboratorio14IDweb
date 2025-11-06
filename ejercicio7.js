//Calcular distancia entre dos puntos en el plano cartesiano. Dadas las coordenadas (x1, y1) y (x2, y2), calcular la distancia entre los puntos y la suma de las distancias de cada punto al origen
function distanciaEntrePuntos(x1,y1,x2,y2){
    let distanciaX=Math.abs(x1-x2);
    let distanciaY=Math.abs(y1-y2);
    return Math.floor((Math.sqrt(Math.pow(distanciaX,2)+Math.pow(distanciaY,2)))*100)/100;
}
function distanciaalorigen(x,y){
    return Math.floor((Math.sqrt(Math.pow(x,2)+Math.pow(y,2)))*100)/100;
}
let x1=parseFloat(prompt("ingrese la coordenada x del punto 1"));
let y1=parseFloat(prompt("ingrese la coordenada y del punto 1"));
let x2=parseFloat(prompt("ingrese la coordenada x del punto 2"));
let y2=parseFloat(prompt("ingrese la coordenada y del punto 2"));
let distancia=distanciaEntrePuntos(x1,y1,x2,y2);
let distanciaAlOrigen=distanciaalorigen(x1,y1);
let distanciaAlOrigen2=distanciaalorigen(x2,y2);
alert("La distancia entre los puntos es: "+distancia+"\nLa distancia del punto 1 al origen es: "+distanciaAlOrigen+"\nLa distancia del punto 2 al origen es: "+distanciaAlOrigen2);