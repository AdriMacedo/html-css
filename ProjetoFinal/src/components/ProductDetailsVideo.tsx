import '../components/ProductDetailsVideo.scss';

type ProductDetailsVideoPropos = {
  videoUrl: string;
  title: string;
  description: string;
  minititle1: string;
  minidescription1: string | {
    mobile: string;
    desktop: string;
  };
  minititle2: string;
  minidescription2: string;
  className?: string;
};
function ProductDetailsVideo({
  videoUrl,
  title,
  description,
  minititle1,
  minidescription1,
  minititle2,
  minidescription2,
  className,
}: ProductDetailsVideoPropos) {
  return (
    <div className={`details-video__container ${className}`}>
      <div className="details-video__media">
        <video className="video" src={videoUrl} autoPlay muted loop>
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="details-video__wrapper">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="details-video__section">
          <div className="details-video__item">
            <h5>{minititle1}</h5>
            {typeof minidescription1 === "string" ? (<p>{minidescription1}</p>) : (

            <>
            <p className="text-mobile"> {minidescription1.mobile}</p>
            <p className="text-desktop"> {minidescription1.desktop}</p>
            </>
            )}
          </div>
          <div className="details-video__item">
            <h5>{minititle2}</h5>
            <p>{minidescription2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsVideo;
