import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import SubscribeSection from '../components/SubscribeSection';
import Title from '../components/Title';
import { useState } from 'react';
import "../components/Productpage.scss";

function ProductPage() {
  const [seeMore, setSeeMore] = useState(false);

  const products = [
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
    {
      label: 'Nomad Sofa',
      imageUrl: 'src/assets/assets/productsCarousel/1/product.webp',
      price: '$1595 or as low as $100/mo',
    },
  ];

  return (
    <>
      <NavBar />
      <div className="product-page__section">
        <Title className="product-page__title">All Seating</Title>
        <p>
          The main feature of any living room is always going to be the seating. Pick and choose your seating styles to
          build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in
          ultimate comfort.
        </p>
        <div className='product-page__grid'>
          {(seeMore ? products : products.slice(0, 9)).map((product, index) => (
            <Link to={'/productpage:productdetails'} key={index}>
              <ProductCard label={product.label} imageUrl={product.imageUrl} price={product.price} />
            </Link>
          ))}
                </div>
          {!seeMore && (
            <div className='product-page__see-more'>
              <Button label="SEE MORE" variant={'see-more'} onClick={() => setSeeMore(true)} />
            </div>
          )}
      </div>
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default ProductPage;
