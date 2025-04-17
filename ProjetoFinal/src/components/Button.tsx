import "./Button.scss"

type ButtonProps = {
    label?: string,
    onClick?: () => void,
    variant: "home" | "shop" | "subscribe" | "link"
};


function Button ({label, onClick, variant}: ButtonProps) {

    return (
        <button className={`btn ${variant}`} onClick={onClick}>{label}</button>
    )
};

export default Button;