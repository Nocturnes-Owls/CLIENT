import Swal from 'sweetalert2'

export const modalSuccess = () => {
    Swal.fire({
      title: "Datos enviados",
      html: `<div style="margin:0.5rem 0">
                <p>Gracias por contactarnos.</p>
                <p>En la brevedad nos pondremos en contacto contigo.</p>
            </div>`,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };
  
export const modalError = () => {
    Swal.fire({
      title: "Lo siento",
      text: "Estamos teniendo un problema",
      confirmButtonText: "Cerrar",
    });
  };