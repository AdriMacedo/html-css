import './CarouselShopSpaces.scss';

type CarouselShopSpacesProps = {
  imageURL: string;
  text: string;
};

function CarouselShopSpaces({ imageURL, text }: CarouselShopSpacesProps) {
  return (
    <div className="carousel-shop-spaces__image">
      <img src={imageURL} alt={text} />
    </div>
  );
}

export default CarouselShopSpaces;
