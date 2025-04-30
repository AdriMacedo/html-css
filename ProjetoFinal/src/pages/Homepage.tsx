import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import InfoIcons from '../components/InfoIcons';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import SplashSection from '../components/SplashSection';
import SubscribeSection from '../components/SubscribeSection';
import Title from '../components/Title';
import VideoSection from '../components/VideoSection';
import Button from '../components/Button';
import '../styles/main.scss';
import CarouselDeliveries from '../components/CarouselDeliveries';
import ProductNomad from '../components/ProductNomad';
import CarouselShopSpaces from '../components/CarouselShopSpaces';

function Homepage() {
  return (
    <>
      <NavBar />
      <SplashSection imageUrl={'src/assets/assets/splashscreen/splash-screen.webp'} />

      <Title className="product__title" />
      <div className="product-grid">
        <Link to={'/productpage'} aria-label="See all seating products" title="See all seating products">
          <Products
            imageUrlDesktop={'src/assets/assets/productsCard/seating-mobile.png'}
            imageUrlMobile="src/assets/assets/productsCard/seating-mobile.png"
            title="Seating"
          />
        </Link>

        <Products
          imageUrlDesktop={'src/assets/assets/productsCard/category-outdoor.webp'}
          imageUrlMobile="src/assets/assets/productsCard/outdoor-mobile.png"
          title="Outdoor"
        />
        <Products
          imageUrlDesktop={'src/assets/assets/productsCard/category-storage.webp'}
          imageUrlMobile="src/assets/assets/productsCard/storage-mobile.png"
          title="Storage"
        />
        <Products
          imageUrlDesktop={'src/assets/assets/productsCard/bedroom-mobile.png'}
          imageUrlMobile="src/assets/assets/productsCard/bedroom-mobile.png"
          title=""
        />
        <Products
          imageUrlDesktop={'src/assets/assets/productsCard/category-tables.webp'}
          imageUrlMobile="src/assets/assets/productsCard/table-mobile.png"
          title="Tables"
        />
        <Products
          imageUrlDesktop={'src/assets/assets/productsCard/category-rugs.webp'}
          imageUrlMobile="src/assets/assets/productsCard/rugs-mobile.png"
          title="Rugs"
        />
      </div>
      <div className="info-icon__container">
        <div className="info-icon__card">
          <InfoIcons
            text={
              'Fast & free shipping\nEvery single order ships for free. No minimums, no tiers, no fine print whatsoever.'
            }
            icon={'public/assents/icon/icon-truck.png'}
          />
          <InfoIcons
            text={
              'Modular, easy-to-move design\nOur innovative modular design is driven by the belief that furniture should fit this home, and the next one.'
            }
            icon={'public/assents/icon/icon-sofa.png'}
          />
          <InfoIcons
            text={
              'Durable, premium materials\nWe use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather.'
            }
            icon={'public/assents/icon/icon-trees.png'}
          />
        </div>
      </div>
      <Title className="product__title" />
      <div className="carousel-deliveries__container">
        <CarouselDeliveries
          defaultImage={'src/assets/assets/deliveriesCard/Rectangle 9.jpg'}
          hoverImage={'src/assets/assets/productsCarousel/1/product-hover.webp'}
          altDefault={'A cozy sofa displayed in a modern living room'}
        />
        <CarouselDeliveries
          defaultImage={'src/assets/assets/deliveriesCard/Rectangle 10.jpg'}
          hoverImage={'src/assets/assets/productsCarousel/2/product-hover.webp'}
          altDefault={'Modern sofa displayed in a contemporary living space'}
        />
        <CarouselDeliveries
          defaultImage={'src/assets/assets/deliveriesCard/Rectangle 11.jpg'}
          hoverImage={'src/assets/assets/productsCarousel/9/Rectangle 11-hover.png'}
          altDefault={'Sofa with a minimalist design in a neutral room'}
        />
        <CarouselDeliveries
          defaultImage={'src/assets/assets/deliveriesCard/Rectangle 12.jpg'}
          hoverImage={'src/assets/assets/productsCarousel/4/product-hover.webp'}
          altDefault={'Sofa set in a spacious living room'}
        />
      </div>
      <ProductNomad
        title="NOMAD"
        imageUrl={'src/assets/assets/crop-sofa.png'}
        text={
          <>
            <strong>The Ambid</strong> system works beautifully. It's comfortable, absolutely solid, and looks great.
          </>
        }
      />
      <Title className="product__title">Shop these real-life spaces</Title>
      <div className="carousel-shop-spaces__container">
        <CarouselShopSpaces
          imageURL={'src/assets/assets/carousel/Range-Fabric-Stone-Gray.webp'}
          text={'Range Sofa in Stone Gray fabric'}
        />
        <CarouselShopSpaces
          imageURL={'src/assets/assets/carousel/Kettle-Side-Table.webp'}
          text={'Kettle side table in light wood'}
        />
        <CarouselShopSpaces imageURL={'src/assets/assets/carousel/Nomad-Velvet.webp'} text={'Nomad Sofa in velvet'} />
        <CarouselShopSpaces
          imageURL={'src/assets/assets/carousel/Nomad-Leather.webp'}
          text={'Nomad Sofa in brown leather'}
        />
        <CarouselShopSpaces imageURL={'src/assets/assets/carousel/Rectangle 18.png'} text={'checker png'} />
      </div>
      <Title className="product__title">Modular, easy-to-move design</Title>
      <div className="video-section">
        <VideoSection videoUrl={'src/assets/assets/background-video.mp4'} />
        <Link to="/productpage">
          <Button variant={'shop'} label="SHOP SEATING" />
        </Link>
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default Homepage;
