import styled, { css } from "styled-components";
import { EmptyPic } from "assets";
import { StyledComponentsProps } from "types";

const Empty: React.FC<{ darkMode: boolean }> = (props) => {
  return (
    <Main>
      <Image src={EmptyPic} alt="" />
      <Warning dark={props.darkMode}>There is nothing here</Warning>
      <Advice dark={props.darkMode}>
        Create an invoice by clicking the New button and get started
      </Advice>
    </Main>
  );
};

export default Empty;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  margin-top: 70px;
  @media (min-width: 768px) {
    margin-top: 170px;
  }
  @media (min-width: 1440px) {
    margin-top: 110px;
  }
`;

const Warning = styled.p(
  (props: StyledComponentsProps) => css`
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.63px;
    margin-top: 40px;
    color: ${props.dark ? "white" : "var(--Dark)"};
    @media (min-width: 768px) {
      margin-top: 64px;
    }
  `
);

const Advice = styled.p(
  (props: StyledComponentsProps) => css`
    font-size: 14px;
    font-weight: 500;
    line-height: 15px;
    letter-spacing: -0.25px;
    margin-top: 24px;
    width: 199px;
    text-align: center;
    color: ${props.dark ? "var(--lightGray)" : "var(--Gray)"};
  `
);
