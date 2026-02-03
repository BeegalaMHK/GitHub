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

  const [activeVideo, setActiveVideo] = useState(null);
  const [miniVideo, setMiniVideo] = useState(null);

  const getCategory = (video) =>
    dataset.categories.find((c) =>
      c.contents.some((v) => v.slug === video.slug),
    ).category;

  return (
    <div className="h-screen flex flex-col">
      <Header search={search} setSearch={setSearch} />

      <div className="flex flex-1">
        <Sidebar active={activeCategory} setActive={setActiveCategory} />

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
