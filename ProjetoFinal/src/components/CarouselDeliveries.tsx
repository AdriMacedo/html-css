import './CarouselDeliveries.scss';

type CarouselDeliveriesProps = {
  defaultImage: string;
  hoverImage: string;
  altDefault: string;
};

function CarouselDeliveries({ defaultImage, hoverImage, altDefault }: CarouselDeliveriesProps) {
  return (
    <div className="carousel-image">
      <img className="carousel-image__default" src={defaultImage} alt={altDefault} />
      <img className="carousel-image__hover" src={hoverImage} alt={altDefault} />
    </div>
  );
}

export default CarouselDeliveries;
