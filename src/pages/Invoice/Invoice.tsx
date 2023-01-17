import { Delete, FormComponent, Info } from "components";
import Controls from "components/Controls";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getInvoice } from "services";
import styled from "styled-components";
import { ArrowLeft } from "svg";
import { InvoiceType, StyledComponentsProps } from "types";

type PropsType = {
  darkMode: boolean;
  invoices: InvoiceType[];
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceType[]>>;
};

const Invoice = (props: PropsType) => {
  const { id } = useParams();
  const item = props.invoices.find((invoice) => invoice.id === id);
  const [invoice, setInvoice] = useState<InvoiceType | null>(item || null);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchInvoice = async () => {
      try {
        const response = await getInvoice(id || "");
        setInvoice(response.data);
      } catch (error) {}
    };

    if (!item) {
      fetchInvoice();
    }
  }, [id, item]);

  return (
    <InvoiceElement>
      {showForm ? (
        <FormComponent
          darkMode={props.darkMode}
          edit={true}
          close={() => setShowForm(false)}
          setInvoices={props.setInvoices}
          invoice={item}
          setInvoice={setInvoice}
          invoices={props.invoices}
        />
      ) : null}
      {showDeleteModal && invoice ? (
        <Delete
          darkMode={props.darkMode}
          id={invoice.id}
          close={() => setShowDeleteModal(false)}
          setInvoices={props.setInvoices}
          invoices={props.invoices}
        />
      ) : null}
      <InvoiceTop>
        <ReturnBox>
          <ArrowLeft />
          <Link
            to="/invoices"
            style={{
              textDecoration: "none",
              color: props.darkMode ? "white" : "var(--Dark)",
            }}
          >
            <Text dark={props.darkMode}>Go Back</Text>
          </Link>
        </ReturnBox>
        {invoice ? (
          <Header dark={props.darkMode}>
            <StatusSection>
              <StatusText>Status</StatusText>
              <Status status={invoice.status} dark={props.darkMode}>
                <Circle
                  style={{
                    backgroundColor:
                      invoice.status === "paid"
                        ? "rgb(51, 214, 159)"
                        : invoice.status === "pending"
                        ? "rgba(255, 143, 0, 1)"
                        : props.darkMode
                        ? "rgba(223, 227, 250, 1)"
                        : "rgba(55, 59, 83, 1)",
                  }}
                />
                <StatusText
                  style={{
                    color:
                      invoice.status === "paid"
                        ? "rgb(51, 214, 159)"
                        : invoice.status === "pending"
                        ? "rgba(255, 143, 0, 1)"
                        : props.darkMode
                        ? "rgba(223, 227, 250, 1)"
                        : "rgba(55, 59, 83, 1)",
                  }}
                >
                  {invoice.status}
                </StatusText>
              </Status>
            </StatusSection>
            <ControlsDesktop>
              <Controls
                darkMode={props.darkMode}
                invoiceId={invoice?.id}
                editInvoice={() => setShowForm(true)}
                openDeleteModal={() => setShowDeleteModal(true)}
                invoices={props.invoices}
                setInvoices={props.setInvoices}
                setInvoice={setInvoice}
              />
            </ControlsDesktop>
          </Header>
        ) : null}
        {invoice ? <Info darkMode={props.darkMode} invoice={invoice} /> : null}
      </InvoiceTop>
      {invoice ? (
        <ControlsMobile>
          <Controls
            darkMode={props.darkMode}
            invoiceId={invoice?.id}
            editInvoice={() => setShowForm(true)}
            openDeleteModal={() => setShowDeleteModal(true)}
            invoices={props.invoices}
            setInvoices={props.setInvoices}
            setInvoice={setInvoice}
          />
        </ControlsMobile>
      ) : null}
    </InvoiceElement>
  );
};

export default Invoice;

const InvoiceElement = styled.main`
  width: 100%;
  height: 100%;
`;

const InvoiceTop = styled.div`
  width: 100%;
  height: 100%;
  padding: 104px 24px 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    padding: 48px 40px 0 40px;
  }
  @media (min-width: 768px) {
    padding-top: 64px;
  }
`;

const ReturnBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 23.66px;
  align-self: flex-start;
  @media (min-width: 1440px) {
    align-self: center;
    margin-right: 625px;
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

const Header = styled.div(
  (props: StyledComponentsProps) => `
  margin-top: 32px;
  width: 100%;
  height: 90px;
  display: flex;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;
  background-color: ${props.dark ? "var(--darkBlue)" : "white"};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  @media (min-width: 768px){
    padding-left: 32px;
    padding-right: 32px;
    width: 700px;
  }
`
);

const StatusSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    justify-content: flex-start;
    column-gap: 16px;
  }
`;

const StatusText = styled(Text)`
  color: var(--Gray);
`;

const Status = styled.div(
  (props: { status: string; dark: boolean }) => `
  width: 104px;
  height: 40px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 8px;
  background-color: ${
    props.status === "paid"
      ? "rgba(51, 214, 159, 0.06)"
      : props.status === "pending"
      ? "rgba(255, 143, 0, 0.06)"
      : props.dark
      ? "rgba(223, 227, 250, 0.06)"
      : "rgba(55, 59, 83, 0.06)"
  };
`
);

const Circle = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`;

const ControlsMobile = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`;

const ControlsDesktop = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`;
