import Button from "./Button";
import { useState, useEffect } from "react";
import SocialNetworks from "./SocialNetworks";
import validate from "../utils/validate";
import axios from 'axios';
import { modalSuccess, modalError } from "../utils/modal";
import { observer } from "../utils/animationScroll";

const URL_API = "https://nocturneowls.tech";

const Contact = ({description}) => {
  useEffect(()=> {
    const contact = document.getElementById('contact')
    observer.observe(contact);
  }, [])

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })
  
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;
      setForm({...form, [property]: value})
      validate({...form, [property] : value}, property, errors, setErrors)
  }

  //Deshabilitar botón
  const btnDisabled = () => {
    let disabledAux = true;
    for(let error in errors){
        if(errors[error] === ""){
            disabledAux = false;
        }else{
            disabledAux = true;
            break;
        }
    }
    return disabledAux;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post(`${URL_API}/sendEmail`, form);
        modalSuccess();
        setForm({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    } catch (error) {
        modalError();
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-info">
          <h1 className="title">Contacto</h1>
          <p className="subtitle">{description}</p>
          <SocialNetworks  
            gmail ="thenocturneowls@gmail.com"
            discord = "https://discord.gg/EBAcH6N9"
            instagram = "https://www.instagram.com/buhos__nocturnos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          />
        </div>
        <form action="" className="contact-form" onSubmit={handleSubmit}>
          <div className="container-inputs">
            <div className="content-input">
              <div className="input-label">
                <input id="name" type="text" name="name" onChange={handleChange} value={form.name} autoComplete="off"/>
                <label htmlFor="name" className={`${form.name && 'effectLabel'}`}>Tu Nombre</label>
              </div>
              {errors.name && <span className="messageError">{errors.name}</span>}
            </div>
            <div className="content-input">
              <div className="input-label">
                <input id="email" type="text" name="email" onChange={handleChange} value={form.email} autoComplete="off"/>
                <label htmlFor="email" className={`${form.email && 'effectLabel'}`}>Tu correo</label>
              </div>
              {errors.email && <span className="messageError">{errors.email}</span>}
            </div>
          </div>
          <div className="content-input">
            <div className="input-label">
              <textarea id="message" type="text" name="message"  className="text-area" value={form.message} onChange={handleChange} autoComplete="off"/>
              <label htmlFor="message" className={`${form.message && 'effectLabel'}`}>Mensaje</label>
            </div>
            {errors.message && <span className="messageError">{errors.message}</span>}
          </div>
          <Button label="Enviar" disabled={
            btnDisabled() ||
            !form.name || 
            !form.email || 
            !form.message
          }/>
        </form>
      </div>
    </section>
  )
}

export default Contact