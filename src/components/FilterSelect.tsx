import { ReactNode } from "react";
import styled from "styled-components";
import { ArrowDown, Check } from "svg";
import { StyledComponentsProps } from "types";

type PropsType = {
  filerBy: "draft" | "pending" | "paid" | "all";
  setFilterBy: (str: "draft" | "pending" | "paid" | "all") => void;
  darkMode: boolean;
};

const FilterSelect: React.FC<PropsType> = (props) => {
  return (
    <Select dark={props.darkMode}>
      <TextMobile>Filter</TextMobile>
      <TextDesktop>Filter by status</TextDesktop>
      <ArrowDown />
      <MenuBox />
    </Select>
  );
};

export default FilterSelect;

const Select = styled.div(
  (props: StyledComponentsProps) => `
  display: flex;
  align-items: center;
  column-gap: 12px;
  margin-left: auto;
  color: ${props.dark ? "white" : "var(--Dark)"};
  position: relative;
  @media (min-width:768px){
    column-gap: 16px;
  }
`
);

const TextMobile = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  @media (min-width: 768px) {
    display: none;
  }
`;

const TextDesktop = styled(TextMobile)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuBox = styled.div(
  (props: StyledComponentsProps) => `
  width: 96px;
  height: 50px;
  position: absolute;
  left: -21px;
  top:38px;
  border-radius: 8px;
  background-color: ${props.dark ? "var(--darkGray)" : "#FFFFFF"};
  @media (min-width: 768px) {
    width: 192px;
    left: -37px;
  }
`
);
