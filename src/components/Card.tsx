import { FC } from "react";
import styled from "styled-components";
import { AlbumInterface } from "../types/album";
import LikeButton from "./LikeButton";
import { Title } from "./styles/Title.style";

interface CardInterface {
  album: AlbumInterface;
}

const Card: FC<CardInterface> = ({ album }) => {
  return (
    <>
      <LikeButton album={album} />
      <CardImage src={album.image[2]["#text"]} alt={album.name} />
      <CardTitle>{album.artist.name}</CardTitle>
      <CardSubTitle color="#5e5e5e" size={12}>
        {album.name}
      </CardSubTitle>
    </>
  );
};

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const CardTitle = styled(Title)`
  padding-top: 10px;
  text-align: center;
`;

const CardSubTitle = styled(Title)`
  text-align: center;
`;

export default Card;
