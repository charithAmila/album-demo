const API_KEY = `d732731be2f5f0ec4b10e5a3607d7090`;
const BASE_URL = `https://ws.audioscrobbler.com/2.0/`;

export const getAlbums = () => {
  return fetch(
    `${BASE_URL}?method=tag.gettopalbums&tag=rock&api_key=${API_KEY}&format=json`
  );
};

export const getAlbumsInfo = (artist: string, album: string) => {
  return fetch(
    `${BASE_URL}?method=album.getinfo&api_key=${API_KEY}&artist=${artist}&album=${album}&format=json`
  );
};
