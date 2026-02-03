export default function VideoCard({ video, category, onClick }) {
  const fakeDuration = `${Math.floor(Math.random() * 10)}:${Math.floor(
    Math.random() * 60,
  )
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-3 group cursor-pointer" onClick={onClick}>
      <div className="relative aspect-video rounded-xl overflow-hidden bg-white/5">
        <img
          src={video.thumbnailUrl}
          alt={video.title}
          className="w-full h-full object-contain bg-black group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute bottom-2 right-2 bg-black/80 px-1.5 py-0.5 rounded text-xs font-medium">
          {fakeDuration}
        </div>
      </div>

      <div className="flex gap-3 px-1">
        <div className="h-9 w-9 rounded-full flex-shrink-0 overflow-hidden">
          {category?.iconUrl ? (
            <img
              src={category.iconUrl}
              alt={category?.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-blue-500" />
          )}
        </div>
        <div className="flex flex-col flex-1">
          <h3 className="text-sm font-semibold line-clamp-2 leading-snug group-hover:text-white/90">
            {video.title}
          </h3>
          <div className="bg-white/10 text-[10px] w-fit px-1.5 py-0.5 rounded mt-1 mb-0.5 uppercase tracking-wide">
            {category?.name}
          </div>
          {/* <p className="text-xs text-youtube-gray mt-1">
            DinoVentures • 1.2M views • 2 hours ago
          </p> */}
        </div>
      </div>
    </div>
  );
}
