import './VideoSection.scss';

type VideoSectionProps = {
  videoUrl: string;
};
function VideoSection({ videoUrl }: VideoSectionProps) {
  return (
    <>
      <video src={videoUrl} controls autoPlay loop muted>
        Your browser does not support the video tag.
      </video>
    </>
  );
}

export default VideoSection;
