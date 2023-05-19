import React from "react";
import { useState, useEffect } from "react";
import { getTopArtists } from "../spotify";
import Title from "../components/title";
import TimeButtons from "../components/timeButtons";
import ArtistList from "../components/artistList";

function TopArtists() {
  const [timeRange, setTimeRange] = useState("short");
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const userArtists = await getTopArtists(`${timeRange}_term`);
      setTopArtists(userArtists.data);
    };
    fetchData();
  }, [timeRange]);

  return (
    <div className="container">
      <Title pageName="top artists" />

      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <div className="time-buttons-container">
            <TimeButtons timeRange={timeRange} setTimeRange={setTimeRange} />
          </div>


          <div>
            {topArtists && topArtists.items && (
              <div className="d-flex flex-wrap justify-content-center">
                <ArtistList artists={topArtists.items.slice(0, 20)} />
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
export default TopArtists;