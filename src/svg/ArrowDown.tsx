import styled from "styled-components";

const ArrowDown: React.FC<{ showOptions: boolean; onClick: () => void }> = (
  props
) => {
  return (
    <Svg showOptions={props.showOptions} onClick={props.onClick}>
      <path
        d="M1 1l4.228 4.228L9.456 1"
        stroke="#7C5DFA"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default ArrowDown;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

type PropsType = {
  showOptions: boolean;
};

const Svg = styled(attrs)(
  (props: PropsType) => `
  width: 11px;
  height: 7px;
  cursor: pointer;
  transform: rotateX(${props.showOptions ? "180deg" : "0deg"})
`
);
