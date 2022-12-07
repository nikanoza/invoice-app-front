import { Header } from "components";
import { Invoice, Invoices } from "pages";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <Main>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Routes>
        <Route path="/" element={<Navigate to="/invoices" replace />} />
        <Route path="/invoices" element={<Invoices darkMode={darkMode} />} />
        <Route path="/invoices/:id" element={<Invoice darkMode={darkMode} />} />
      </Routes>
    </Main>
  );
}

export default App;

const Main = styled.div`
  font-size: 2em;
  font-style: normal;
  font-weight: 700;
`;
