import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { getAlbums } from "./api/albums";
import Album from "./pages/Album";
import Home from "./pages/Home";
import { setAlbums } from "./store/appSlice";

const AppRoutes: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getAlbums()
      .then((res) => res.json())
      .then((res) => {
        dispatch(setAlbums(res.albums.album));
      });
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/album" replace />} />
        <Route path="/album" element={<Home />}>
          <Route path=":album/:artist" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
