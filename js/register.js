/*plugin de banderas al iniciar el documento */
$(document).ready(function () {
    $('#demo').intlTelInput();
});

/*se declara el valor del boton next */
var next = $('.next');
/*el botón estraa desactivado hasta que se introduzca un numero de 10 digitos */
$("#demo").keypress(function () {
    if ((this.value).length === 9) {
        next.removeClass('disabled');
    } else if ((this.value).length !== 10) {
        next.addClass('disabled');
    }
});

/*función para crear código aleatorio */
function makeid() {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}
console.log('makeid');

/*alert que desplegará el código aleatorio generado y nos redirecciona a la siguiente pantalla */
next.on("click", function (event) {
    event.preventDefault();
    makeCode();
    alert('Tu código es: ' + 'LAB-' + code);
    window.location.href = 'form.html';
});

var code ;
function makeCode() {
  code= makeid();  
  localStorage.saving = code;
}

