import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getAlbumsInfo } from "../api/albums";
import ModalView from "../components/layouts/ModalView";
import LikeButton from "../components/LikeButton";
import { findAlbumByName } from "../helper";
import { RootState } from "../store";
import { setTracks } from "../store/appSlice";
import { AlbumInterface } from "../types/album";
import { device } from "../utils/constants";

interface UrlParamsInterface {
  album?: string;
  artist?: string;
}

const Album: FC = () => {
  const { album: name, artist }: UrlParamsInterface = useParams();

  const [albumInfo, setAlbumInfo] = useState<AlbumInterface | null>(null);
  const dispatch = useDispatch();

  const {
    app: { albums },
  } = useSelector((state: RootState) => state);

  useEffect(() => {
    if (albums.length) {
      setAlbumInfo(() => findAlbumByName(albums, name));
    }
  }, [albums, name]);

  useEffect(() => {
    if (artist && name && !albumInfo?.tracks?.length) {
      getAlbumsInfo(artist, name)
        .then((res) => res.json())
        .then((res) => {
          const { wiki } = res.album;
          dispatch(
            setTracks({
              tracks: res.album.tracks.track,
              wiki: {
                summary: wiki?.summary,
                content: wiki?.content,
                published: wiki?.published,
              },
              albumName: name,
            })
          );
        });
    }
  }, [name, artist, albumInfo, dispatch]);

  return (
    <ModalView>
      {albumInfo && (
        <>
          <LikeButton album={albumInfo} />
          <AlbumHeader>
            <MainImage src={albumInfo.image[2]["#text"]} alt={albumInfo.name} />
            <AlbumContent>
              <Title>{name}</Title>

              {albumInfo.summary && (
                <Summary
                  dangerouslySetInnerHTML={{ __html: albumInfo.summary }}
                />
              )}
            </AlbumContent>
          </AlbumHeader>
          <div>
            <TrackList>
              {albumInfo.tracks &&
                albumInfo.tracks.map((track, key) => (
                  <TrackItem key={key}>
                    <ListItemLabel>{track.name}</ListItemLabel>
                  </TrackItem>
                ))}
            </TrackList>
          </div>
        </>
      )}
    </ModalView>
  );
};

const AlbumHeader = styled.div`
  display: flex;
  gap: 10px;
  @media ${device.mobileM} {
    flex-direction: column;
  }
  @media ${device.tablet} {
    flex-direction: row;
  }
`;

const MainImage = styled.img`
  flex: 1;
`;

const AlbumContent = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #ffff;
`;

const Summary = styled.div`
  color: #ffff;
  font-size: 17px;
`;

const TrackList = styled.ul`
  padding-left: 0px;
`;

const TrackItem = styled.li`
  list-style: none;
  background: #2d2d2d;
  height: 50px;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
`;

const ListItemLabel = styled.p`
  color: #ffff;
`;

export default Album;
