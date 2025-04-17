
type SplashCarouselProps = {
    imageURL: string;
    text: string
};

function SplashCarousel ({imageURL, text}: SplashCarouselProps) {

    return (
        <div>
           <img src={imageURL} alt={text} />
        </div>
    )
};

export default SplashCarousel;