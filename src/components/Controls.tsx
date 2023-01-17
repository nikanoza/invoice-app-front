import { updateInvoice } from "services";
import styled, { css } from "styled-components";
import { InvoiceType, NewInvoice, StyledComponentsProps } from "types";

type PropsType = {
  darkMode: boolean;
  invoiceId: string;
  editInvoice: () => void;
  openDeleteModal: () => void;
  invoices: InvoiceType[];
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
  setInvoice: React.Dispatch<React.SetStateAction<InvoiceType | null>>;
};

const Controls: React.FC<PropsType> = (props) => {
  const statusChangeHandler = async () => {
    const clone = [...props.invoices];
    const invoiceIndex = clone.findIndex(
      (invoice) => invoice.id === props.invoiceId
    );
    clone[invoiceIndex].status = "paid";
    try {
      const invoice = clone[invoiceIndex];
      const updatedInvoice: NewInvoice = {
        createdAt: invoice.createdAt,
        paymentDue: invoice.paymentDue,
        description: invoice.description,
        paymentTerms: invoice.paymentTerms,
        clientName: invoice.clientName,
        clientEmail: invoice.clientEmail,
        status: invoice.status,
        senderAddress: invoice.senderAddress,
        clientAddress: invoice.clientAddress,
        items: invoice.items,
        total: invoice.total,
      };

      await updateInvoice(updatedInvoice, props.invoiceId);
      props.setInvoice(clone[invoiceIndex]);
      props.setInvoices(clone);
    } catch (error) {}
  };

  return (
    <Main dark={props.darkMode}>
      <Edit dark={props.darkMode} onClick={props.editInvoice} hoverColor="">
        edit
      </Edit>
      <Delete
        dark={props.darkMode}
        color="var(--Blood)"
        hoverColor="var(--BloodHover)"
        onClick={props.openDeleteModal}
      >
        delete
      </Delete>
      <Mark
        dark={props.darkMode}
        color="var(--Violet)"
        hoverColor="var(--VioletHover)"
        onClick={statusChangeHandler}
      >
        Mark as Paid
      </Mark>
    </Main>
  );
};

export default Controls;

const Main = styled.main(
  (props: StyledComponentsProps) => `
    width: 100%;
    height: 91px;
    display: flex;
    align-items: center;
    background-color: ${props.dark ? "var(--darkBlue)" : "white"};
    margin-top:56px;
    box-shadow: ${
      props.dark
        ? "box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
        : "box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
    };
    @media (min-width:768px){
      margin-top: 0;
    }
`
);

type ButtonProps = {
  dark: boolean;
  color?: string;
  hoverColor?: string;
};

const Button = styled.button`
  height: 48px;
  border-radius: 24px;
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: white;
  border: none;
  outline: none;
  text-transform: capitalize;
  cursor: pointer;
`;
const Edit = styled(Button)(
  (props: ButtonProps) => css`
    width: 73px;
    margin-left: 24px;
    color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
    background-color: ${props.dark ? "#252945" : "#F9FAFE"};
    &:hover {
      background-color: ${props.dark ? "white" : "#DFE3FA"};
      color: "var(--Sky)";
    }
  `
);

const Delete = styled(Button)(
  (props: ButtonProps) => css`
    width: 89px;
    margin-left: 8px;
    background-color: ${props.color};
    &:hover {
      background-color: ${props.hoverColor};
    }
  `
);

const Mark = styled(Button)(
  (props: ButtonProps) => css`
    width: 149px;
    margin-left: 8px;
    background-color: ${props.color};
    &:hover {
      background-color: ${props.hoverColor};
    }
  `
);
