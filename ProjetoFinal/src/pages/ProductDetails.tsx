
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
        <Title className='nomad-collection__title'>Nomad Collection</Title>
        <div className='product-details__container'>

        <ProductCard imageUrl={'src/assets/assets/productsCarousel/1/product.webp'} />
        {/* colocar a segunda imagem com hover */}

        <CustomProduct label="Block Nomad Sofa" price={1595} colors={colors} upgrades={upgrades} />
        </div>
        <Title className="dimensions__title">Dimensions</Title>
        <ProductDimensions />
        <Title>About this piece</Title>
        <h4>
          The ideal three-seat sofa featuring one seat with a chaise lounge addition, one seah5t with an ottoman, and
          one seat for the chiropractor who loves to sit upright with their feet on the floor. Like everything we make,
          our modular design is incredibly easy to move and packed with all the clever, life-changing features you
          expect from Burrow, starting with a built-in USB charger.
        </h4>
        <div>
          <h5>Customizable</h5>
          <p>
            Create your ideal sectional sofa with five fabric colors, six leg finishes, and three armrest heights. You
            can even swap the reversible back cushions: one side is tufted for a classic look, the other smooth and
            contemporary.
          </p>
        </div>
        <div>
          <h5>Adaptable</h5>
          <p>
            Rest easy with the knowledge that your new furniture can grow and expand with your life, thanks to the
            universal, modular design of our Nomad Collection.
          </p>
        </div>
        <Title>Key features</Title>
        <KeyFeatures image={'src/assets/assets/icon/icon-1.webp'} label={'Customizable'} />
        <KeyFeatures image={'src/assets/assets/icon/icon-2.webp'} label={'Frame'} />
        <KeyFeatures image={'src/assets/assets/icon/icon-3.webp'} label={'Hardware'} />
        <KeyFeatures image={'src/assets/assets/icon/icon-4.webp'} label={'Charge'} />
        <KeyFeatures image={'src/assets/assets/icon/icon-5.webp'} label={'Legs'} />
        <ProductDetailsVideo
          videoUrl={'src/assets/assets/product-video-1.mp4'}
          title={'Durable enough for everyday drama'}
          description={
            'Each and every component of our furniture is selected for durability, from the galvanized steel latches to the precision-milled Baltic Birch frame. The fabric is inherently scratch-resistant, thanks to an incredibly tight weave, which makes it perfect for pets and their parents.'
          }
          minititle1={'Low carbon footprint'}
          minidescription1={'Sustainable wood'}
          minititle2={'Sustainable wood'}
          minidescription2={'Sourced from responsibly managed forests'}
        />
        <ProductDetailsVideo
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
        <Title>Here's what else our designers recommend</Title>
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
