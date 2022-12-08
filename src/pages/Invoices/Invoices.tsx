import { FilterSelect } from "components";
import { useState } from "react";
import styled from "styled-components";
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
      </Controls>
    </Wrapper>
  );
};

export default Invoices;

const Wrapper = styled.div`
  width: 100%;
  padding: 32px 24px 105px 24px;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2(
  (props: StyledComponentsProps) => `
  font-size: 20px;
  font-weight: 700;
  line-height: 22.4px;
  letter-spacing: -0.63px;
  color: ${props.dark ? "white" : "var(--Dark)"}
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
