import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  ThumbsUp,
  Share2,
  Download,
} from "lucide-react";
import Style from "../components/css/VideoPlayer.module.css";

const VideoPlayer = () => {

  const { id } = useParams();

  const [video, setVideo] = useState(null);

  async function getVideo() {

    const params = {
      part: "snippet,statistics",
      id: id,
      key: import.meta.env.VITE_YOUTUBE_API_KEY,
    };

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(params)}`
    );

    const data = await res.json();

    setVideo(data.items[0]);
  }

  useEffect(() => {
    getVideo();
  }, [id]);

  if (!video) {
    return <h2 style={{ color: "white" }}>Loading...</h2>;
  }

  return (
    <div className={Style.container}>

      <div className={Style.left}>

        <iframe
          width="100%"
          height="600"
          src={`https://www.youtube.com/embed/${id}`}
          title={video.snippet.title}
          allowFullScreen
        />

        <h2 className={Style.title}>
          {video.snippet.title}
        </h2>

        <div className={Style.channelSection}>

          <div className={Style.channelInfo}>

            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt=""
            />

            <div>
              <h3>{video.snippet.channelTitle}</h3>
              <p>Channel</p>
            </div>

            <button className={Style.subscribe}>
              Subscribe
            </button>

          </div>

          <div className={Style.buttons}>

            <button>
              <ThumbsUp size={18} />
              {video.statistics.likeCount}
            </button>

            <button>
              <Share2 size={18} />
              Share
            </button>

            <button>
              <Download size={18} />
              Download
            </button>

          </div>

        </div>

        <div className={Style.description}>

          <h4>
            {Number(video.statistics.viewCount).toLocaleString()} views
          </h4>

          <p>
            {video.snippet.description}
          </p>

        </div>

      </div>

      <div className={Style.right}>

        <h3>Recommended Videos</h3>

      </div>

    </div>
  );
};

export default VideoPlayer;