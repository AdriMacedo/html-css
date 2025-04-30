import Title from './Title';
import './SplashSection.scss';
import Button from './Button';
import './Button.scss';

type SplashSectionProps = {
  title?: string;
  imageUrl: string;
};
function SplashSection({ title, imageUrl }: SplashSectionProps) {
  return (
    <div className="splash-section">
      <Title className="splash-section__title">{title}</Title>
      <img className="splash-section__image" src={imageUrl} alt={`image ${imageUrl}`} />
      <Button className="splash-section__btn" variant={'shop'} label="SHOP BEDROOM" />
    </div>
  );
}

export default SplashSection;
