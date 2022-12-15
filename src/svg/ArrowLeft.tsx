import styled from "styled-components";

const ArrowLeft = () => {
  return (
    <Svg>
      <path
        d="M6.342.886L2.114 5.114l4.228 4.228"
        stroke="#9277FF"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default ArrowLeft;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 7px;
  height: 10px;
`;
