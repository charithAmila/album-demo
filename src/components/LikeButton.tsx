import { FC } from "react";
import styled from "styled-components";
import useLike from "../hooks/useLike";
import LikeButtonSvg from "../svg/LikeButtonSvg";
import { AlbumInterface } from "../types/album";

interface LikeButtonInterface {
  album: AlbumInterface;
}

const LikeButton: FC<LikeButtonInterface> = ({ album }) => {
  const { toggleLike, isLikeItem } = useLike(album);
  return (
    <LikeButtonWrapper onClick={(e) => toggleLike(e, !isLikeItem())}>
      <LikeButtonSvg liked={isLikeItem()} />
    </LikeButtonWrapper>
  );
};

const LikeButtonWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
  position: absolute;
  z-index: 1000px;
`;

export default LikeButton;
