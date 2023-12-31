const Button = ({label, disabled}) => {

    return (
        <button className="btn btnPrimary" disabled={disabled}>
            {label}
        </button>
    )
}

export default Button;