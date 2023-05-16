
const TrackList = ({ tracks }) => {

  return (
    <div class="mt-2 bg-light p-2 w-100">
      {tracks && tracks.length ? (
        <ol>
          {tracks.map((track) => (
            <li key={track.id}>
              <div class="d-flex align-items-center">
                <div class="album-cover p-2">
                  {track.album.images.length && track.album.images[2] && (
                    <div class="">
                      <img src={track.album.images[2].url} alt={track.name} />
                    </div>
                  )}
                </div>
                <div class="w-50">
                  <div class="fw-bold text-truncate">{track.name}</div>
                  <div class="text-truncate">
                    {track.artists.map((artist, i) => (
                      <span key={i}>
                        {artist.name}
                        {i !== track.artists.length - 1 && ", "}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p>No tracks found</p>
      )}
    </div>
  );
};

export default TrackList;
