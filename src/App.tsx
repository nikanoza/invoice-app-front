import { Header } from "components";
import { Invoice, Invoices } from "pages";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { InvoiceType, StyledComponentsProps } from "types";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [invoices, setInvoices] = useState<InvoiceType[]>([]);

  return (
    <Main dark={darkMode}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" replace />} />
        <Route
          path="/invoices"
          element={<Invoices darkMode={darkMode} invoices={invoices} />}
        />
        <Route path="/invoices/:id" element={<Invoice darkMode={darkMode} />} />
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
  height: 100%;
  background-color: ${props.dark ? "var(--SemiDark)" : "var(--Light)"};
`
);
