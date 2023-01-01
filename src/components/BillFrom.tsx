import React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import styled, { css } from "styled-components";
import { NewInvoice, StyledComponentsProps } from "types";

type ComponentProps = {
  register: UseFormRegister<NewInvoice>;
  darkMode: boolean;
  errors: Partial<FieldErrorsImpl<NewInvoice>>;
};

const BillFrom: React.FC<ComponentProps> = (props) => {
  return (
    <Main>
      <Label htmlFor="sender-address-street">Street Address</Label>
      <AddressInput
        dark={props.darkMode}
        type="text"
        id="sender-address-street"
        {...props.register("clientAddress.street")}
      />
      <Error>
        {(props.errors.senderAddress?.street &&
          props.errors.senderAddress?.street.message) ||
          ""}
      </Error>
      <Wrapper>
        <CityWrapper>
          <CityBox>
            <Label htmlFor="sender-address-city">City</Label>
            <CityInput
              dark={props.darkMode}
              id="sender-address-city"
              type="text"
              {...props.register("senderAddress.city")}
            />
          </CityBox>
          <CityBox>
            <Label htmlFor="sender-address-code">Post Code</Label>
            <PostCodeInput
              dark={props.darkMode}
              id="sender-address-code"
              type="text"
              {...props.register("senderAddress.postCode")}
            />
          </CityBox>
        </CityWrapper>
        <Error>
          <p>
            {(props.errors.senderAddress?.city &&
              props.errors.senderAddress?.city.message) ||
              ""}
          </p>
          <p>
            {(props.errors.senderAddress?.postCode &&
              props.errors.senderAddress?.postCode.message) ||
              ""}
          </p>
        </Error>
        <Label htmlFor="sender-address-country">Country</Label>
        <CountryInput
          dark={props.darkMode}
          id="sender-address-country"
          type="text"
          {...props.register("senderAddress.country")}
        />
        <Error>
          {(props.errors.senderAddress?.country &&
            props.errors.senderAddress?.country.message) ||
            ""}
        </Error>
      </Wrapper>
    </Main>
  );
};

export default BillFrom;

const Label = styled.label(
  (props: StyledComponentsProps) => css`
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props.dark ? "var(--Gray)" : "var(--Sky)"};
  `
);

const Main = styled.div`
  padding-top: 24px;
`;

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

const AddressInput = styled(Input)`
  width: 100%;
`;

const Error = styled.div`
  width: 100%;
  min-height: 24px;
  color: var(--error);
  font-size: 11px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CityWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CityBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const CityInput = styled(Input)`
  width: 152px;
`;

const PostCodeInput = styled(Input)`
  width: 152px;
`;

const CountryInput = styled(Input)`
  width: 100%;
`;
