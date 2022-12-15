import styled from "styled-components";
import { Item, StyledComponentsProps } from "types";

const Items: React.FC<{ items: Item[]; darkMode: boolean }> = (props) => {
  return (
    <Main dark={props.darkMode}>
      <ItemsList>
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
      </ItemsList>
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

const ItemsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  padding: 24px;
  list-style: none;
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
