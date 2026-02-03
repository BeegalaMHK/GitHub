import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoFeed from "./components/VideoFeed";
import FullPlayer from "./components/FullPlayer";
import MiniPlayer from "./components/MiniPlayer";
import { dataset } from "./constant/dataset";

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [activeVideo, setActiveVideo] = useState(null);
  const [miniVideo, setMiniVideo] = useState(null);

  const getCategory = (video) =>
    dataset.categories.find((c) =>
      c.contents.some((v) => v.slug === video.slug),
    )?.category;

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen((p) => !p);
    } else {
      setIsCollapsed((p) => !p);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#0f0f0f] overflow-hidden">
      <Header
        search={search}
        setSearch={setSearch}
        toggleSidebar={toggleSidebar}
        resetHome={() => setActiveCategory(null)}
      />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          active={activeCategory}
          setActive={setActiveCategory}
          isOpen={isSidebarOpen}
          isCollapsed={isCollapsed}
        />

        <div className="flex-1 overflow-y-auto">
          <VideoFeed
            search={search}
            activeCategory={activeCategory}
            onSelect={(v) => {
              setActiveVideo(v);
              setMiniVideo(null);
            }}
          />
        </div>

        {/* FULL SCREEN PLAYER */}
        <AnimatePresence>
          {activeVideo && (
            <FullPlayer
              video={activeVideo}
              category={getCategory(activeVideo)}
              onMinimize={() => {
                setMiniVideo(activeVideo);
                setActiveVideo(null);
              }}
              onSelect={(v) => setActiveVideo(v)}
              onClose={() => {
                setMiniVideo(null);
                setActiveVideo(null);
              }}
            />
          )}
        </AnimatePresence>
      </div>

      {/* MINI PLAYER */}
      <AnimatePresence>
        {miniVideo && (
          <MiniPlayer
            video={miniVideo}
            onRestore={() => {
              setActiveVideo(miniVideo);
              setMiniVideo(null);
            }}
            onClose={() => setMiniVideo(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
