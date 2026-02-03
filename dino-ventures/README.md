# Dino Player 🎬

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A premium, gesture-driven video player application built with React, Framer Motion, and Tailwind CSS. Dino Player offers a seamless "Picture-in-App" experience, allowing users to browse content while watching videos.

## ✨ Key Features

- **Full-Page Video Player**: An immersive full-screen playback experience with dynamic metadata display.
- **Gesture-Based Navigation**:
  - **To-Minimize**: Integrated `framer-motion` drag logic. Drag down on the video container (>150px) to instantly dock it into a mini-player.
  - **Swipe-up Related Videos**: Drag up from the bottom (>120px) to reveal a context-aware list of related videos from the same category.
- **Picture-in-App (Mini-Player)**: A persistent floating player at the bottom-right corner.
  - **Restore**: Tap the "Maximize" button or title area to return to full-screen.
  - **Close**: Permanently dismiss the mini-player.
- **YouTube Integration**: Powered by `react-player` with:
  - **URL Cleaning**: Automatic conversion of `youtube.com/embed` links to full watch URLs.
  - **Optimized Parameters**: Handled `autoplay`, `playsinline`, and `modestbranding` for a native feel.
- **Responsive Design**: Mobile-first approach with a sophisticated dark-themed layout using Zinc/Gray palettes.
- **Premium Animations**: Spring-based physics in all transitions for a smooth, high-end user interface.

## 🏗️ Project Structure

```text
dino-ventures/
├── src/
│   ├── components/
│   │   ├── CustomVideoPlayer.jsx  # Core playback logic & YouTube wrapper
│   │   ├── FullPlayer.jsx         # Full-screen view with gesture handling
│   │   ├── MiniPlayer.jsx         # Persistent floating player
│   │   ├── VideoCard.jsx          # Individual video grid item
│   │   ├── VideoFeed.jsx          # Home feed with filtering & search
│   │   ├── Sidebar.jsx            # Category-based navigation
│   │   ├── Header.jsx             # Top bar with search & logo
│   │   └── RelatedList.jsx        # Drawer for related content
│   ├── constant/
│   │   └── dataset.js             # Categorized video data source
│   ├── App.jsx                    # State orchestration & player persistence
│   └── main.jsx                   # Entry point
├── README.md                      # Documentation
└── tailwind.config.js             # Custom styling configuration
```

## 🚀 Technologies Used

- **React**: Component-based UI library.
- **Framer Motion**: Gesture handling and animations.
- **Tailwind CSS**: Modern utility-first styling.
- **ReactPlayer**: Versatile video playback engine.
- **Lucide React**: Clean, consistent iconography.
- **Vite**: Ultra-fast build tool and dev server.

## 🛠️ Installation & Setup

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd dino-ventures
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📝 Implementation Journey

### 1. Component Architecture

We organized the application into modular components:

- `VideoFeed`: The main grid of videos.
- `FullPlayer`: The full-screen overlay handling high-level gestures.
- `CustomVideoPlayer`: A specialized wrapper for the video playback logic.
- `MiniPlayer`: The persistent floating docking station.

### 2. Gesture Integration

Using `framer-motion`, we implemented complex `drag` constraints and `onDragEnd` logic to distinguish between vertical swipes for different actions (minimizing vs. showing related content).

### 3. YouTube Playback Excellence

Standard YouTube embed URLs can often be finicky in custom players. We implemented a cleaning utility in `CustomVideoPlayer` to ensure all links are converted to standard watch URLs for maximum compatibility.

### 4. Refining the UI

- **Thumbnail Optimization**: Ensured a consistent grid by utilizing `object-contain` and `object-cover` strategically.
- **Zero-Button Design**: Focused on a purely gesture-driven experience for the FullPlayer to keep the interface clean and immersive.
- **Persistence**: Managed state in `App.jsx` to ensure the Mini-Player remains alive while the user navigates through different categories.

---

Built with ❤️ by the Dino Player Team.
