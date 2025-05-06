import '../components/KeyFeatures.scss';

type KeyFeaturesProps = {
  image: string;
  label: string;
};

function KeyFeatures({ image, label }: KeyFeaturesProps) {
  return (
    <div className="key-features-icon">
      <img src={image} alt={`image ${image}`} />
      <h6>{label}</h6>
    </div>
  );
}

export default KeyFeatures;
