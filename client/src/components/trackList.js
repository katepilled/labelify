const TrackList = ({ tracks }) => {
  return (
    <div className="mt-2 mb-3 bg-light p-2 w-100">
      {tracks && tracks.length ? (
        <ol>
          {tracks.map((track, index) => (
            <div classname="ml-4" key={track.id} className="list-item">
              <div className="d-flex align-items-center">
                <div className="mr-2">{index + 1}.</div>
                <div className="album-cover p-2">
                  {track.album.images.length && track.album.images[2] && (
                    <div>
                      <a
                        href={track.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "55px", height: "55px" }}
                          src={track.album.images[2].url}
                          alt={track.name}
                        />
                      </a>
                    </div>
                  )}
                </div>
                <div className="w-75 d-flex flex-column">
                  <div className="fw-bold text-truncate">{track.name}</div>
                  <div className="text-truncate">
                    {track.artists.map((artist, i) => (
                      <span key={i}>
                        {artist.name}
                        {i !== track.artists.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ol>
      ) : (
        <p>no tracks found</p>
      )}
    </div>
  );
};

export default TrackList;
