import { dateTransformer } from "helpers";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ArrowRight } from "svg";
import { InvoiceType, StyledComponentsProps } from "types";

const InvoiceBox: React.FC<{ darkMode: boolean; invoice: InvoiceType }> = (
  props
) => {
  const dateStr = `Due ${dateTransformer(props.invoice.paymentDue)}`;

  const navigate = useNavigate();

  const viewInvoice = () => {
    navigate("/invoices/" + props.invoice.id);
  };

  return (
    <Invoice dark={props.darkMode} onClick={viewInvoice}>
      <Header>
        <Id dark={props.darkMode}>
          <span style={{ color: "var(--Sky)" }}>#</span>
          {props.invoice.id}
        </Id>
        <NameMobile dark={props.darkMode}>
          {props.invoice.clientName}
        </NameMobile>
      </Header>
      <PriceInfo>
        <PriceBox>
          <DateBox dark={props.darkMode}>{dateStr}</DateBox>
          <NameDesktop>{props.invoice.clientName}</NameDesktop>
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
      <Arrow>
        <ArrowRight />
      </Arrow>
    </Invoice>
  );
};

export default InvoiceBox;

const Invoice = styled.div(
  (props: StyledComponentsProps) => `
  width: 327px;
  padding: 24px;
  border-radius: 8px;
  background-color: ${props.dark ? "var(--darkBlue)" : "white"};
  border: 1px solid transparent;
  cursor: pointer;
  box-shadow: ${
    props.dark
      ? "0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
      : "0px 10px 10px -10px rgba(72, 84, 159, 0.100397);"
  };
  &:hover{
    border: 1px solid var(--Violet);
  }
  @media (min-width: 768px){
    display: flex;
    align-items: center;
    padding: 16px 24px;
    width: 100%;
  }
  @media (min-width: 768px){
    width: 800px;
  }
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

const NameMobile = styled.h3(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: -0.25px;
  color: ${props.dark ? "white" : "#858BB2"};
  @media (min-width: 768px){
    display: none;
  }
`
);

const NameDesktop = styled(NameMobile)`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-left: 37px;
  }
  @media (min-width: 1440px) {
    display: block;
    margin-left: 100px;
  }
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  @media (min-width: 768px) {
    justify-content: flex-start;
    margin-top: 0;
    margin-left: 27px;
  }
  @media (min-width: 1440px) {
    margin-left: auto;
  } ;
`;

const PriceBox = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    width: 369px;
  }
  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    width: 403px;
  }
`;

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
  @media (min-width: 768px){
    margin-left: auto;
  };
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
  @media (min-width: 768px){
    margin-left: 40px   
  }
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

const Arrow = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-left: 20px;
  }
`;
