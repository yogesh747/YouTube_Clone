import React, { useEffect, useState } from 'react'
import Style from './css/MainBox.module.css'
import { useNavigate } from "react-router-dom";

const MainBox = () => {

  const navigate = useNavigate();

  let [state, setState] = useState([]);

  async function apiData() {

    const params = {
      part: "snippet,statistics",
      chart: "mostPopular",
      maxResults: 49,
      regionCode: "IN",
      key: import.meta.env.VITE_YOUTUBE_API_KEY
    };

    let fetchData = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?${new URLSearchParams(params)}`
    );

    let data = await fetchData.json();
    setState(data.items);
  }

  useEffect(() => {
    apiData();
  }, []);

  console.log(state);

  return (
    <main className={Style.main}>

      {
        state?.map((data) => {
          return (
            <article
            key={data.id}
            className={Style.article}
            onClick={() => navigate(`/watch/${data.id}`)}
            >
              <div>
                <img
                  src={data.snippet.thumbnails.standard?.url || data.snippet.thumbnails.high.url}
                  alt={data.snippet.title}
                />
              </div>

              <div>
                <h2>{data.snippet.title}</h2>
              </div>

              <div>
                <h4>{data.snippet.channelTitle}</h4>
                <h4>{data.statistics.viewCount} Views</h4>
              </div>

            </article>
          );
        })
      }

    </main>
  );
}

export default MainBox;