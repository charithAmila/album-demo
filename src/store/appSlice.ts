import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findAlbumByName } from "../helper";
import { AlbumInterface, TrackInfoInterface } from "../types/album";

export interface AppSliceInterface {
  albums: AlbumInterface[];
  likeItems: String[];
}

const initialState: AppSliceInterface = {
  albums: [],
  likeItems: [],
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAlbums: (state, action: PayloadAction<AlbumInterface[]>) => {
      state.albums = action.payload;
    },
    setTracks: (
      state,
      action: PayloadAction<{
        tracks: TrackInfoInterface[];
        wiki: { summary: string; published: string; content: string };
        albumName: string;
      }>
    ) => {
      const {
        albumName,
        tracks,
        wiki: { summary, published, content },
      } = action.payload;
      let albums = state.albums;
      let album = findAlbumByName(albums, albumName);
      if (album) {
        album.tracks = tracks ?? [];
        album.published = published ?? undefined;
        album.summary = summary ?? undefined;
        album.content = content ?? undefined;
      }
      state.albums = [...albums];
    },
    setLike: (
      state,
      action: PayloadAction<{ name: string; isLike: boolean }>
    ) => {
      if (action.payload.isLike) {
        state.likeItems = [...state.likeItems, action.payload.name];
      } else {
        state.likeItems = [
          ...state.likeItems.filter((name) => name !== action.payload.name),
        ];
      }
    },
  },
});

export const { setAlbums, setTracks, setLike } = appSlice.actions;

export default appSlice.reducer;
