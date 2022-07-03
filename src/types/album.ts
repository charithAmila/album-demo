interface ArtistInterface {
  name: string;
  mbid: string;
  url: string;
}

interface ImageInterface {
  "#text": string;
  size: string;
}

export interface TrackInfoInterface {
  name: string;
}

export interface AlbumInterface {
  name: string;
  artist: ArtistInterface;
  image: ImageInterface[];
  tracks?: TrackInfoInterface[];
  published?: string;
  content?: string;
  summary?: string;
}
