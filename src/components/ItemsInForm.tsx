import { useState } from "react";
import {
  FieldErrorsImpl,
  UseFormRegister,
  Controller,
  Control,
} from "react-hook-form";
import styled, { css } from "styled-components";
import { Trash } from "svg";
import { NewInvoice, Item, StyledComponentsProps } from "types";

type ComponentProps = {
  register: UseFormRegister<NewInvoice>;
  darkMode: boolean;
  errors: Partial<FieldErrorsImpl<NewInvoice>>;
  control: Control<NewInvoice, any>;
};

const ItemsInForm: React.FC<ComponentProps> = (props) => {
  const { darkMode } = props;
  const [items, setItems] = useState<Item[]>([]);

  return (
    <Main>
      <Title>Item List</Title>
      <MobileList>
        {items.map((item, index) => (
          <ItemElement key={item.name}>
            <Label htmlFor={`item.name` + index}></Label>
            <Controller
              render={(props) => (
                <NameInput
                  type="text"
                  {...props}
                  id={`item.name` + index}
                  dark={darkMode}
                />
              )}
              name={`items.${index}.name`}
              control={props.control}
              defaultValue=""
            />
            <Error></Error>
            <ItemWrapper>
              <PropertyBox>
                <Label htmlFor={`item.quantity` + index}>Qty.</Label>
                <Controller
                  render={(props) => (
                    <QtyInput
                      type="number"
                      {...props}
                      id={`item.quantity` + index}
                      dark={darkMode}
                    />
                  )}
                  name={`items.${index}.quantity`}
                  control={props.control}
                />
              </PropertyBox>
              <PropertyBox>
                <Label htmlFor={`item.price` + index}>Price</Label>
                <Controller
                  render={(props) => (
                    <PriceInput
                      type="number"
                      {...props}
                      id={`item.price` + index}
                      dark={darkMode}
                    />
                  )}
                  name={`items.${index}.price`}
                  control={props.control}
                />
              </PropertyBox>
              <PropertyBox style={{ height: "73px", justifyContent: "center" }}>
                <Label style={{ marginBottom: "auto" }}>Total</Label>
                <TotalItemPrice style={{ margin: "auto" }}>
                  152.00
                </TotalItemPrice>
              </PropertyBox>
              <DeleteBox>
                <Trash onClick={() => {}} />
              </DeleteBox>
            </ItemWrapper>
            <Error></Error>
          </ItemElement>
        ))}
      </MobileList>
      <AddItem dark={props.darkMode}>+ Add New Item</AddItem>
    </Main>
  );
};

export default ItemsInForm;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 42px;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: -0.38px;
  color: #777f98;
  margin-bottom: 24px;
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

const MobileList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ItemElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NameInput = styled(Input)`
  width: 100%;
`;

const Error = styled.div`
  width: 100%;
  min-height: 24px;
  color: var(--error);
  font-size: 11px;
`;

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 16px;
`;

const PropertyBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const QtyInput = styled(Input)`
  width: 64px;
`;

const PriceInput = styled(Input)`
  width: 100px;
`;

const TotalItemPrice = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: var(--Gray);
`;

const DeleteBox = styled.div`
  margin-left: auto;
  align-self: flex-end;
  margin-bottom: 8px;
`;

const AddItem = styled.button(
  (props: StyledComponentsProps) => css`
    width: 100%;
    height: 48px;
    font-weight: 700;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props.dark ? "var(--Gray)" : "#7E88C3"};
    background-color: ${props.dark ? "var(--darkGray)" : "#F9FAFE"};
    margin-top: 24px;
    border: none;
    border-radius: 24px;
  `
);
