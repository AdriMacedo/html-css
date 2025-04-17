type ProductCardProps = {
    label: string;
    imageUrl: string;
    price?: string;
};

function ProductCard ({label, imageUrl, price}: ProductCardProps) {

    return (
        <>
        <h3>{label}</h3>
        <img src={imageUrl} alt={`image ${imageUrl}`} />
        <span>{price}</span>
        </>
    )
};

export default ProductCard;