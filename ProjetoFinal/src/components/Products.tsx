
type ProductsProps = {
    title?: string;
    imageUrl: string;
    text?: string;
};

function Products ({title, imageUrl, text }: ProductsProps) {

    return (
        <>
        <h4>{title}</h4>
        <img src={imageUrl} alt={`image ${title}`}/>
        <p>{text}</p>
        </>
    )
};

export default Products;