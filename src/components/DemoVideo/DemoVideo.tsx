function DemoVideo() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-1">Demo Video</h2>
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/9bZkp7q19f0"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default DemoVideo;