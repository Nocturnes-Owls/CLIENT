import { BsXCircleFill } from "react-icons/bs";

const Modal = ({ title, open, isClose, children, setOpenModal }) => {

  return (
    <div id="modal" className={`container-modal ${open ? 'open' : ''}`} onClick={() => setOpenModal(false)}>
      <div className="content-modal" onClick={(event) => event.stopPropagation()}>
        <div className="header-modal">
          <h1 className="modal-title">{title}</h1>
          <button className="close-modal" onClick={isClose}>
            <BsXCircleFill />
          </button>
        </div>
        <div className="body-modal">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
