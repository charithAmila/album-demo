import { FC } from "react";
import styled from "styled-components";
import { AlbumInterface } from "../types/album";
import LikeButton from "./LikeButton";

interface CardInterface {
  album: AlbumInterface;
}

const Card: FC<CardInterface> = ({ album }) => {
  return (
    <>
      <LikeButton album={album} />
      <CardImage src={album.image[2]["#text"]} alt={album.name} />
      <CardTitle>
        <span>{album.artist.name}</span>
      </CardTitle>
      <CardSubTitle>{album.name}</CardSubTitle>
    </>
  );
};

const CardImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  vertical-align: middle;
`;

const CardTitle = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  color: #d5d1d1;
`;

const CardSubTitle = styled.p`
  color: #5e5e5e;
  font-size: 12px;
  text-align: center;
`;

export default Card;
