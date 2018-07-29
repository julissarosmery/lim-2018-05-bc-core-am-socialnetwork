window.onload =()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //si resta,mps logeados 
            loggedOut.style.display = "none";
            loggedIn.style.display ="block";
            console.log("User >"+ JSON.stringify(user));
        }else{
            //si no estamos logeados
            loggedOut.style.display ="block";
            loggedIn.style.display ="none";
            

            
        }
    });
}

window.register =() => {
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().createUserWithEmailAndPassword(emailValue,passwordValue)
    .then(() =>{
        console.log("usuario registrado");

    })
    .catch((error)=>{
        console.log("error de firebase >" +error.code);
        console.log("errorfirebase,mensaje >" +error.message);
    });
}
window.login=()=>{
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().signInWithEmailAndPassword(emailValue,passwordValue)
    .then(()=>{
        console.log("usuario con login exitoso")
    })
    .catch((error)=>{
        console.log("error de firebase >"+ error.code);
        console.log("error de firebase ,mensaje >" +error.message);

    })
}

