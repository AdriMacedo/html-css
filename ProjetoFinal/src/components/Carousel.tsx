type CarouselProps = {
    defaultImage: string;
    hoverImage: string;
    clickImage: string;
    altDefault: string,
    altClick: string
};

function Carousel ({defaultImage, hoverImage, clickImage, altDefault, altClick}: CarouselProps) {

    return (
        <div>
            <img src={defaultImage} alt={altDefault}/>
            <img src={hoverImage} alt={altDefault}/>  
            <img src={clickImage} alt={altClick}/>  
                      
        </div>
    )
};

export default Carousel;