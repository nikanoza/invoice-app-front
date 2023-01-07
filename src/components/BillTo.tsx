import { FieldError, FieldErrorsImpl, UseFormRegister } from "react-hook-form";
import { FormValues } from "schema";
import styled, { css } from "styled-components";
import { StyledComponentsProps } from "types";

type ComponentProps = {
  register: UseFormRegister<FormValues>;
  darkMode: boolean;
  errors: Partial<FieldErrorsImpl<FormValues>>;
};

const BillTo: React.FC<ComponentProps> = (props) => {
  return (
    <Main>
      <Label htmlFor="client-name">Client’s Name</Label>
      <NameInput
        dark={props.darkMode}
        id="client-name"
        type="text"
        {...props.register("clientName")}
      />
      <Error>
        {(props.errors.clientName && props.errors.clientName.message) || ""}
      </Error>
      <Label htmlFor="client-email">Client’s Email</Label>
      <EmailInput
        dark={props.darkMode}
        id="client-email"
        type="email"
        {...props.register("clientEmail")}
      />
      <Error>
        {(props.errors.clientEmail && props.errors.clientEmail.message) || ""}
      </Error>
      <Label htmlFor="client-address-street">Street Address</Label>
      <AddressInput
        dark={props.darkMode}
        type="text"
        id="client-address-street"
        {...props.register("clientAddress.street")}
      />
      <Error>
        {(props.errors.clientAddress?.street &&
          props.errors.clientAddress?.street.message) ||
          ""}
      </Error>
      <Wrapper>
        <CityWrapper>
          <CityBox>
            <Label htmlFor="client-address-city">City</Label>
            <CityInput
              dark={props.darkMode}
              id="client-address-city"
              type="text"
              {...props.register("clientAddress.city")}
            />
          </CityBox>
          <CityBox>
            <Label htmlFor="client-address-code">Post Code</Label>
            <PostCodeInput
              dark={props.darkMode}
              id="client-address-code"
              type="text"
              {...props.register("clientAddress.postCode")}
            />
          </CityBox>
        </CityWrapper>
        <MobileError>
          <Error>
            <p>
              {(props.errors.clientAddress?.city &&
                props.errors.clientAddress?.city.message) ||
                ""}
            </p>
            <p>
              {(props.errors.clientAddress?.postCode &&
                props.errors.clientAddress?.postCode.message) ||
                ""}
            </p>
          </Error>
        </MobileError>
        <CityBox>
          <Label htmlFor="client-address-country">Country</Label>
          <CountryInput
            dark={props.darkMode}
            id="client-address-country"
            type="text"
            {...props.register("clientAddress.country")}
          />
        </CityBox>
        <MobileError>
          <Error>
            {(props.errors.clientAddress?.country &&
              props.errors.clientAddress?.country.message) ||
              ""}
          </Error>
        </MobileError>
      </Wrapper>
      <DesktopError>
        <Error>
          <p>
            {(props.errors.clientAddress?.city &&
              props.errors.clientAddress?.city.message) ||
              ""}
          </p>
          <p>
            {(props.errors.clientAddress?.postCode &&
              props.errors.clientAddress?.postCode.message) ||
              ""}
          </p>
          <p>
            {(props.errors.clientAddress?.country &&
              props.errors.clientAddress?.country.message) ||
              ""}
          </p>
        </Error>
      </DesktopError>
    </Main>
  );
};

export default BillTo;

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
  display: flex;
  flex-direction: column;
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

const NameInput = styled(Input)`
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

const EmailInput = styled(Input)`
  width: 100%;
`;

const AddressInput = styled(Input)`
  width: 100%;
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
