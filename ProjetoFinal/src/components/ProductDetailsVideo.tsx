type ProductDetailsVideoPropos = {
  videoUrl: string;
  title: string;
  description: string;
  minititle1: string;
  minidescription1: string;
  minititle2: string;
  minidescription2: string;
};
function ProductDetailsVideo({
  videoUrl,
  title,
  description,
  minititle1,
  minidescription1,
  minititle2,
  minidescription2,
}: ProductDetailsVideoPropos) {
  return (
    <>
      <section>
        <div>
          <video src={videoUrl} autoPlay muted loop>
            Your browser does not support the video tag.
          </video>
        </div>
        <div>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <div>
          <h5>{minititle1}</h5>
          <p>{minidescription1}</p>
        </div>
        <div>
          <h5>{minititle2}</h5>
          <p>{minidescription2}</p>
        </div>
      </section>
    </>
  );
}

export default ProductDetailsVideo;
