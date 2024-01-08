
const validate = (form, property, errors, setErrors) => {
    //Expresiones regulares
    const regexLetters=/^[a-zA-Z ]+$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{3}$/;

    if(property === "name"){
        if(form.name === "") setErrors({...errors, name: "Su nombre es requerido"});
        else if(!regexLetters.test(form.name)) setErrors({...errors, name:"Ingrese sólo letras"});
        else setErrors({...errors, name:""});
    }
    if(property === "email"){
        if(form.email === "") setErrors({...errors, email: "Su email es requerido"});
        else if(!regexEmail.test(form.email)) setErrors({...errors, email:"Ingrese un correo válido"});
        else setErrors({...errors, email:""});
    }
    if(property === "message"){
        if(form.message === "") setErrors({...errors, message: "Campo requerido"});
        else setErrors({...errors, message: ""})
    }
}

export default validate;