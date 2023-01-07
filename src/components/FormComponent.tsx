import { SubmitHandler, useForm } from "react-hook-form";
import schema, { FormValues } from "schema";
import styled, { css } from "styled-components";
import { ArrowLeft } from "svg";
import { StyledComponentsProps } from "types";
import { zodResolver } from "@hookform/resolvers/zod";
import Backdrop from "./Backdrop";
import BillFrom from "./BillFrom";
import BillTo from "./BillTo";
import InvoiceInfoForm from "./InvoiceInfoForm";
import ItemsInForm from "./ItemsInForm";

const FormComponent: React.FC<{
  darkMode: boolean;
  edit: boolean;
  close: () => void;
}> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (date) => {
    console.log(date);
  };

  return (
    <Backdrop>
      <Card dark={props.darkMode} onSubmit={handleSubmit(onSubmit)}>
        <PaddingBox>
          <ReturnBox>
            <ArrowLeft />
            <CloseModal type="button" onClick={() => props.close()}>
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
          <BillTo
            register={register}
            darkMode={props.darkMode}
            errors={errors}
          />
          <InvoiceInfoForm
            register={register}
            darkMode={props.darkMode}
            errors={errors}
            setValue={setValue}
          />
          <ItemsInForm
            darkMode={props.darkMode}
            errors={errors}
            setValue={setValue}
          ></ItemsInForm>
        </PaddingBox>
        <Gradient />
        <Controls dark={props.darkMode}>
          <Discard dark={props.darkMode} type="button">
            Discard
          </Discard>
          <Draft dark={props.darkMode} type="button">
            Save as Draft
          </Draft>
          <Save
            type="submit"
            onClick={() => {
              console.log(errors.items);
            }}
          >
            Save & Send
          </Save>
        </Controls>
      </Card>
    </Backdrop>
  );
};

export default FormComponent;

const Card = styled.form(
  (props: StyledComponentsProps) => css`
    width: 100%;
    max-width: 616px;
    height: 100%;
    background-color: ${props.dark ? "var(--SemiDark)" : "var(--Light)"};
    overflow: auto;
    @media (min-width: 768px) {
      overflow: visible;
    }
  `
);

const ReturnBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23.66px;
  align-self: flex-start;
  @media (min-width: 768px) {
    display: none;
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
    @media (min-width: 768px) {
      margin-top: 10px;
    }
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

const Gradient = styled.div`
  margin-top: 24px;
  width: 100%;
  height: 64px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
`;

const Controls = styled.div(
  (props: StyledComponentsProps) => css`
    width: 100%;
    height: 91px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 7px;
    background-color: ${props.dark ? "var(--darkBlue)" : "white"};
  `
);

const Button = styled.button`
  padding: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  outline: none;
  border: none;
  border-radius: 24px;
`;

const Discard = styled(Button)(
  (props: StyledComponentsProps) => css`
    color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
    background-color: ${props.dark ? "var(--darkGray)" : "#F9FAFE"};
  `
);

const Draft = styled(Button)(
  (props: StyledComponentsProps) => css`
    color: ${props.dark ? "var(--Gray)" : "var(--Sky)"};
    background-color: var(--HeaderBackground);
  `
);

const Save = styled(Button)`
  color: white;
  background-color: var(--Violet);
`;

const PaddingBox = styled.div`
  padding: 94px 24px 0px 24px;
  @media (min-width: 768px) {
    overflow: auto;
    height: calc(100% - 80px - 110px);
    padding: 94px 56px 0px 56px;
  }
`;
