export default function VideoCard({ video, category, onClick }) {
  console.log(video);

  const fakeDuration = `${Math.floor(Math.random() * 10)}:${Math.floor(
    Math.random() * 60,
  )
    .toString()
    .padStart(2, "0")}`;

  return (
    video && (
      <div
        onClick={onClick}
        className="rounded-lg overflow-hidden shadow cursor-pointer hover:scale-105 transition"
      >
        <div className="relative">
          <img src={video.thumbnailUrl} className="w-full h-40 object-cover" />
          <span className="absolute bottom-1 right-1 bg-black text-xs px-1 rounded">
            {fakeDuration}
          </span>
        </div>

        <div className="p-2">
          <span className="text-xs bg-blue-500 px-2 rounded">
            {category.name}
          </span>

          <p className="text-sm font-semibold mt-1 line-clamp-2">
            {video.title}
          </p>
        </div>
      </div>
    )
  );
}
