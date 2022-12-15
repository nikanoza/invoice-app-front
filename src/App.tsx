import { Header } from "components";
import { Invoice, Invoices } from "pages";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { getInvoices } from "services";
import styled from "styled-components";
import { InvoiceType, StyledComponentsProps } from "types";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getInvoices();
        setInvoices(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);
  return (
    <Main dark={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" replace />} />
        <Route
          path="/invoices"
          element={<Invoices darkMode={darkMode} invoices={invoices} />}
        />
        <Route
          path="/invoices/:id"
          element={<Invoice darkMode={darkMode} invoices={invoices} />}
        />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.div(
  (props: StyledComponentsProps) => `
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
  min-height: 100%;
  background-color: ${props.dark ? "var(--SemiDark)" : "var(--Light)"};
  @media (min-width: 1440px){
    display: flex;
    height: 100%;
  }
`
);
