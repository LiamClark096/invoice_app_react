import React from "react";
import styled from "styled-components";
import { formatMoney } from "../../helpers";

const Container = styled.div`
  display: grid;
  grid-area: repeat(2, auto);
  grid-row-gap: 10px;
  align-items: center;

  @media (min-width: 768px) {
    grid-template-columns: 2fr repeat(3, 1fr);
    grid-template-rows: auto;
  }
`;
const ItemName = styled.p`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  color: ${(props) => props.theme.fontPriColor};
  font-weight: 700;
  font-size: 12px;
  transition: color 0.2s;
`;
const ItemQuantity = styled.p`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  color: ${(props) =>
    props.theme.themeName === "dark" ? "#888EB0" : "#7E88C3"};
  font-size: 12px;
  font-weight: 700;
  transition: color 0.2s;

  &::after {
    content: "x";
  }

  @media (min-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;

    &::after {
      content: "";
    }
  }
`;
const ItemPrice = styled.p`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  color: ${(props) =>
    props.theme.themeName === "dark" ? "#888EB0" : "#7E88C3"};
  font-size: 12px;
  font-weight: 700;
  transition: color 0.2s;
  margin-left: 20px;

  @media (min-width: 768px) {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: end;
  }
`;
const ItemTotal = styled.p`
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  justify-self: end;
  color: ${(props) => props.theme.fontPriColor};
  font-weight: 700;
  font-size: 12px;
  transition: color 0.2s;

  @media (min-width: 768px) {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
  }
`;

export default function ViewInvoiceItem({ item }) {
  const { name, price, quantity, total } = item;
  return (
    <Container>
      <ItemName>{name}</ItemName>
      <ItemQuantity>{quantity}</ItemQuantity>
      <ItemPrice>£ {price}</ItemPrice>
      <ItemTotal>£ {total}</ItemTotal>
    </Container>
  );
}
