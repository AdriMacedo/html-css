import CustomProduct from '../components/CustomProduct';
import Footer from '../components/Footer';
import KeyFeatures from '../components/KeyFeatures';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import ProductDetailsVideo from '../components/ProductDetailsVideo';
import ProductDimensions from '../components/ProductDimensions';
import SubscribeSection from '../components/SubscribeSection';
import Title from '../components/Title';
import '../components/ProductDetails.scss';
import ProductDescription from '../components/ProductDescription';

function ProductDetails() {
  const colors = [
    { name: 'Navy Blue', hex: '#011F89' },
    { name: 'Green', hex: '#3D8901' },
    { name: 'Red', hex: '#890109' },
    { name: 'Green', hex: '#3D8901' },
    { name: 'Black', hex: '#131313' },
    { name: 'Black', hex: '#131313' },
  ];

  const upgrades = [
    { name: ' Moveable chaise', id: 'chaise', price: 495 },
    { name: ' Ottoman', id: 'ottoman', price: 345 },
    { name: ' Lumbar Pillows', id: 'pillows', price: 135 },
    { name: ' Sleep Kit', id: 'sleep-kit', price: 295 },
  ];

  return (
    <>
      <NavBar />
      <div className="product-details__section">
        <div className="product-details__wrapper">
          <div className="product-details__container">
            <div className="product-details__image">
              <Title className="nomad-collection__title">Nomad Collection</Title>
              <ProductCard imageUrl={'src/assets/assets/productsCarousel/1/product.webp'} />
            </div>
            {/* colocar a segunda imagem com hover */}

            <CustomProduct label="Block Nomad Sofa" price={1595} colors={colors} upgrades={upgrades} />
          </div>
        </div>
        <ProductDimensions />
        <ProductDescription />
      </div>
      <div className="key-features__section">
        <Title className="key-features__title">Key features</Title>
        <div className="key-features-icons">
          <KeyFeatures image={'public/assents/icon/icon-2.webp'} label={'Customizable'} />
          <KeyFeatures image={'public/assents/icon/icon-3.webp'} label={'Frame'} />
          <KeyFeatures image={'public/assents/icon/icon-4.webp'} label={'Hardware'} />
          <KeyFeatures image={'public/assents/icon/icon-1.webp'} label={'Charge'} />
          <KeyFeatures image={'public/assents/icon/icon-5.webp'} label={'Legs'} />
        </div>
      </div>

      <ProductDetailsVideo
        videoUrl={'src/assets/assets/product-video-1.mp4'}
        title={'Durable enough for everyday drama'}
        description={
          'Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents.'
        }
        minititle1={'Low carbon footprint'}
        minidescription1={{ mobile: 'Fabric made from upcycled materials', desktop: 'Sustainable wood' }}
        minititle2={'Sustainable wood'}
        minidescription2={'Sourced from responsibly managed forests'}
      />
      <ProductDetailsVideo
        className="details-video__container reverse"
        videoUrl={'src/assets/assets/product-video-2.mp4'}
        title={`Don't sweat the spills`}
        description={
          'Our olefin fabric is stain-resistant thanks to a deep dyeing process that colors each individual strand to the core, as opposed to other fibers that have little pores that absorb stains. You can even spray spills with a water and bleach solution (yes, we said bleach) and blot it out to clean stains.'
        }
        minititle1={'Non toxic'}
        minidescription1={'Zero chemical additives or treatments'}
        minititle2={'Zero PFCs'}
        minidescription2={'Fabric free of dangerous formaldehydes'}
      />
      <Title className="recommend__title">Here's what else our designers recommend</Title>
      <div className="recommend__section">
        <ProductCard
          label={'Nomad Sofa'}
          imageUrl={'src/assets/assets/productsCarousel/1/product.webp'}
          price={'$1595 or as low as $100/mo'}
        />
        <ProductCard
          label={'Nomad Sofa'}
          imageUrl={'src/assets/assets/productsCarousel/1/product.webp'}
          price={'$1595 or as low as $100/mo'}
        />
        <ProductCard
          label={'Nomad Sofa'}
          imageUrl={'src/assets/assets/productsCarousel/1/product.webp'}
          price={'$1595 or as low as $100/mo'}
        />
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default ProductDetails;
