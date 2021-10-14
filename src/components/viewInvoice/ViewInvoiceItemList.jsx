import React from "react";
import styled from "styled-components";
import ViewInvoiceItem from "./ViewInvoiceItem";
import { formatMoney } from "../../helpers";

const Container = styled.div`
  grid-column: 1 / 6;
`;

const InvoiceListHeader = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.fontSecColor};
  display: none;
  grid-template-columns: 2fr repeat(3, 1fr);
  justify-items: end;

  @media (min-width: 768px) {
    display: grid;
  }
`;

const InvoiceItemList = styled.div`
  background-color: ${(props) =>
    props.theme.themeName === "dark" ? "#252945" : "#F9FAFE"};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 30px 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  transition: background-color 0.2s;
`;

const InvoiceTotalContainer = styled.div`
  background-color: ${(props) =>
    props.theme.themeName === "dark" ? "#0C0E16" : "#373B53"};
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  transition: background-color 0.2s;
`;

const InvoiceTotalTitle = styled.p`
  color: #fff;
  font-weight: 500;
  font-size: 12px;
`;

const InvoiceTotalAmount = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #fff;
`;

export default function ViewInvoiceItemList({ items, total }) {
  return (
    <Container>
      <InvoiceItemList>
        <InvoiceListHeader>
          <p style={{ justifySelf: "start" }}>Item Name</p>
          <p>QTY.</p>
          <p>Price</p>
          <p>Total</p>
        </InvoiceListHeader>
        {items.map((item, idx) => (
          <ViewInvoiceItem key={idx} item={item} />
        ))}
      </InvoiceItemList>
      <InvoiceTotalContainer>
        <InvoiceTotalTitle>Amount Due</InvoiceTotalTitle>
        <InvoiceTotalAmount>£ {total}</InvoiceTotalAmount>
      </InvoiceTotalContainer>
    </Container>
  );
}
