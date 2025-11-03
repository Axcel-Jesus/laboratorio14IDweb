const num1=parseInt(prompt("ingrese valor minimo del rango"));
const num2=parseInt(prompt("ingrese valor maximo del rango"));
alert("el numero random es: "+(num1+parseInt(Math.random()*(num2-num1))));
