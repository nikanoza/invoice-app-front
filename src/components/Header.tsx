import { User } from "assets";
import styled from "styled-components";
import { Logo, Moon, Sun } from "svg";

type PropsType = {
  darkMode: boolean;
  setDarkMode: (bool: boolean) => void;
};

const Header: React.FC<PropsType> = (props) => {
  return (
    <HeaderElement>
      <LogoDiv>
        <TopShape />
        <BottomShape />
        <LogoShape>
          <Logo />
        </LogoShape>
      </LogoDiv>
      <ThemeDiv>
        {props.darkMode ? (
          <Sun onClick={() => props.setDarkMode(false)} />
        ) : (
          <Moon onClick={() => props.setDarkMode(true)} />
        )}
      </ThemeDiv>
      <Line />
      <Avatar src={User} alt="avatar image"></Avatar>
    </HeaderElement>
  );
};

export default Header;

const HeaderElement = styled.header`
  width: 100%;
  height: 72px;
  background-color: var(--HeaderBackground);
  display: flex;
  align-items: center;
  @media (min-width: 1440px) {
    width: 103px;
    height: 100vh;
    position: fixed;
    flex-direction: column;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
  }
`;

const LogoDiv = styled.div`
  height: 100%;
  width: 72px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  position: relative;
  overflow: hidden;
  @media (min-width: 1440px) {
    width: 100%;
    height: 103px;
  } ;
`;

const TopShape = styled.div`
  width: 100%;
  height: 100%;
  background-color: #7c5dfa;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const BottomShape = styled.div`
  width: 100%;
  height: 100%;
  background-color: #9277ff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  position: absolute;
  left: 0;
  top: 36.35px;
  @media (min-width: 1440px) {
    top: 52px;
  }
`;

const LogoShape = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ThemeDiv = styled.div`
  margin-left: auto;
  @media (min-width: 1440px) {
    margin-left: 0;
    margin-top: auto;
  }
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #494e6e;
  margin-left: 24px;
  @media (min-width: 1440px) {
    width: 100%;
    height: 1px;
    margin-top: 32.1px;
    margin-left: 0;
  }
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-left: 24px;
  margin-right: 20px;
  @media (min-width: 1440px) {
    margin: 24px 0 24px 0;
  }
`;
