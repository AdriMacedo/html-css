type KeyFeaturesProps = {
  image: string;
  label: string;
};

function KeyFeatures({ image, label }: KeyFeaturesProps) {
  return (
    <>
      <img src={image} alt={`image ${image}`} />
      <h4>{label}</h4>
    </>
  );
}

export default KeyFeatures;
