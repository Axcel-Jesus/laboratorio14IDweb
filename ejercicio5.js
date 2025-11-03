function gradosaRadianes(grados){
    const radian=grados*Math.PI/180;
    return "el seno es: "+Math.sin(radian)+"\nel coseno es: "+Math.cos(radian);
}
function RadianesaGrados(radian){
    const grados=radian*180/Math.PI;
    return grados;
}
const num1=parseFloat(prompt("ingrese grados sexagecimales"));
alert(gradosaRadianes(num1));
const num2=parseFloat(prompt("ingrese grados radianes"));
alert("sus grados randianes a sexagesimales es: "+RadianesaGrados(num2));