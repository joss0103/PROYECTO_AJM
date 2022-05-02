/* Espacio Martin*/

function inicio(){
    document.getElementById("enviar").disabled = true;
}


function v_nombre(){
    var largo_nombre = document.getElementById("nombre").value.length;
    if (largo_nombre<3 || largo_nombre > 15 ){
        document.getElementById("texto_nombre").innerHTML = "Error! Nombre entre 3 y 15 caracteres!";
        document.getElementById("texto_nombre").style.color = "red";
        document.getElementById("flag_nombre").value = "0";
    }else{
        document.getElementById("texto_nombre").innerHTML = "Correcto!";
        document.getElementById("texto_nombre").style.color = "green";
        document.getElementById("flag_nombre").value = "1";
    }
   
    var v1 = document.getElementById("flag_nombre").value;
    var v2 = document.getElementById("flag_apellido").value;
    var v3 = document.getElementById("flag_email").value;
    var v4 = document.getElementById("flag_telefono").value;
    var v5 = document.getElementById("flag_mensaje").value;
    if (v1 =="1" && v2 =="1"&& v3 =="1"&& v4 =="1"&& v5=="1"){
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
    var v3 = document.getElementById("flag_email").value;
    var v4 = document.getElementById("flag_telefono").value;
    var v5 = document.getElementById("flag_mensaje").value;
    if (v1 =="1" && v2 =="1"&& v3 =="1"&& v4 =="1"&& v5=="1"){
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
        document.getElementById("flag_email").value = "1";
       
    }else{
        valido.innerText = "Incorrecto!";
        document.getElementById('emailOK').style.color = "red";
        document.getElementById("flag_email").value = "0";
    }
    var v1 = document.getElementById("flag_nombre").value;
    var v2 = document.getElementById("flag_apellido").value;
    var v3 = document.getElementById("flag_email").value;
    var v4 = document.getElementById("flag_telefono").value;
    var v5 = document.getElementById("flag_mensaje").value;
    if (v1 =="1" && v2 =="1"&& v3 =="1"&& v4 =="1"&& v5=="1"){
        document.getElementById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
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
        document.getElementById("flag_telefono").value = "1";
       
    }else{
        valido.innerText = "Incorrecto!";
        document.getElementById('telefonoOK').style.color = "red";
        document.getElementById("flag_telefono").value = "0";
    }
    var v1 = document.getElementById("flag_nombre").value;
    var v2 = document.getElementById("flag_apellido").value;
    var v3 = document.getElementById("flag_email").value;
    var v4 = document.getElementById("flag_telefono").value;
    var v5 = document.getElementById("flag_mensaje").value;
    if (v1 =="1" && v2 =="1"&& v3 =="1"&& v4 =="1"&& v5=="1"){
        document.getElementById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
    }
})
};

function v_mensaje() {
   
    CampoTexto = document.getElementById("mensaje").value;

    if (CampoTexto.length >= 1) {
        document.getElementById("mensajeOK").innerHTML = "Correcto!";
        document.getElementById("mensajeOK").style.color = "green";
        document.getElementById("flag_mensaje").value = "1";
    }else{
        document.getElementById("mensajeOK").innerHTML = "Incorrecto!";
        document.getElementById("mensajeOK").style.color = "red";
        document.getElementById("flag_mensaje").value = "0";
    }
    var v1 = document.getElementById("flag_nombre").value;
    var v2 = document.getElementById("flag_apellido").value;
    var v3 = document.getElementById("flag_email").value;
    var v4 = document.getElementById("flag_telefono").value;
    var v5 = document.getElementById("flag_mensaje").value;
    if (v1 =="1" && v2 =="1"&& v3 =="1"&& v4 =="1"&& v5=="1"){
        document.getElementById("enviar").disabled = false;
    }else{
        document.getElementById("enviar").disabled = true;
    }
};

/* Espacio Álvaro */

function reg_inicio(){
    document.getElementById("reg_enviar").disabled = true;
}

function reg_vnom(){
    var largo_nombre = document.getElementById("reg_nom").value.length;
    if (largo_nombre <3 || largo_nombre > 15 ){
        document.getElementById("estado_nombre").innerHTML = "Error: El nombre debe entre 3 y 15 caracteres, sin números.";
        document.getElementById("estado_nombre").style.color = "red";
        document.getElementById("v_reg_nom").value = "0";
    }else{
        document.getElementById("estado_nombre").innerHTML = "OK ✓";
        document.getElementById("estado_nombre").style.color = "green";
        document.getElementById("v_reg_nom").value = "1";
    }

    var v_reg1 = document.getElementById("v_reg_nom").value;
    var v_reg2 = document.getElementById("v_reg_email").value;
    var v_reg3 = document.getElementById("v_reg_pass1").value;
    var v_reg4 = document.getElementById("v_reg_pass2").value;    
    if (v_reg1 =="1" && v_reg2 =="1"&& v_reg3 =="1"&& v_reg4 =="1"){
        document.getElementById("reg_enviar").disabled = false;
    }else{
        document.getElementById("reg_enviar").disabled = true;
    }
   
}

function reg_vemail(){
    document.getElementById('reg_email').addEventListener('input', function(){
    campo = event.target;
    valido = document.getElementById('estado_email');

    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if ( emailRegex.test(campo.value)) {
        valido.innerText = "Correcto!";
        document.getElementById('estado_email').style.color = "green";
        document.getElementById("v_reg_email").value = "1";
       
    }else{
        valido.innerText = "Incorrecto!";
        document.getElementById('estado_email').style.color = "red";
        document.getElementById("v_reg_email").value = "0";
    }
        
})
    var v_reg1 = document.getElementById("v_reg_nom").value;
    var v_reg2 = document.getElementById("v_reg_email").value;
    var v_reg3 = document.getElementById("v_reg_pass1").value;
    var v_reg4 = document.getElementById("v_reg_pass2").value;    
    if (v_reg1 =="1" && v_reg2 =="1"&& v_reg3 =="1"&& v_reg4 =="1"){
        document.getElementById("reg_enviar").disabled = false;
    }else{
        document.getElementById("reg_enviar").disabled = true;
    }

};

function reg_vpass1(){
    var largo_pass1 = document.getElementById("reg_pass1").value.length;
    var pass1 = document.getElementById("reg_pass1").value;
    var passRegex = /\d/;
    if (largo_pass1 < 8 || largo_pass1 > 15 || passRegex.test(pass1) == false) {
        document.getElementById("estado_pass1").innerHTML = "Error: Contraseña debe entre 8 y 15 caracteres y al menos un número.";
        document.getElementById("estado_pass1").style.color = "red";
        document.getElementById("v_reg_pass1").value = "0";
    }else{
        document.getElementById("estado_pass1").innerHTML = "OK ✓";
        document.getElementById("estado_pass1").style.color = "green";
        document.getElementById("v_reg_pass1").value = "1";
    }

    var v_reg1 = document.getElementById("v_reg_nom").value;
    var v_reg2 = document.getElementById("v_reg_email").value;
    var v_reg3 = document.getElementById("v_reg_pass1").value;
    var v_reg4 = document.getElementById("v_reg_pass2").value;
    if (v_reg1 =="1" && v_reg2 =="1"&& v_reg3 =="1"&& v_reg4 =="1"){
        document.getElementById("reg_enviar").disabled = false;
    }else{
        document.getElementById("reg_enviar").disabled = true;
    }
   
}

function reg_vpass2(){
    var largo_pass2 = document.getElementById("reg_pass2").value.length;
    var pass1 = document.getElementById("reg_pass1").value;
    var pass2 = document.getElementById("reg_pass2").value;
    var passRegex = /\d/;
    var valor_pass2 = document.getElementById("reg_pass2").value.length;

    if (pass1 != pass2) {
        document.getElementById("estado_pass2").innerHTML = "Error: Las contraseñas ingresadas no coinciden.";
        document.getElementById("estado_pass2").style.color = "red";
        document.getElementById("v_reg_pass2").value = "0";
    }else{
        document.getElementById("estado_pass2").innerHTML = "OK ✓";
        document.getElementById("estado_pass2").style.color = "green";
        document.getElementById("v_reg_pass2").value = "1";
    }

    var v_reg1 = document.getElementById("v_reg_nom").value;
    var v_reg2 = document.getElementById("v_reg_email").value;
    var v_reg3 = document.getElementById("v_reg_pass1").value;
    var v_reg4 = document.getElementById("v_reg_pass2").value;    
    if (v_reg1 =="1" && v_reg2 =="1"&& v_reg3 =="1"&& v_reg4 =="1"){
        document.getElementById("reg_enviar").disabled = false;
    }else {
        document.getElementById("reg_enviar").disabled = true;
    }
    
   
}




    