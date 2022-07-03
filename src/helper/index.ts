import { AlbumInterface } from "../types/album";

export const findAlbumByName = (
  albums: AlbumInterface[],
  albumName: string | undefined | null
) => albums.find(({ name }) => name === albumName) || null;

export const searchAlbumByName = (albums: AlbumInterface[], text: string) => {
  if (!text) {
    return albums;
  }
  const searchText = text.toLowerCase();
  return albums.filter(({ name }) => name.toLowerCase().includes(searchText));
};

export const shortAlbums = (albums: AlbumInterface[]) => {
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
