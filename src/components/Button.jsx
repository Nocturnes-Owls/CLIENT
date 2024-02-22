const Button = ({label, disabled, open}) => {

    return (
        <button className="btn btnPrimary" disabled={disabled} onClick={open}>
            <span className="btn-text">{label}</span>
        </button>
    )
}

export default Button;