import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RelatedList from "./RelatedList";
import CustomVideoPlayer from "./CustomVideoPlayer";
import { ChevronDown, ChevronUp, PictureInPicture2, X } from "lucide-react"; // Import PiP icon

export default function FullPlayer({
  video,
  category,
  onMinimize,
  onSelect,
  onClose,
}) {
  const [showRelated, setShowRelated] = useState(false);

  const handleDragEnd = (_, info) => {
    if (info.offset.y > 150) onMinimize();
    if (info.offset.y < -120) setShowRelated(true);
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", stiffness: 220, damping: 26 }}
      className="fixed inset-0 bg-black z-50 flex flex-col text-white"
    >
      {/* HEADER / NAVIGATION AREA */}
      <div className="absolute top-0 left-0 w-full h-20 flex items-start justify-between px-4 pt-4 z-50 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
        {/* Left Spacer - Keeps the PiP icon perfectly centered */}
        <div className="w-12" />

        {/* PIP MINIMIZE BUTTON (CENTER) */}
        <button
          onClick={onMinimize}
          className="p-3 hover:bg-white/10 rounded-full transition-all group pointer-events-auto active:scale-95"
          title="Minimize to Picture-in-Picture"
        >
          <PictureInPicture2
            size={28}
            className="text-white/80 group-hover:text-white group-hover:scale-110 transition-transform"
          />
        </button>

        {/* CLOSE BUTTON (RIGHT) */}
        <button
          onClick={onClose}
          className="p-3 hover:bg-red-500/20 rounded-full transition-all group pointer-events-auto active:scale-95"
          title="Close"
        >
          <X
            size={28}
            className="text-white/80 group-hover:text-red-400 group-hover:scale-110 transition-transform"
          />
        </button>
      </div>

      {/* VIDEO AREA */}
      <motion.div
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        onDragEnd={handleDragEnd}
        className="flex-1 relative flex items-center justify-center"
      >
        <CustomVideoPlayer url={video.mediaUrl} />
      </motion.div>

      {/* INFO */}
      <div className="p-4 bg-gradient-to-t from-black to-transparent">
        <h2 className="text-xl font-bold">{video.title}</h2>
        <p className="text-gray-400 text-sm uppercase mt-1">{category.name}</p>
      </div>

      {/* SWIPE UP */}
      {!showRelated && (
        <div
          onClick={() => setShowRelated(true)}
          className="flex flex-col items-center pb-8 cursor-pointer"
        >
          <ChevronUp className="animate-bounce" />
          <span className="text-xs text-gray-400">
            Swipe up for related videos
          </span>
        </div>
      )}

      {/* RELATED OVERLAY */}
      <AnimatePresence>
        {showRelated && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
            className="absolute inset-0 bg-zinc-950 z-50 flex flex-col"
          >
            <div
              onClick={() => setShowRelated(false)}
              className="p-4 flex items-center justify-between border-b border-white/10 cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ChevronDown />
                <span className="font-bold">Related Videos</span>
              </div>
              <X size={20} className="text-gray-400" />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
              <RelatedList
                category={category}
                onSelect={(v) => {
                  onSelect(v);
                  setShowRelated(false);
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
