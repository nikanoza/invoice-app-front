import styled from "styled-components";

const Plus = () => {
  return (
    <Svg>
      <path
        d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z"
        fill="#7C5DFA"
        fillRule="nonzero"
      />
    </Svg>
  );
};

export default Plus;

const attrs = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
})``;

const Svg = styled(attrs)`
  width: 11px;
  height: 11px;
`;
