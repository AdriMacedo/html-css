import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import SubscribeSection from '../components/SubscribeSection';
import Title from '../components/Title';
import { useState } from 'react';

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
      <Title>All Seating</Title>
      <p>
        The main feature of any living room is always going to be the seating. Pick and choose your seating styles to
        build the perfect place to relax. Unwind by yourself, spend time with your family, or entertain guests, all in
        ultimate comfort.
      </p>
      <Link to={'/productpage:productdetails'}>
        <div>
          {products.slice(0, 9).map((product, index) => (
            <ProductCard key={index} label={product.label} imageUrl={product.imageUrl} price={product.price} />
          ))}
        </div>
      </Link>
      <Button label="SEE MORE" variant={'shop'} onClick={()=> setSeeMore(!seeMore)}/>
      <Link to={'/productpage:productdetails'}>
        <div>
          {products.slice(9).map((product, index) => (
            <ProductCard key={index} label={product.label} imageUrl={product.imageUrl} price={product.price} />
          ))}
        </div>
      </Link>

      <SubscribeSection />
      <Footer />
    </>
  );
}

export default ProductPage;
