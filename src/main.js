window.onload =()=>{
    firebase.auth().onAuthStateChanged((user)=>{
        if(user){
            //si resta,mps logeados 
            loggedOut.style.display = "none";
            loggedIn.style.display ="block";
            console.log("User >"+ JSON.stringify(user));
            alert("hola  ya puedes difrutar de esta red sociallllll siiiiiii");
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
        alert("bienvenida tu registro fue exitoso comensemos 💕");
    })
    .catch((error)=>{
        console.log("error de firebase >" +error.code);
        console.log("errorfirebase,mensaje >" +error.message);
        console.log("que estas hacienbdo tu ya estas registradaaaaaaaaaaa!!!")
        alert("que estas hacienbdo tu ya estas registradaaaaaaaaaaa!!! solo pon logIN")
    });
}
window.login=()=>{
    const emailValue = email.value;
    const passwordValue = password.value;
    firebase.auth().signInWithEmailAndPassword(emailValue,passwordValue)
    .then(()=>{
        console.log("usuario con login exitoso")
        alert("que pasa aqui");
    })
    .catch((error)=>{
        console.log("error de firebase >"+ error.code);
        console.log("error de firebase ,mensaje >" +error.message);
        alert("aun no estas registrada ¿que esperas comienza a registrarte y veras todos los veneficios ...!te queremos muchooo!!!!💖  ...o quizas tu contraseña no es correcta     😨 ");

    })
}

logout=()=>{
    firebase.auth().signOut()
    .then(()=>{
        console.log("chau");
        alert("espero que vuelvas proto te vamos a estrañarrrr");

    })
    .cath();
}
loginFacebook=()=>{
    const provider = new firebase.auth.FacebookAuthProvider();
    //provider.addScope("user_birthday");tiene que pedirle permiso a facebook
    provider.setCustomParameters({
        'display': 'popup'

    });
    firebase.auth().signInWithPopup(provider)
    .then(()=>{
       console.log("login con facebook");
    })
    .catch((error)=>{
        console.log("error de firebase >"+ error.code);
        console.log("error de firebase ,mensaje >" +error.message);
    });
}