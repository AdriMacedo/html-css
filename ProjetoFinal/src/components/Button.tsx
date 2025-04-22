import "./Button.scss"

type ButtonProps = {
    label?: string,
    onClick?: () => void,
    className?: string;
    variant: "home" | "shop" | "subscribe" | "link"
};


function Button ({label, onClick, variant, className}: ButtonProps) {

    return (
        <button className={`btn ${variant} ${className || ""}`} onClick={onClick}>{label}</button>
    )
};

export default Button;