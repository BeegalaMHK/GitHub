import ReactPlayer from "react-player";

export default function CustomVideoPlayer({ url }) {
  const cleanUrl = (u) => {
    if (u.includes("youtube.com/embed/")) {
      const id = u.split("embed/")[1];
      return `https://www.youtube.com/watch?v=${id}`;
    }
    return u;
  };

  return (
    <div className="w-full h-full bg-black">
      <ReactPlayer
        src={cleanUrl(url)}
        playing
        width="100%"
        height="100%"
        controls
        pip
        config={{
          youtube: {
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
              playsinline: 1,
            },
          },
        }}
      />
    </div>
  );
}
