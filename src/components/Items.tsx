import styled from "styled-components";
import { Item, StyledComponentsProps } from "types";

const Items: React.FC<{ items: Item[]; darkMode: boolean }> = (props) => {
  return (
    <Main dark={props.darkMode}>
      <ItemsListMobile>
        {props.items.map((item: Item) => (
          <ItemInfo key={item.name}>
            <ItemInfoLeft>
              <Name dark={props.darkMode}>{item.name}</Name>
              <Price dark={props.darkMode}>
                {item.quantity} X £ {item.price}
              </Price>
            </ItemInfoLeft>
            <Name dark={props.darkMode}>£ {item.total}</Name>
          </ItemInfo>
        ))}
      </ItemsListMobile>
      <ItemListDesktop>
        <ListHeader>
          <HeaderTd dark={props.darkMode}>Item Name</HeaderTd>
          <ListRight>
            <HeaderTd dark={props.darkMode}>QTY.</HeaderTd>
            <HeaderTd
              dark={props.darkMode}
              style={{
                marginRight: "15px",
              }}
            >
              Price
            </HeaderTd>
            <HeaderTd dark={props.darkMode}>Total</HeaderTd>
          </ListRight>
        </ListHeader>
        <ListDesktop>
          {props.items.map((item: Item) => (
            <Row key={item.name}>
              <Name dark={props.darkMode}>{item.name}</Name>
              <ListRight>
                <Name
                  dark={props.darkMode}
                  style={{
                    color: props.darkMode ? "var(--lightGray)" : "var(--Sky)",
                  }}
                >
                  {item.quantity}
                </Name>
                <Name
                  dark={props.darkMode}
                  style={{
                    color: props.darkMode ? "var(--lightGray)" : "var(--Sky)",
                    margin: "auto",
                  }}
                >
                  £ {item.price.toFixed(2)}
                </Name>
                <Name dark={props.darkMode}>£ {item.total.toFixed(2)}</Name>
              </ListRight>
            </Row>
          ))}
        </ListDesktop>
      </ItemListDesktop>
    </Main>
  );
};

export default Items;

const Main = styled.main(
  (props: StyledComponentsProps) => `
  margin-top: 40px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-color: ${props.dark ? "#252945" : "#F9FAFE"};
`
);

const ItemsListMobile = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  list-style: none;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ItemInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.p(
  (props: StyledComponentsProps) => `
  font-size: 12px;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: -0.25px;
  text-transform: capitalize;
  color: ${props.dark ? "white" : "var(--Dark)"};
`
);

const Price = styled(Name)(
  (props: StyledComponentsProps) => `
  color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
  margin-top: 8px;
`
);

const ItemInfoLeft = styled.div``;

const ItemListDesktop = styled.div`
  display: none;
  padding: 32px;
  @media (min-width: 768px) {
    display: block;
  }
`;

const ListHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`;

const ListRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 284px;
`;

const HeaderTd = styled.span(
  (props: StyledComponentsProps) => `
  font-size: 11px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.23px;
  text-transform: capitalize;
  color: ${props.dark ? "var(--lightGray)" : "var(--Sky)"};
`
);

const ListDesktop = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 32px;
  list-style: none;
  margin-top: 32px;
`;

const Row = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
