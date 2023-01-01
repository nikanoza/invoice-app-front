import { useForm } from "react-hook-form";
import styled, { css } from "styled-components";
import { ArrowLeft } from "svg";
import { NewInvoice, StyledComponentsProps } from "types";
import Backdrop from "./Backdrop";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";

const FormComponent: React.FC<{ darkMode: boolean; edit: boolean }> = (
  props
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewInvoice>();

  return (
    <Backdrop>
      <Card dark={props.darkMode}>
        <ReturnBox>
          <ArrowLeft />
          <CloseModal>
            <Text dark={props.darkMode}>Go Back</Text>
          </CloseModal>
        </ReturnBox>
        <Title dark={props.darkMode}>{props.edit ? "" : "New Invoice"}</Title>
        <FormSection>Bill From</FormSection>
        <BillFrom
          register={register}
          darkMode={props.darkMode}
          errors={errors}
        />
        <FormSection style={{ marginTop: "16px" }}>Bill To</FormSection>
        <BillTo register={register} darkMode={props.darkMode} errors={errors} />
      </Card>
    </Backdrop>
  );
};

export default FormComponent;

const Card = styled.div(
  (props: StyledComponentsProps) => css`
    width: 100%;
    height: 100%;
    padding: 94px 24px 0px 24px;
    background-color: ${props.dark ? "var(--SemiDark)" : "var(--Light)"};
    overflow: auto;
  `
);

const ReturnBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23.66px;
  align-self: flex-start;
  @media (min-width: 1440px) {
    align-self: center;
    margin-right: 625px;
  }
`;

const Text = styled.h3(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-transform: capitalize;
  color: ${props.dark ? "white" : "var(--Dark)"};
`
);

const CloseModal = styled.button(
  (props: StyledComponentsProps) => css`
    outline: none;
    border: none;
    background-color: transparent;
    color: ${props.dark ? "white" : "var(--Dark)"};
  `
);

const Title = styled.h1(
  (props: StyledComponentsProps) => css`
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: ${props.dark ? "white" : "var(--Dark)"};
    margin-top: 24px;
  `
);

const FormSection = styled.h2`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: var(--Violet);
  margin-top: 24px;
`;
