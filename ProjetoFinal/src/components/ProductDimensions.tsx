import './ProductDimensions.scss';

function ProductDimensions() {
  return (
    <div className="dimensions__wrapper">
      <h2 className="dimensions__title">Dimensions</h2>
      <div className="dimensions__container">
        <div className="dimensions__list">
          <div className="dimensions__item">
            <p>General Dimensions</p>
            <span>86" L x 61" D x 33" H</span>
          </div>
          <div className="dimensions__item">
            <p>Seat Height</p>
            <span>17"</span>
          </div>
          <div className="dimensions__item">
            <p>Arm Height</p>
            <span>23"</span>
          </div>
          <div className="dimensions__item">
            <p>Chaise Length</p>
            <span>13"</span>
          </div>
          <div className="dimensions__item">
            <p>Chaise Seat Depth</p>
            <span>134"</span>
          </div>
          <div className="dimensions__item">
            <p>Leg Height</p>
            <span>7"</span>
          </div>
          <div className="dimensions__item">
            <p>Ottoman Dimensions</p>
            <span>26" L x 26" W x 17" H</span>
          </div>
        </div>
        <div className="dimensions__image">
          <img src="src/assets/assets/product-details-2.png" alt="product dimensions" />
          {/* colocar a segunda imagem como hover no css : 
        src/assets/assets/product-details-2.png */}
        </div>
      </div>
    </div>
  );
}

export default ProductDimensions;
