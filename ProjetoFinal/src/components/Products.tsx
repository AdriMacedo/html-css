import './Products.scss';

type ProductsProps = {
  title?: string;
  imageUrlMobile: string;
  imageUrlDesktop: string;
  text?: string;
};

function Products({ title, imageUrlMobile, imageUrlDesktop, text }: ProductsProps) {
  return (
    <div className="product-card">
      <div className="product-card__img-wrapper">
        <picture>
          <h4 className="product-card__title">{title}</h4>
          <source media="(min-width:1024px)" srcSet={imageUrlDesktop} />
          <img className="product-card__image" src={imageUrlMobile} alt={`image ${title}`} />
          <p className="product-card__text">{text}</p>
        </picture>
      </div>
    </div>
  );
}

export default Products;
