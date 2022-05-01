/* Espacio Martin*/

function inicio(){
    document.getElementById("enviar").disabled = true;
}

function v_nombre(){
    var largo_nombre = document.getElementById("nombre").value.length;
    if (largo_nombre<3 || largo_nombre > 15){
        document.getElementById("texto_nombre").innerHTML = "Error! Nombre entre 3 y 15 caracteres! ";
        document.getElementById("texto_nombre").style.color = "red";
        document.getElementById("flag_nombre").value = "0";
    }else{
        document.getElementById("texto_nombre").innerHTML = "Correcto!";
        document.getElementById("texto_nombre").style.color = "green";
        document.getElementById("flag_nombre").value = "1";
    }
   
    var v1 = document.getElementById("flag_nombre").value;
    var v2 = document.getElementById("flag_apellido").value;
    if (v1 =="1" && v2 =="1"){
        document.getElementById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
    }
}
;

function v_apellido(){
    var largo_apellido = document.getElementById("apellido").value.length;
    if (largo_apellido<3 || largo_apellido > 15){
        document.getElementById("texto_apellido").innerHTML = "Error! Apellido entre 3 y 15 caracteres!";
        document.getElementById("texto_apellido").style.color = "red";
        document.getElementById("flag_apellido").value = "0";
    }else{
        document.getElementById("texto_apellido").innerHTML = "Correcto!";
        document.getElementById("texto_apellido").style.color = "green";
        document.getElementById("flag_apellido").value = "1";
    }
   
    var v1 = document.getElementById("flag_nombre").value;
    var v2 = document.getElementById("flag_apellido").value;
    if (v1 =="1" && v2 =="1"){
        document.getElementById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
    }
}
;

function v_email(){
    document.getElementById('email').addEventListener('input', function(){
    campo = event.target;
    valido = document.getElementById('emailOK');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if ( emailRegex.test(campo.value)) {
        valido.innerText = "Correcto!";
        document.getElementById('emailOK').style.color = "green";
       
    }else{
        valido.innerText = "Incorrecto!";
        document.getElementById('emailOK').style.color = "red";
    }
    
})
};
    
function v_telefono(){
    document.getElementById('telefono').addEventListener('input', function(){
    campo = event.target;
    valido = document.getElementById('telefonoOK');

    telRegex = /^(\+?56)?(\s?)(0?9)(\s?)[9876543]\d{7}$/;

    if ( telRegex.test(campo.value)) {
        valido.innerText = "Correcto!";
        document.getElementById('telefonoOK').style.color = "green";
       
    }else{
        valido.innerText = "Incorrecto!";
        document.getElementById('telefonoOK').style.color = "red";
    }
    
})
};

function validar() {
   
    CampoTexto = document.getElementById("mensaje").value;

    if (CampoTexto.length == 0) {
        document.getElementById("texto_apellido").innerHTML = "Correcto!";
        document.getElementById("texto_apellido").style.color = "green";
    }else{
        document.getElementById("texto_apellido").innerHTML = "Incorrecto!";
        document.getElementById("texto_apellido").style.color = "red";
    }};