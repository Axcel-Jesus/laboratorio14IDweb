class Notificacion{
    enviar(){
        alert("Notificación enviada");
    }
}
class Email extends Notificacion{
    enviar(){
        alert("Notificación enviada por email");
    }
}
class SMS extends Notificacion{
    enviar(){
        alert("Notificación enviada por SMS");
    }
}
class Push extends Notificacion{
    enviar(){
        alert("Notificación enviada por Push");
    }
}
function procesarNotificaciones(notificaciones){
    notificaciones.forEach(function(notificacion){
        notificacion.enviar();
    });
}
let notificaciones=[new Email(),new SMS(),new Push()];
procesarNotificaciones(notificaciones);
