 validar=()=>{
var email,password,exprecion;
email = document.getElementById("email").value;
password = document.getElementById("password").value;
if(email ===""|| password === ""){
    alert("lena todoslo sespacioooooooo");
    return false;
}else if(email.length!== "@"){
    alert("proeue no tiene  @");
    return false;
}
}