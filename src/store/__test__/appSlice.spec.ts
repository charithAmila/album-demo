import { testAlbums } from "../../utils/testData";
import AppReducer, { setAlbums } from "../appSlice";

describe("appSlice", () => {
  const initialState = { albums: [], likeItems: [] };

  it("should handle initial state", () => {
    expect(AppReducer(undefined, { type: "unknown" })).toEqual({
      albums: [],
      likeItems: [],
    });
  });

  it("should handle setAlbums", () => {
    const actual = AppReducer(initialState, setAlbums(testAlbums));
    expect(actual.albums).toEqual(testAlbums);
  });
});
