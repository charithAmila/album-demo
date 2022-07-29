import { AlbumInterface } from "../types/album";

/**
 * Function that find album by name
 * @param albums {AlbumInterface[]}
 * @param albumName {String}
 * @returns {AlbumInterface | null}
 */
export const findAlbumByName = (
  albums: AlbumInterface[],
  albumName: string | undefined | null
): AlbumInterface | null =>
  albums.find(({ name }) => name === albumName) || null;

/**
 * Function that search album by name
 * @param albums {AlbumInterface[]}
 * @param text {String}
 * @returns {AlbumInterface[]}
 */
export const searchAlbumByName = (
  albums: AlbumInterface[],
  text: string
): AlbumInterface[] => {
  if (!text) {
    return albums;
  }
  const searchText = text.toLowerCase();
  return albums.filter(({ name }) => name.toLowerCase().includes(searchText));
};

/**
 * Function that short albums by name
 * @param albums {AlbumInterface[]}
 * @returns {AlbumInterface[]}
 */
export const shortAlbums = (albums: AlbumInterface[]): AlbumInterface[] => {
  return [...albums].sort((a: AlbumInterface, b: AlbumInterface) => {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });
};
