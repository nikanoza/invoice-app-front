import {
  FieldErrorsImpl,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import { FormValues } from "schema";
import styled, { css } from "styled-components";
import { StyledComponentsProps } from "types";

type ComponentProps = {
  register: UseFormRegister<FormValues>;
  darkMode: boolean;
  errors: Partial<FieldErrorsImpl<FormValues>>;
  setValue: UseFormSetValue<FormValues>;
};

const InvoiceInfoForm: React.FC<ComponentProps> = (props) => {
  return (
    <Main>
      <Wrapper>
        <WrapperBox>
          <Label htmlFor="invoice-date">Invoice Date</Label>
          <DateInput
            dark={props.darkMode}
            id="invoice-date"
            type="date"
            {...props.register("createdAt")}
          />
        </WrapperBox>
        <MobileError>
          <Error>
            {(props.errors.createdAt && props.errors.createdAt.message) || ""}
          </Error>
        </MobileError>
        <WrapperBox>
          <Label htmlFor="payment-terms">Payment Terms</Label>
          <Select
            id="payment-terms"
            dark={props.darkMode}
            defaultValue={1}
            onChange={(e) => {
              props.setValue("paymentTerms", +e.currentTarget.value);
            }}
          >
            <option value={1}>Net 1 Day</option>
            <option value={7}>Net 7 Day</option>
            <option value={14}>Net 14 Day</option>
            <option value={30}>Net 30 Day</option>
          </Select>
        </WrapperBox>
      </Wrapper>
      <DesktopError>
        <Error>
          {(props.errors.createdAt && props.errors.createdAt.message) || ""}
        </Error>
      </DesktopError>
      <Error></Error>
      <Label htmlFor="description-input">Project Description</Label>
      <Description
        type="text"
        dark={props.darkMode}
        id="description-input"
        {...props.register("description")}
      />
      <Error>
        {(props.errors.description && props.errors.description.message) || ""}
      </Error>
    </Main>
  );
};

export default InvoiceInfoForm;

const Main = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label(
  (props: StyledComponentsProps) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props.dark ? "var(--Gray)" : "var(--Sky)"};
  `
);

const Input = styled.input(
  (props: StyledComponentsProps) => css`
    height: 48px;
    margin-top: 10px;
    border-radius: 4px;
    padding: 16px 20px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props.dark ? "white" : "var(--Dark)"};
    background-color: ${props.dark ? "var(--darkBlue)" : "transparent"};
    border: ${props.dark
      ? "1px solid var(--darkGray)"
      : "1px solid var(--lightGray)"};
  `
);

const DateInput = styled(Input)`
  width: 100%;
  @media (min-width: 768px) {
    width: 240px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 24px;
  } ;
`;

const WrapperBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Error = styled.div`
  width: 100%;
  min-height: 24px;
  color: var(--error);
  font-size: 11px;
  padding-top: 4px;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const MobileError = styled.div`
  @media (min-width: 768px) {
    display: none;
  } ;
`;
const DesktopError = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  } ;
`;

const Select = styled.select(
  (props: StyledComponentsProps) => css`
    height: 48px;
    margin-top: 10px;
    border-radius: 4px;
    padding: 16px 20px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props.dark ? "white" : "var(--Dark)"};
    background-color: ${props.dark ? "var(--darkBlue)" : "transparent"};
    border: ${props.dark
      ? "1px solid var(--darkGray)"
      : "1px solid var(--lightGray)"};
    @media (min-width: 768px) {
      width: 240px;
    } ;
  `
);

const Description = styled(Input)`
  width: 100%;
`;
