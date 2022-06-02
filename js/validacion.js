(function(){
    var formulario = document.getElementsByName('formulario')[0],
    elementos = formulario.elements,
    boton = document.getElementById('btn');

    var validarNombre = function(e){
        if(formulario.nombre.value == 0) {
            alert("complete el campo nombre")
            e.preventDefault();
        }
    };

    var validarCorreo = function(e){
        if(formulario.email.value == 0) {
            alert("complete el campo correo electronico")
            e.preventDefault();
        }
    };

    var validarTelefono = function(e){
        if(formulario.telefono.value == 0) {
            alert("complete el campo telefono")
            e.preventDefault();
        }
    };

    var validar = function(e){
        validarNombre(e);
        validarCorreo(e);
        validarTelefono(e);
    };
    
    formulario.addEventListener('submit', validar);

   
}())

/* menu despplegable */

var clic = 1;

function spanLogin() {

    if(clic==1){

        document.getElementById("caja").style.height = "90px";
        clic = clic + 1;
    } else{
        document.getElementById("caja").style.height = "0px";
        clic = 1;
    }
}


