import React from "react";
import { FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FormValues } from "schema";
import styled, { css } from "styled-components";
import { StyledComponentsProps } from "types";

type ComponentProps = {
  register: UseFormRegister<FormValues>;
  darkMode: boolean;
  errors: Partial<FieldErrorsImpl<FormValues>>;
};

const BillFrom: React.FC<ComponentProps> = (props) => {
  return (
    <Main>
      <Label htmlFor="sender-address-street">Street Address</Label>
      <AddressInput
        dark={props.darkMode}
        type="text"
        id="sender-address-street"
        {...props.register("senderAddress.street")}
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
        <MobileError>
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
        </MobileError>
        <CityBox>
          <Label htmlFor="sender-address-country">Country</Label>
          <CountryInput
            dark={props.darkMode}
            id="sender-address-country"
            type="text"
            {...props.register("senderAddress.country")}
          />
        </CityBox>
        <MobileError>
          <Error>
            {(props.errors.senderAddress?.country &&
              props.errors.senderAddress?.country.message) ||
              ""}
          </Error>
        </MobileError>
      </Wrapper>
      <DesktopError>
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
          <p>
            {(props.errors.senderAddress?.country &&
              props.errors.senderAddress?.country.message) ||
              ""}
          </p>
        </Error>
      </DesktopError>
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

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 24px;
  } ;
`;

const CityWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    width: fit-content;
    column-gap: 24px;
  } ;
`;

const CityBox = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 152px;
  } ;
`;

const CityInput = styled(Input)`
  width: 152px;
`;

const PostCodeInput = styled(Input)`
  width: 152px;
`;

const CountryInput = styled(Input)`
  width: 100%;
  @media (min-width: 768px) {
    width: 152px;
  }
`;
