export default function MiniPlayer({ video, onRestore, onClose }) {
  return (
    <div className="fixed bottom-3 right-3 w-100 h-100 bg-black rounded shadow-lg z-50">
      <iframe src={video.mediaUrl} className="w-full h-80" />

      <div className="p-2 text-white text-sm flex justify-between">
        <span className="line-clamp-1">{video.title}</span>
        <div className="flex gap-2">
          <button onClick={onRestore}>⬆</button>
          <button onClick={onClose}>✖</button>
        </div>
      </div>
    </div>
  );
}
