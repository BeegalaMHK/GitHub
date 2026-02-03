import { useState } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import VideoFeed from "./components/VideoFeed";
import FullPlayer from "./components/FullPlayer";
import MiniPlayer from "./components/MiniPlayer";
import { dataset } from "./constant/dataset";

function App() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState(null);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // mobile
  const [isCollapsed, setIsCollapsed] = useState(false); // desktop

  const [activeVideo, setActiveVideo] = useState(null);
  const [miniVideo, setMiniVideo] = useState(null);

  const getCategory = (video) =>
    dataset.categories.find((c) =>
      c.contents.some((v) => v.slug === video.slug),
    ).category;

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setIsSidebarOpen((p) => !p);
    } else {
      setIsCollapsed((p) => !p);
    }
  };

  const handleCategory = (v) => {
    setActiveCategory(v);
    setIsSidebarOpen(false); // close mobile sidebar
  };

  return (
    <div className="h-screen flex flex-col overflow-hidden">
      {/* HEADER */}
      <Header
        search={search}
        setSearch={setSearch}
        toggleSidebar={toggleSidebar}
        resetHome={() => setActiveCategory(null)}
      />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar
          active={activeCategory}
          setActive={handleCategory}
          isOpen={isSidebarOpen}
          isCollapsed={isCollapsed}
        />

        <div className="flex-1 overflow-y-auto">
          {!activeVideo && (
            <VideoFeed
              search={search}
              activeCategory={activeCategory}
              onSelect={setActiveVideo}
            />
          )}

          {activeVideo && (
            <FullPlayer
              video={activeVideo}
              category={getCategory(activeVideo)}
              onMinimize={() => {
                setMiniVideo(activeVideo);
                setActiveVideo(null);
              }}
              onSelect={setActiveVideo}
            />
          )}
        </div>
      </div>

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
    </div>
  );
}

export default App;
