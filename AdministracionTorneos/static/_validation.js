function validation() {
    var username = document.getElementById('username');
    var password = document.getElementById('exampleInputPassword1');
    var repassword = document.getElementById('clave2');
    if (username.value.length == 0 || password.value.length == 0 || repassword.value.length == 0) {
        alert('Existen campos vacios')
    } else if(password.value != repassword.value){
        alert('Las claves no coinciden')
    }
}

function mostrarContrasena() {
    var tipo = document.getElementById("exampleInputPassword1");
    if (tipo.type == "password") {
        tipo.type = "text";
    } else {
        tipo.type = "password";
    }
}