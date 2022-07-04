import { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Card from "../components/Card";
import { List, ListItem } from "../components/styles/List.styles";
import { Title } from "../components/styles/Title.style";
import { searchAlbumByName, shortAlbums } from "../helper";
import { RootState } from "../store";
import { AlbumInterface } from "../types/album";
import { device } from "../utils/constants";

const Home: FC = () => {
  const { app } = useSelector((state: RootState) => state);
  const [albums, setAlbums] = useState<AlbumInterface[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setAlbums(app.albums);
  }, [app.albums]);

  const short = (text: string) => {
    setAlbums(() => (text ? [...shortAlbums(albums)] : [...app.albums]));
  };

  const search = (text: string) => {
    setAlbums(() => [...searchAlbumByName(app.albums, text)]);
  };

  return (
    <>
      <ListHeader>
        <ListTitle size={40}> Top albums</ListTitle>
        <SearchField
          onChange={(e) => search(e.target.value)}
          placeholder="Search by name"
        />
        <SelectField onChange={(e) => short(e.target.value)}>
          <option value="">Short</option>
          <option value="name">Short By Name</option>
        </SelectField>
      </ListHeader>
      <List>
        <ListBody>
          {albums.map((album, key) => {
            return (
              <Item
                key={key}
                onClick={() =>
                  navigate(`/album/${album.name}/${album.artist.name}`)
                }
              >
                <div>
                  <Card album={album} />
                </div>
              </Item>
            );
          })}
        </ListBody>
      </List>
      <Outlet />
    </>
  );
};

const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 40px;
  @media ${device.mobileS} {
    padding: 0px;
    padding-bottom: 30px;
  }
`;

const ListBody = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
`;

const ListTitle = styled(Title)`
  text-align: center;
`;

const Item = styled(ListItem)`
  border: 1px solid #5e5e5e;
  @media ${device.mobileM} {
    flex-basis: 45%;
  }
  @media ${device.tablet} {
    flex-basis: 200px;
  }
`;

const SearchField = styled.input`
  background: rgb(29, 28, 28);
  border: 2px solid rgb(101, 100, 100);
  color: rgb(101, 100, 100);
  border-radius: 20px;

  padding-left: 20px;
  width: 80%;
  @media ${device.mobileS} {
    height: 25px;
    font-size: 15px;
  }

  @media ${device.tablet} {
    width: 50%;
    height: 50px;
    font-size: 25px;
  }
`;

const SelectField = styled.select`
  height: 30px;
  background: rgb(29, 28, 28);
  border: 2px solid rgb(101, 100, 100);
  color: rgb(101, 100, 100);
  border-radius: 5px;
`;

export default Home;
