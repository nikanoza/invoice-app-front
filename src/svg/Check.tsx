import styled from "styled-components";

const Check = () => {
  return (
    <Svg>
      <path
        d="M1.5 4.5l2.124 2.124L8.97 1.28"
        stroke="#FFF"
        stroke-width="2"
        fill="none"
        fillRule="evenodd"
      />
    </Svg>
  );
};

export default Check;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 10px;
  height: 8px;
`;
