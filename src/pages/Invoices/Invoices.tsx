import { FilterSelect, FormComponent, InvoiceBox } from "components";
import { useState } from "react";
import styled from "styled-components";
import { Plus } from "svg";
import { InvoiceType, StyledComponentsProps } from "types";

type PropsType = {
  darkMode: boolean;
  invoices: InvoiceType[];
};

const Invoices = (props: PropsType) => {
  const [filerBy, setFilterBy] = useState<"draft" | "pending" | "paid" | "all">(
    "all"
  );
  return (
    <Wrapper>
      <FormComponent darkMode={props.darkMode} edit={false} />
      <Controls>
        <div>
          <Title dark={props.darkMode}>Invoices</Title>
          <Amount dark={props.darkMode}>
            {props.invoices.length === 0
              ? "No invoices"
              : props.invoices.length + " invoices"}
          </Amount>
        </div>
        <FilterSelect
          filerBy={filerBy}
          setFilterBy={setFilterBy}
          darkMode={props.darkMode}
        />
        <NewInvoiceBtn>
          <Circle>
            <Plus />
          </Circle>
          <ButtonTextMobile>New</ButtonTextMobile>
          <ButtonTextDesktop>New Invoice</ButtonTextDesktop>
        </NewInvoiceBtn>
      </Controls>
      <InvoicesList>
        {props.invoices.map((invoice) => (
          <InvoiceBox
            key={invoice.id}
            invoice={invoice}
            darkMode={props.darkMode}
          />
        ))}
      </InvoicesList>
    </Wrapper>
  );
};

export default Invoices;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 24px 105px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 56px 48px 173px 48px;
  }
  @media (min-width: 1440px) {
    padding-top: 72px;
    padding-bottom: 0;
  } ;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (min-width: 1440px) {
    width: 800px;
  } ;
`;

const Title = styled.h2(
  (props: StyledComponentsProps) => `
  font-size: 20px;
  font-weight: 700;
  line-height: 22.4px;
  letter-spacing: -0.63px;
  color: ${props.dark ? "white" : "var(--Dark)"};
  @media (min-width: 768px){
    font-size: 32px;
    line-height: 35.84px;
    letter-spacing: -1px;
  }
`
);

const Amount = styled.h4(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props.dark ? "var(--lightGray)" : "var(--Gray)"}
`
);

const NewInvoiceBtn = styled.button`
  width: 90px;
  height: 44px;
  outline: none;
  border: none;
  border-radius: 24px;
  background-color: var(--Violet);
  margin-left: 18px;
  display: flex;
  align-items: center;
  column-gap: 8px;
  cursor: pointer;
  @media (min-width: 768px) {
    margin-left: 40px;
    width: 150px;
    height: 48px;
    column-gap: 16px;
  }
`;
const ButtonTextMobile = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: white;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ButtonTextDesktop = styled(ButtonTextMobile)`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: white;
  margin-left: 6px;
`;

const InvoicesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-top: 32px;
  width: 100%;
`;
