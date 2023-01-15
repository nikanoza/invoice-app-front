import { useState } from "react";
import { FieldError, FieldErrorsImpl, UseFormSetValue } from "react-hook-form";
import { FormValues, Item } from "schema";
import styled, { css } from "styled-components";
import { Trash } from "svg";
import { StyledComponentsProps } from "types";

type ComponentProps = {
  darkMode: boolean;
  errors: Partial<FieldErrorsImpl<FormValues>>;
  setValue: UseFormSetValue<FormValues>;
};

const ItemsInForm: React.FC<ComponentProps> = (props) => {
  const { darkMode } = props;
  const [items, setItems] = useState<Item[]>([]);

  const addItem = () => {
    const clone = [...items, { name: "", quantity: 0, price: 0 }];
    setItems(clone);
    props.setValue("items", clone);
  };

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clone = [...items];
    clone[index].name = event.target.value;
    setItems(clone);
    props.setValue("items", clone);
  };

  const qtyChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clone = [...items];
    clone[index].quantity = +event.target.value;
    setItems(clone);
    props.setValue("items", clone);
  };

  const priceChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const clone = [...items];
    clone[index].price = +event.target.value;
    setItems(clone);
    props.setValue("items", clone);
  };

  const removeItem = (index: number) => {
    const clone = [...items];
    clone.splice(index, 1);
    setItems(clone);
  };

  return (
    <Main>
      <Title>Item List</Title>
      <MobileList>
        {items.map((item, index) => (
          <ItemElement key={index}>
            <NameWrapper>
              <Label htmlFor={`item.name` + index}>Item Name</Label>
              <NameInput
                type="text"
                id={`item.name` + index}
                dark={darkMode}
                value={item.name}
                onChange={(event) => nameChangeHandler(event, index)}
              />
            </NameWrapper>
            <MobileError>
              <Error></Error>
            </MobileError>
            <ItemWrapper>
              <PropertyBox>
                <Label htmlFor={`item.quantity` + index}>Qty.</Label>
                <QtyInput
                  type="text"
                  id={`item.quantity` + index}
                  dark={darkMode}
                  value={item.quantity}
                  onChange={(event) => qtyChangeHandler(event, index)}
                />
              </PropertyBox>
              <PropertyBox>
                <Label htmlFor={`item.price` + index}>Price</Label>
                <PriceInput
                  type="text"
                  id={`item.price` + index}
                  dark={darkMode}
                  value={item.price}
                  onChange={(event) => priceChangeHandler(event, index)}
                />
              </PropertyBox>
              <PropertyBox style={{ height: "73px", justifyContent: "center" }}>
                <Label style={{ marginBottom: "auto" }}>Total</Label>
                <TotalItemPrice style={{ margin: "auto" }}>
                  {(item.price * item.quantity).toFixed(2)}
                </TotalItemPrice>
              </PropertyBox>
              <DeleteBox>
                <Trash onClick={() => removeItem(index)} />
              </DeleteBox>
            </ItemWrapper>
            <MobileError>
              <Error></Error>
            </MobileError>
          </ItemElement>
        ))}
      </MobileList>
      <Error>
        {props.errors.items && items.length === 0
          ? "Minimum 1 item is required"
          : props.errors.items
          ? "All items properties is required; price and quantity can not be zero"
          : ""}
      </Error>
      <AddItem dark={props.darkMode} onClick={addItem} type="button">
        + Add New Item
      </AddItem>
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
  @media (min-width: 768px) {
    row-gap: 18px;
  } ;
`;

const ItemElement = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
    column-gap: 16px;
  } ;
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 214px;
  } ;
`;

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
    background-color: ${props.dark ? "var(--darkGray)" : ""};
    border: none;
    border-radius: 24px;
    cursor: pointer;
    @media (min-width: 768px) {
      margin-top: 24px;
    }
  `
);
