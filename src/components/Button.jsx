const Button = ({label, disabled}) => {

    return (
        <button className="btn btnPrimary" disabled={disabled}>
            <span className="btn-text">{label}</span>
        </button>
    )
}

export default Button;