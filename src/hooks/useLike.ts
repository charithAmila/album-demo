import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { setLike } from "../store/appSlice";
import { AlbumInterface } from "../types/album";

const useLike = (album: AlbumInterface) => {
  const {
    app: { likeItems },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const toggleLike = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    isLike: boolean
  ) => {
    e.stopPropagation();
    dispatch(setLike({ name: album.name, isLike }));
  };

  const isLikeItem = () => {
    return !!likeItems.find((name) => name === album.name);
  };

  return { toggleLike, isLikeItem };
};
export default useLike;
