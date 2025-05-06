import './ProductDescription.scss';

function ProductDescription() {
  return (
    <div className="product-description__container">
      <h4 className="product-description__title">About this piece</h4>
      <p>
        The ideal three-seat sofa featuring one seat with a chaise lounge addition, one seah5t with an ottoman, and one
        seat for the chiropractor who loves to sit upright with their feet on the floor. Like everything we make, our
        modular design is incredibly easy to move and packed with all the clever, life-changing features you expect from
        Burrow, starting with a built-in USB charger.
      </p>
      <div className="product-description__wrapper">
        <div className="product-description__item">
          <h5>Customizable</h5>
          <p>
            Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You
            can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and
            contemporary.
          </p>
        </div>
        <div className="product-description__item">
          <h5>Adaptable</h5>
          <p>
            Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the
            universal, modular design of our Nomad Collection.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
