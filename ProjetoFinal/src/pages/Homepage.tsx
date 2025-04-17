import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import InfoIcons from "../components/InfoIcons";
import NavBar from "../components/NavBar";
import Products from "../components/Products";
import SplashCarousel from "../components/SplashCarousel";
import SplashSection from "../components/SplashSection";
import SubscribeSection from "../components/SubscribeSection";
import Title from "../components/Title";
import VideoSection from "../components/VideoSection";
import Button from "../components/Button";


function Homepage () {

    return (
        <>
        <NavBar/>
        <SplashSection imageUrl={"src/assets/assets/splashscreen/splash-screen.webp"} />
        <Button variant={"shop"}  label="SHOP BEDROOM"/>
        <Title/>
        <Link to={"/productpage"} aria-label="See all seating products" title="See all seating products">
        <Products imageUrl={"src/assets/assets/productsCard/D-VN-Seating.webp"}  title=""/>
        </Link>
        <Products imageUrl={"src/assets/assets/productsCard/category-outdoor.webp"}  title="Outdoor"/>
        <Products imageUrl={"src/assets/assets/productsCard/category-storage.webp"}  title="Storage"/>
        <Products imageUrl={"src/assets/assets/productsCard/category-bedroom.webp"}  title=""/>
        <Products imageUrl={"src/assets/assets/productsCard/category-tables.webp"} title="Tables"/>
        <Products imageUrl={"src/assets/assets/productsCard/category-rugs.webp"}title="Rugs"/>
        <InfoIcons text={"Fast & free shipping Every single order ships for free. No minimums, no tiers, no fine print whatsoever."} icon={"src/assets/assets/icon/icon-truck.png"}/>
        <InfoIcons text={"Modular, easy-to-move design Our innovative modular design is driven by the belief that furniture should fit this home, and the next one."} icon={"src/assets/assets/icon/icon-sofa.png"}/>
        <InfoIcons text={"Durable, premium materials We use materials like sustainably-forested wood, strengthened steel hardware, and top-grain Italian leather."} icon={"src/assets/assets/icon/icon-trees.png"}/>
        <Title />
        {/* em desktop tem apenas 4 img, em mobile tem efeito carousel */}
        <Carousel defaultImage={"src/assets/assets/deliveriesCard/Rectangle 9.jpg"} hoverImage={"src/assets/assets/productsCarousel/1/product-hover.webp"} clickImage={"src/assets/assets/productsCarousel/7/product.webp"} altDefault={"A cozy sofa displayed in a modern living room"}  altClick={"Sofa product shown in close-up view"}  />
        <Carousel defaultImage={"src/assets/assets/deliveriesCard/Rectangle 10.jpg"} hoverImage={"src/assets/assets/productsCarousel/2/product-hover.webp"} clickImage={"src/assets/assets/productsCarousel/2/product.webp"} altDefault={"Modern sofa displayed in a contemporary living space"}  altClick={"Sofa product shown in close-up view"}  />
        <Carousel defaultImage={"src/assets/assets/deliveriesCard/Rectangle 11.jpg"} hoverImage={"src/assets/assets/productsCarousel/5/product-hover.webp"} clickImage={"src/assets/assets/productsCarousel/3/product.webp"} altDefault={"Sofa with a minimalist design in a neutral room"}  altClick={"Sofa product shown in close-up view"}  />
        <Carousel defaultImage={"src/assets/assets/deliveriesCard/Rectangle 12.jpg"} hoverImage={"src/assets/assets/productsCarousel/4/product-hover.webp"} clickImage={"src/assets/assets/productsCarousel/6/product.webp"} altDefault={"Sofa set in a spacious living room"}  altClick={"Sofa product shown in close-up view"}  />
        <Products title="NOMAD" imageUrl={"src/assets/assets/crop-sofa.png"} text="The Ambid system works beautifully. It's comfortable, absolutely solid, and looks great." />
        <Link to={"/productpage:productdetails"}>
        <Button variant={"link"} label="SHOP NOW"/>
        </Link>
        <Title>Shop these real-life spaces</Title>
        {/* em desktop tem efeito carousel e em mobile esta fixo */}
        <SplashCarousel imageURL={"src/assets/assets/carousel/Range-Fabric-Stone-Gray.webp"} text={"Range Sofa in Stone Gray fabric"} />
        <SplashCarousel imageURL={"src/assets/assets/carousel/Kettle-Side-Table.webp"} text={"Kettle side table in light wood"} />
        <SplashCarousel imageURL={"src/assets/assets/carousel/Nomad-Velvet.webp"} text={"Nomad Sofa in velvet"} />
        <SplashCarousel imageURL={"src/assets/assets/carousel/Nomad-Leather.webp"} text={"Nomad Sofa in brown leather"} />
        <Title>Modular, easy-to-move design</Title>
        <VideoSection videoUrl={"src/assets/assets/background-video.mp4"} />
        <Link to="/productpage">
        <Button variant={"shop"} label="SHOP SEATING" />
        </Link>
        <SubscribeSection />
        <Footer/>
        </>
    )
};

export default Homepage;