import styled, { css } from "styled-components";
import { StyledComponentsProps } from "types";

const Delete: React.FC<{ darkMode: boolean; id: string; close: () => void }> = (
  props
) => {
  const invoiceDeleteHandler = () => {};
  return (
    <DeleteElement>
      <PopUp dark={props.darkMode}>
        <ModalTitle dark={props.darkMode}>Confirm Deletion</ModalTitle>
        <Warning>
          Are you sure you want to delete invoice #{props.id}? This action
          cannot be undone.
        </Warning>
        <Controls>
          <Cancel dark={props.darkMode} onClick={props.close}>
            Cancel
          </Cancel>
          <DeleteBtn onClick={invoiceDeleteHandler}>Delete</DeleteBtn>
        </Controls>
      </PopUp>
    </DeleteElement>
  );
};

export default Delete;

const DeleteElement = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const PopUp = styled.div(
  (props: StyledComponentsProps) => css`
    width: 327px;
    border-radius: 8px;
    box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
    padding: 32px;
    background-color: ${props.dark ? "var(--darkBlue)" : "white"};
  `
);

const ModalTitle = styled.h2(
  (props: StyledComponentsProps) => css`
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: -0.42px;
    color: ${props.dark ? "white" : "var(--Dark)"};
  `
);

const Warning = styled.p`
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.25px;
  color: var(--Gray);
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 24px;
  column-gap: 8px;
`;

const Button = styled.button`
  padding: 0 24px;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.25px;
  height: 48px;
`;

const Cancel = styled(Button)(
  (props: StyledComponentsProps) => css`
    background-color: ${props.dark ? "var(--darkGray)" : "#F9FAFE"};
    color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
  `
);

const DeleteBtn = styled(Button)`
  background-color: var(--Blood);
  color: white;
`;
