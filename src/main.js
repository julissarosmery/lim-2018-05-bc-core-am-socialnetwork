logInOnRegister=()=>{
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue,passwordValue)
    .them(()=>{
        console.log("usuario registrado");

    })
    .catch((error)=>{
        console.log("error de firebase >" +error.code);
        console.log("errorfirebase,mensaje >" +error.message);
    });
}

