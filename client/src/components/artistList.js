const ArtistList = ({ artists }) => {
  return (
    <div className="mt-2 mb-3 bg-light p-2 w-100">
      {artists && artists.length ? (
        <ol>
          {artists.map((artist) => (
            <li key={artist.id}>
              <div className="d-flex align-items-center">
                <div className="p-2">
                  {artist.images[0] && (
                    <div>
                      <a
                        href={artist.external_urls.spotify}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          style={{ width: "55px", height: "55px" }}
                          src={artist.images[0].url}
                          alt={artist.name}
                        />
                      </a>
                    </div>
                  )}
                </div>

                <div className="w-50">
                  <div className="text-truncate">{artist.name}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      ) : (
        <p>no artists found</p>
      )}
    </div>
  );
};

export default ArtistList;
