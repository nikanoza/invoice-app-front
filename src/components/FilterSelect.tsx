import { ReactNode, useState } from "react";
import styled from "styled-components";
import { ArrowDown, Check } from "svg";
import { StyledComponentsProps } from "types";

type PropsType = {
  filerBy: "draft" | "pending" | "paid" | "all";
  setFilterBy: (str: "draft" | "pending" | "paid" | "all") => void;
  darkMode: boolean;
};

const FilterSelect: React.FC<PropsType> = (props) => {
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const showOptionHandler = () => {
    setShowOptions(!showOptions);
  };

  const optionClickHandler = (str: "draft" | "pending" | "paid") => {
    if (str === props.filerBy) {
      props.setFilterBy("all");
    } else {
      props.setFilterBy(str);
    }
    setShowOptions(false);
  };

  return (
    <Select dark={props.darkMode}>
      <TextMobile onClick={showOptionHandler}>Filter</TextMobile>
      <TextDesktop onClick={showOptionHandler}>Filter by status</TextDesktop>
      <ArrowDown showOptions={showOptions} onClick={showOptionHandler} />
      {showOptions ? (
        <MenuBox dark={props.darkMode}>
          <Option>
            <Checkbox
              dark={props.darkMode}
              onClick={() => optionClickHandler("draft")}
              active={props.filerBy === "draft"}
            >
              {props.filerBy === "draft" ? <Check /> : null}
            </Checkbox>
            <OptionText
              dark={props.darkMode}
              onClick={() => optionClickHandler("draft")}
            >
              Draft
            </OptionText>
          </Option>
          <Option style={{ marginTop: "10px" }}>
            <Checkbox
              dark={props.darkMode}
              onClick={() => optionClickHandler("pending")}
              active={props.filerBy === "pending"}
            >
              {props.filerBy === "pending" ? <Check /> : null}
            </Checkbox>
            <OptionText
              dark={props.darkMode}
              onClick={() => optionClickHandler("pending")}
            >
              Pending
            </OptionText>
          </Option>
          <Option style={{ marginTop: "10px" }}>
            <Checkbox
              dark={props.darkMode}
              onClick={() => optionClickHandler("paid")}
              active={props.filerBy === "paid"}
            >
              {props.filerBy === "paid" ? <Check /> : null}
            </Checkbox>
            <OptionText
              dark={props.darkMode}
              onClick={() => optionClickHandler("paid")}
            >
              Paid
            </OptionText>
          </Option>
        </MenuBox>
      ) : null}
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
  cursor: pointer;
  @media (min-width: 768px) {
    display: block;
  }
`;

const MenuBox = styled.div(
  (props: StyledComponentsProps) => `
  width: 86px;
  padding: 8px;
  position: absolute;
  left: -11px;
  top: 23px;
  border-radius: 8px;
  background-color: ${props.dark ? "var(--darkGray)" : "#FFFFFF"};
  box-shadow: ${
    props.dark
      ? "0px 10px 20px rgba(0, 0, 0, 0.25)"
      : "0px 10px 20px rgba(72, 84, 159, 0.25)"
  };
  @media (min-width: 768px) {
    width: 192px;
    left: -37px;
    padding: 24px;
  }
`
);

const Option = styled.div`
  display: flex;
  align-items: center;
  column-gap: 8px;
`;

const Checkbox = styled.span(
  (props: StyledComponentsProps) => `
  cursor: pointer;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  background-color: ${
    props.active
      ? "var(--Violet)"
      : props.dark
      ? "var(--darkBlue)"
      : "var(--lightGray)"
  };
  &:hover{
    border: 1px solid var(--Violet);
  }
`
);

const OptionText = styled.h3(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props.dark ? "white" : "var(--darkBlue)"};
`
);
