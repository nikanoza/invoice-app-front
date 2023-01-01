import { ReactNode } from "react";
import styled from "styled-components";

const Backdrop: React.FC<{ children: ReactNode }> = (props) => {
  return <BackdropElement>{props.children}</BackdropElement>;
};

export default Backdrop;

const BackdropElement = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;
