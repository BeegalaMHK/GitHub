export default function VideoPlayer({ video, onClose }) {
  return (
    <div className="fixed inset-0 bg-black flex flex-col z-50">
      {/* Video */}
      <iframe
        src={video.mediaUrl}
        className="w-full h-64 sm:h-96"
        allow="autoplay; fullscreen"
      />

      {/* Title */}
      <div className="p-4 text-white">
        <h2 className="text-lg font-bold">{video.title}</h2>
      </div>

      {/* Controls (basic for now) */}
      <div className="flex gap-4 px-4 text-white">
        <button>⏪ 10s</button>
        <button>▶️ / ⏸</button>
        <button>⏩ 10s</button>
      </div>

      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-white text-xl"
      >
        ✖
      </button>
    </div>
  );
}
