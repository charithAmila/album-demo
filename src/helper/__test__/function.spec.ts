import { findAlbumByName, searchAlbumByName } from "..";
import { testAlbums } from "../../utils/testData";

describe("findAlbumByName", () => {
  it("Should handle happy paths", () => {
    expect(findAlbumByName(testAlbums, "Abc")).toEqual({
      name: "Abc",
      artist: {
        name: "artist",
        mbid: "1",
        url: "",
      },
      image: [],
    });
  });

  it("Empty album name", () => {
    expect(findAlbumByName(testAlbums, "")).toBeNull();
  });

  it("Empty albums array empty album name", () => {
    expect(findAlbumByName([], "")).toBeNull();
  });

  it("Album name not in an albums array", () => {
    expect(findAlbumByName(testAlbums, "a")).toBeNull();
  });
});

describe("searchAlbumByName", () => {
  it("Should handle happy paths", () => {
    expect(searchAlbumByName(testAlbums, "")).toEqual(testAlbums);

    expect(searchAlbumByName(testAlbums, "a")).toEqual([
      {
        name: "Abc",
        artist: {
          name: "artist",
          mbid: "1",
          url: "",
        },
        image: [],
      },
      {
        name: "baa",
        artist: {
          name: "artist",
          mbid: "1",
          url: "",
        },
        image: [],
      },
    ]);

    expect(searchAlbumByName(testAlbums, "ab")).toEqual([
      {
        name: "Abc",
        artist: {
          name: "artist",
          mbid: "1",
          url: "",
        },
        image: [],
      },
    ]);

    expect(searchAlbumByName(testAlbums, "Abc")).toEqual([
      {
        name: "Abc",
        artist: {
          name: "artist",
          mbid: "1",
          url: "",
        },
        image: [],
      },
    ]);
    expect(searchAlbumByName(testAlbums, "Abcd")).toEqual([]);
  });

  it("Empty albums array empty text", () => {
    expect(searchAlbumByName([], "")).toEqual([]);
  });
});
