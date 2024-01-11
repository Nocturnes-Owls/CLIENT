import Swal from 'sweetalert2'

export const modalSuccess = () => {
    Swal.fire({
      title: '<h2 class="modal-title">Datos enviados</h2>',
      html: `<div style="margin:0.5rem 0">
                <p class="modal-subtitle">Gracias por contactarnos.</br> En la brevedad nos pondremos en contacto contigo.</p>
            </div>`,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };
  
export const modalError = () => {
    Swal.fire({
      title: '<h2 class="modal-title">Lo siento</h2>',
      html: `<div style="margin:0.5rem 0">
                <p class="modal-subtitle">Estamos teniendo un problema</p>
            </div>`,
      showConfirmButton: false,
      showCloseButton: true,
    });
  };