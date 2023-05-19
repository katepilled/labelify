import React from "react";
import { useState, useEffect } from "react";
import { getTopTracks } from "../spotify";
import Title from "../components/title";
import TimeButtons from "../components/timeButtons";
import TrackList from "../components/trackList";

function TopTracks() {
  const [topTracks, setTopTracks] = useState(null);
  const [timeRange, setTimeRange] = useState("short");

  useEffect(() => {
    const fetchData = async () => {
      const userTracks = await getTopTracks(`${timeRange}_term`);
      setTopTracks(userTracks.data);
    };
    fetchData();
  }, [timeRange]);
  
  return (
    <div className="container">
      <Title pageName="top tracks" />

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="time-buttons-container">
            <TimeButtons timeRange={timeRange} setTimeRange={setTimeRange} />
          </div>

          <div>
            {topTracks && topTracks.items && (
              <div className="d-flex flex-wrap justify-content-center">
                <TrackList tracks={topTracks.items.slice(0, 20)} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopTracks;
