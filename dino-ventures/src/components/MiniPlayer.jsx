import ReactPlayer from "react-player";
import { Maximize2, X } from "lucide-react"; // Importing the icons

export default function MiniPlayer({ video, onRestore, onClose }) {
  return (
    <div className="fixed bottom-4 right-4 w-80 rounded-lg shadow-2xl z-50 overflow-hidden bg-zinc-900 border border-white/10">
      {/* Video Container */}
      <div className="aspect-video">
        <ReactPlayer src={video.mediaUrl} playing width="100%" height="100%" />
      </div>

      {/* Controls Bar */}
      <div className="p-3 text-white flex justify-between items-center bg-black/80 backdrop-blur-md">
        <span className="text-xs font-medium truncate pr-4">{video.title}</span>

        <div className="flex gap-3 items-center">
          {/* Picture-in-Picture / Restore Button */}
          <button
            onClick={onRestore}
            className="hover:text-blue-400 transition-colors"
            title="Restore Player"
          >
            <Maximize2 size={18} />
          </button>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="hover:text-red-400 transition-colors"
            title="Close"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
