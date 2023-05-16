const ArtistList = ({ artists }) => {
  return (
    <div class="mt-2 bg-light p-2 w-100">
      {artists && artists.length ? (
        <ol>
          {artists.map((artist) => (
            <li key={artist.id}>
              <div class="d-flex align-items-center">
                <div class="p-2">
                  {artist.images[0] && (
                    <div>
                      <img
                        style={{ width: "50px", height: "50px" }}
                        src={artist.images[0].url}
                        alt={artist.name}
                      />
                    </div>
                  )}
                </div>

                <div class="w-50">
                  <div class="text-truncate">{artist.name}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p> no artists found</p>
      )}
    </div>
  );
};

export default ArtistList;
