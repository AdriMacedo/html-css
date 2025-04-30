import './InfoIcons.scss';

type InfoIconsProps = {
  text: string;
  icon: string;
};

function InfoIcons({ text, icon }: InfoIconsProps) {
  return (
    <div className="info-icon__wrapper">
      <img src={icon} alt={`icon ${icon}`} />
      <p>{text}</p>
    </div>
  );
}

export default InfoIcons;
