import styled from "styled-components";
import { InvoiceType, StyledComponentsProps } from "types";

const InvoiceBox: React.FC<{ darkMode: boolean; invoice: InvoiceType }> = (
  props
) => {
  const dueDate = new Date(props.invoice.paymentDue);
  const [dueWeekday, dueMonth, dueDay, dueYear] = dueDate
    .toDateString()
    .split(" ");
  const dateStr = `Due ${dueDay} ${dueMonth} ${dueYear}`;

  return (
    <Invoice dark={props.darkMode}>
      <Header>
        <Id dark={props.darkMode}>
          <span style={{ color: "var(--Sky)" }}>#</span>
          {props.invoice.id}
        </Id>
        <Name dark={props.darkMode}>{props.invoice.clientName}</Name>
      </Header>
      <PriceInfo>
        <PriceBox>
          <DateBox dark={props.darkMode}>{dateStr}</DateBox>
          <Price dark={props.darkMode}>£{props.invoice.total}</Price>
        </PriceBox>
        <Status status={props.invoice.status} dark={props.darkMode}>
          <Circle
            style={{
              backgroundColor:
                props.invoice.status === "paid"
                  ? "rgb(51, 214, 159)"
                  : props.invoice.status === "pending"
                  ? "rgba(255, 143, 0, 1)"
                  : props.darkMode
                  ? "rgba(223, 227, 250, 1)"
                  : "rgba(55, 59, 83, 1)",
            }}
          />
          <StatusText
            style={{
              color:
                props.invoice.status === "paid"
                  ? "rgb(51, 214, 159)"
                  : props.invoice.status === "pending"
                  ? "rgba(255, 143, 0, 1)"
                  : props.darkMode
                  ? "rgba(223, 227, 250, 1)"
                  : "rgba(55, 59, 83, 1)",
            }}
          >
            {props.invoice.status}
          </StatusText>
        </Status>
      </PriceInfo>
    </Invoice>
  );
};

export default InvoiceBox;

const Invoice = styled.div(
  (props: StyledComponentsProps) => `
  width: 100%;
  padding: 24px;
  border-radius: 8px;
  background-color: ${props.dark ? "var(--darkBlue)" : "white"};
  box-shadow: ${
    props.dark
      ? "0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
      : "0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
  };
`
);

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Id = styled.h2(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props.dark ? "white" : "var(--Dark)"};
`
);

const Name = styled.h3(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props.dark ? "white" : "#858BB2"};
`
);

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`;

const PriceBox = styled.div``;

const DateBox = styled.h3(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props.dark ? "var(--lightGray)" : "var(--Gray)"};
`
);

const Price = styled.span(
  (props: StyledComponentsProps) => `
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.8px;
  color: ${props.dark ? "white" : "var(--Dark)"};
`
);

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

const StatusText = styled.h3`
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-transform: capitalize;
`;
