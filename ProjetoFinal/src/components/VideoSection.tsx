
type VideoSectionProps = {
    videoUrl: string
};
function VideoSection ({videoUrl}: VideoSectionProps) {

    return (
        <div>
            <video src={videoUrl} controls autoPlay loop muted >Your browser does not support the video tag.</video>
    
        </div>
    )
};

export default VideoSection;