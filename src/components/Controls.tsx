import styled from "styled-components";
import { StyledComponentsProps } from "types";

type PropsType = {
  darkMode: boolean;
  invoiceId: string;
  editInvoice: () => void;
  openDeleteModal: () => void;
};

const Controls: React.FC<PropsType> = (props) => {
  return (
    <Main dark={props.darkMode}>
      <Edit dark={props.darkMode} onClick={props.editInvoice}>
        edit
      </Edit>
      <Delete
        dark={props.darkMode}
        color="var(--Blood)"
        onClick={props.openDeleteModal}
      >
        delete
      </Delete>
      <Mark dark={props.darkMode} color="var(--Violet)">
        Mark as Paid
      </Mark>
    </Main>
  );
};

export default Controls;

const Main = styled.main(
  (props: StyledComponentsProps) => `
    width: 100%;
    height: 91px;
    display: flex;
    align-items: center;
    background-color: ${props.dark ? "var(--darkBlue)" : "white"};
    margin-top:56px;
    box-shadow: ${
      props.dark
        ? "box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
        : "box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
    };
    @media (min-width:768px){
      margin-top: 0;
    }
`
);

type ButtonProps = {
  dark: boolean;
  color?: string;
};

const Button = styled.button`
  height: 48px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: white;
  border: none;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;
`;
const Edit = styled(Button)(
  (props: ButtonProps) => `
  width: 73px;
  margin-left: 24px;
  color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
  background-color: ${props.dark ? "#252945" : "#F9FAFE"}
`
);

const Delete = styled(Button)(
  (props: ButtonProps) => `
  width: 89px;
  margin-left: 8px;
  background-color: ${props.color}
`
);

const Mark = styled(Button)(
  (props: ButtonProps) => `
  width: 149px;
  margin-left: 8px;
  background-color: ${props.color}
`
);
