import Title from "./Title";


type SplashSectionProps = {
    title?: string;
    imageUrl: string;
};
function SplashSection ({title, imageUrl}: SplashSectionProps) {

    return (
        <div>
            <Title>{title}</Title >
            <img src={imageUrl} alt={`image ${imageUrl}`} />
        </div>
    )
};

export default SplashSection;