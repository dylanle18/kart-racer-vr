function DemoVideo() {
  return (
    <div>
      <h2 className="font-bold text-lg mb-1">Demo Video</h2>
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/4JzG3kS2UGE"
        title="Kart Racer VR Demo Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default DemoVideo;