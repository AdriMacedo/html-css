import { Link } from 'react-router-dom';
import Button from './Button';
import './ProductNomad.scss';

type ProductNomadProps = {
  title: string;
  imageUrl: string;
  text: any;
};

function ProductNomad({ title, imageUrl, text }: ProductNomadProps) {
  return (
    <div className="nomad-card__container">
      <div className="nomad-card">
        <h4 className="nomad-card__title">{title}</h4>
        <p className="nomad-card__text">{text}</p>
        <Link to={'/productpage:productdetails'}>
          <Button className="nomad" variant={'link'} label="SHOP NOW"></Button>
        </Link>
      </div>
      <div className="nomad-card__image-section">
        <img className="nomad-card__image" src={imageUrl} />
      </div>
    </div>
  );
}

export default ProductNomad;
