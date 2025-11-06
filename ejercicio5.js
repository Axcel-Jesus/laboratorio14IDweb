function gradosaRadianes(grados){
    const radian=grados*Math.PI/180;
    return "el seno es: "+Math.floor(Math.sin(radian)*100)/100+"\nel coseno es: "+Math.floor(Math.cos(radian)*100)/100;
}
function RadianesaGrados(radian){
    const grados=Math.floor(radian*180/Math.PI*100)/100;
    return grados;
}
const num1=parseFloat(prompt("ingrese grados sexagecimales"));
alert(gradosaRadianes(num1));
const num2=parseFloat(prompt("ingrese grados radianes"));
alert("sus grados randianes a sexagesimales es: "+RadianesaGrados(num2));