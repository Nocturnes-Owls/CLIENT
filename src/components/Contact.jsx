import Button from "./Button";
import { useState } from "react";
import SocialNetworks from "./SocialNetworks";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (event) => {
      const property = event.target.name;
      const value = event.target.value;
      setForm({...form, [property]: value})
  }

  return (
    <section className="section contact">
      <div className="container">
        <div className="contact-info">
          <h1 className="title">Contacto</h1>
          <p className="subtitle">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, corporis accusamus! Distinctio minima nostrum.</p>
          <SocialNetworks  
            gmail ="#"
            facebook = "#"
            instagram = "https://www.instagram.com/buhos__nocturnos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          />
        </div>
        <form action="" className="contact-form">
          <div className="container-inputs">
            <div className="content-input">
              <div className="input-label">
                <input id="name" type="text" name="name" onChange={handleChange} value={form.name} autoComplete="off"/>
                <label htmlFor="name" className={`${form.name && 'effectLabel'}`}>Tu Nombre</label>
              </div>
            </div>
            <div className="content-input">
              <div className="input-label">
                <input id="email" type="text" name="email" onChange={handleChange} value={form.email} autoComplete="off"/>
                <label htmlFor="email" className={`${form.email && 'effectLabel'}`}>Tu correo</label>
              </div>
            </div>
          </div>
          <div className="content-input">
            <div className="input-label">
              <textarea id="message" type="text" name="message"  className="text-area" value={form.message} onChange={handleChange} autoComplete="off"/>
              <label htmlFor="message" className={`${form.message && 'effectLabel'}`}>Mensaje</label>
            </div>
          </div>
          <Button label="Enviar"/>
        </form>
      </div>
    </section>
  )
}

export default Contact