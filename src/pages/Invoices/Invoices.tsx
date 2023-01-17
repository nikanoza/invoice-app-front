import { FilterSelect, FormComponent, InvoiceBox } from "components";
import { useState } from "react";
import styled from "styled-components";
import { Plus } from "svg";
import { InvoiceType, StyledComponentsProps } from "types";

type PropsType = {
  darkMode: boolean;
  invoices: InvoiceType[];
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
};

const Invoices = (props: PropsType) => {
  const [filterBy, setFilterBy] = useState<
    "draft" | "pending" | "paid" | "all"
  >("all");
  const [showForm, setShowForm] = useState<boolean>(false);

  const drafts = props.invoices.filter((invoice) => invoice.status === "draft");
  const pendings = props.invoices.filter(
    (invoice) => invoice.status === "pending"
  );
  const paids = props.invoices.filter((invoice) => invoice.status === "paid");

  const array =
    filterBy === "draft"
      ? drafts
      : filterBy === "pending"
      ? pendings
      : filterBy === "paid"
      ? paids
      : props.invoices;
  return (
    <Wrapper>
      {showForm ? (
        <FormComponent
          darkMode={props.darkMode}
          edit={false}
          close={() => setShowForm(false)}
          setInvoices={props.setInvoices}
        />
      ) : null}
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
          filerBy={filterBy}
          setFilterBy={setFilterBy}
          darkMode={props.darkMode}
        />
        <NewInvoiceBtn>
          <Circle>
            <Plus />
          </Circle>
          <ButtonTextMobile onClick={() => setShowForm(true)}>
            New
          </ButtonTextMobile>
          <ButtonTextDesktop onClick={() => setShowForm(true)}>
            New Invoice
          </ButtonTextDesktop>
        </NewInvoiceBtn>
      </Controls>
      <InvoicesList>
        {array.map((invoice) => (
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
  padding: 104px 24px 105px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 136px 48px 173px 48px;
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
  width: fit-content;
  max-height: 650px;
  overflow-y: auto;
  padding-right: 30px;
`;
