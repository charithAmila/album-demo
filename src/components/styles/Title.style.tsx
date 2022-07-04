import styled from "styled-components";

interface PInterface {
  size?: number;
  color?: string;
}

const P = styled.p<PInterface>`
  color: ${(props) => (props?.color ? props.color : "#ffff")};
  font-size: ${(props) => (props?.size ? `${props.size}px` : "20px")};
`;

export const Title = styled(P)``;

export const Paragraph = styled(P)``;
