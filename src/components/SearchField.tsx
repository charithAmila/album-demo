import styled from "styled-components";
import { device } from "../utils/constants";

const SearchField = styled.input`
  height: 50px;
  background: rgb(29, 28, 28);
  border: 2px solid rgb(101, 100, 100);
  border-radius: 20px;
  font-size: 25px;
  padding-left: 20px;
  width: 80%;
  @media ${device.mobileS} {
    height: 25px;
    font-size: 15px;
  }
`;

export default SearchField;
