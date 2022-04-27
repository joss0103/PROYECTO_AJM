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
        document.getElementById("texto_nombre").innerHTML = "Correcto";
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
        document.getElementById("texto_apellido").innerHTML = "Correcto";
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
function v_gmail(){
    var arroba_gmail = document.getElementById("gmail").value;
    if (largo_apellido<3 || largo_apellido > 15){
        document.getElementById("texto_apellido").innerHTML = "Error! Apellido entre 3 y 15 caracteres!";
        document.getElementById("texto_apellido").style.color = "red";
        document.getElementById("flag_apellido").value = "0";
    }else{
        document.getElementById("texto_apellido").innerHTML = "Correcto";
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







/* Espacio Álvaro*/




