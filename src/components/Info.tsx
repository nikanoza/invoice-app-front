import { dateTransformer } from "helpers";
import styled from "styled-components";
import { InvoiceType, StyledComponentsProps } from "types";
import Items from "./Items";

type PropsType = {
  darkMode: boolean;
  invoice: InvoiceType;
};

const Info: React.FC<PropsType> = (props) => {
  return (
    <InfoSection dark={props.darkMode}>
      <InfoHeader>
        <InfoHeaderLeft>
          <Id dark={props.darkMode}>
            <span style={{ color: "var(--Sky)" }}>#</span>
            {props.invoice.id}
          </Id>
          <Description dark={props.darkMode}>
            {props.invoice.description}
          </Description>
        </InfoHeaderLeft>
        <InfoHeaderRight dark={props.darkMode}>
          <AddressInfo>{props.invoice.senderAddress.street}</AddressInfo>
          <AddressInfo>{props.invoice.senderAddress.city}</AddressInfo>
          <AddressInfo>{props.invoice.senderAddress.postCode}</AddressInfo>
          <AddressInfo>{props.invoice.senderAddress.country}</AddressInfo>
        </InfoHeaderRight>
      </InfoHeader>
      <ClientInfo>
        <ClientInfoLeft>
          <DateInfo>
            <Description dark={props.darkMode}>Invoice Date</Description>
            <Text dark={props.darkMode}>
              {dateTransformer(props.invoice.createdAt)}
            </Text>
            <Description dark={props.darkMode} style={{ marginTop: "32px" }}>
              Payment Due
            </Description>
            <Text dark={props.darkMode}>
              {dateTransformer(props.invoice.paymentDue)}
            </Text>
          </DateInfo>
          <Client>
            <Description dark={props.darkMode}>bill to</Description>
            <Text dark={props.darkMode}>{props.invoice.clientName}</Text>
            <InfoHeaderRight
              dark={props.darkMode}
              style={{ marginTop: "8px", textAlign: "left" }}
            >
              <AddressInfo>{props.invoice.clientAddress.street}</AddressInfo>
              <AddressInfo>{props.invoice.clientAddress.city}</AddressInfo>
              <AddressInfo>{props.invoice.clientAddress.postCode}</AddressInfo>
              <AddressInfo>{props.invoice.clientAddress.country}</AddressInfo>
            </InfoHeaderRight>
          </Client>
        </ClientInfoLeft>
        <ClientInfoRight>
          <Description dark={props.darkMode}>sent to</Description>
          <Text dark={props.darkMode}>{props.invoice.clientEmail}</Text>
        </ClientInfoRight>
      </ClientInfo>
      <Items items={props.invoice.items} darkMode={props.darkMode} />
      <GrandTotal dark={props.darkMode}>
        <GrandTotalText>Amount Due</GrandTotalText>
        <Total>£ {props.invoice.total.toFixed(2)}</Total>
      </GrandTotal>
    </InfoSection>
  );
};

export default Info;

const InfoSection = styled.section(
  (props: StyledComponentsProps) => `
  width: 100%;
  padding: 24px;
  margin-top: 16px;
  background-color: ${props.dark ? "var(--darkBlue)" : "white"};
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.100397);
  @media (min-width: 768px){
    width: 700px;
  }
`
);
const Id = styled.h2(
  (props: StyledComponentsProps) => `
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    letter-spacing: -0.25px;
    color: ${props.dark ? "white" : "var(--Dark)"};
    @media (min-width: 768px){
      font-size: 16px;
      line-height: 24px;
      letter-spacing: -0.8px;
    }
  `
);

const Description = styled(Id)(
  (props: StyledComponentsProps) => `
    color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
    line-height: 20px;
    letter-spacing: -0.31px;
    text-transform: capitalize;
`
);

const InfoHeader = styled.div`
  @media (min-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const InfoHeaderLeft = styled.div``;

const InfoHeaderRight = styled.div(
  (props: StyledComponentsProps) => `
  margin-top: 30px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.23px;
  color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
  @media (min-width: 768px){
    text-align: right;
  }
`
);

const AddressInfo = styled.h3`
  font-size: 11px;
`;

const ClientInfo = styled.div`
  margin-top: 32px;
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    column-gap: 110px;
  }
`;

const ClientInfoLeft = styled.div`
  display: flex;
  align-items: center;
  column-gap: 41px;
  @media (min-width: 768px) {
    column-gap: 98px;
  }
`;

const ClientInfoRight = styled.div`
  margin-top: 32px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const DateInfo = styled.div``;
const Client = styled.div``;

const Text = styled.p(
  (props: StyledComponentsProps) => `
  font-weight: 700;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: -0.31px;
  color: ${props.dark ? "white" : "var(--Dark)"};
  margin-top: 12px;
  text-transform: capitalize;
`
);

const GrandTotal = styled.div(
  (props: StyledComponentsProps) => `
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 62px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    background-color: ${props.dark ? "var(--Dark)" : "#373B53"};
    @media (min-width: 768px){
      justify-content: space-between;
      padding: 0 32px;
    }
  `
);

const GrandTotalText = styled.span`
  font-weight: 500;
  font-size: 11px;
  line-height: 18px;
  letter-spacing: -0.23px;
  color: white;
  text-transform: capitalize;
`;

const Total = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: -0.42px;
  color: white;
  @media (min-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.5px;
  }
`;
