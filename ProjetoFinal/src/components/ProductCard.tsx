import './ProductCard.scss';

type ProductCardProps = {
  label?: string;
  imageUrl: string;
  price?: string;
};

function ProductCard({ label, imageUrl, price }: ProductCardProps) {
  return (
    <div className="product-card">
      <img src={imageUrl} alt={`image ${imageUrl}`} />
      <h4>{label}</h4>
      <span>{price}</span>
    </div>
  );
}

export default ProductCard;
