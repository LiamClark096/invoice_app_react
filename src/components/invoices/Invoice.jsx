import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { formatDate, formatMoney } from "../../helpers";
import StatusPill from "../common/StatusPill";

const Container = styled.div`
  background-color: ${(props) => props.theme.invoiceBg};
  border-radius: 8px;
  padding: 25px;
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "id clientName" ". ." "paymentDue statusPill" "totalDue statusPill";
  align-items: center;
  transition: background-color 0.2s;

  @media (min-width: 768px) {
    justify-content: space-between;
    grid-template-columns: 75px 120px 130px minmax(100px, max-content) 105px 5px;
    grid-template-areas: "id paymentDue clientName totalDue statusPill link";
    grid-template-rows: auto;
    align-items: center;
    justify-items: start;
  }
`;

const Id = styled.p`
  color: ${(props) => props.theme.fontPriColor};
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  transition: color 0.2s;

  &::before {
    content: "#";
    color: ${(props) => props.theme.fontSecColor};
    transition: color 0.2s;
  }

  @media (min-width: 768px) {
    grid-column: 1 / 2;
  }
`;

const PaymentDue = styled.p`
  color: ${(props) => props.theme.fontSecColor};
  font-size: 12px;
  font-weight: 500;
  transition: color 0.2s;

  @media (min-width: 768px) {
    justify-self: start;
    margin-bottom: 0;
  }
`;

const ClientName = styled.p`
  color: ${(props) => props.theme.fontSecColor};
  font-size: 12px;
  font-weight: 500;
  transition: color 0.2s;
`;

const Total = styled.p`
  color: ${(props) => props.theme.fontPriColor};
  font-size: 16px;
  font-weight: 700;
  transition: color 0.2s;

  &::before {
    content: "£ ";
  }
`;

const Arrow = styled.svg`
  width: 7px;
  height: 11px;
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
    justify-self: center;
    cursor: pointer;
  }
`;

const Col = styled.div`
  grid-area: ${(props) => props.area};
  justify-self: ${(props) =>
    props.area === "clientName" || props.area === "statusPill"
      ? "end"
      : "start"};

  @media (min-width: 768px) {
    justify-self: ${(props) => (props.area === "totalDue" ? "end" : "start")};
  }
`;

export default function Invoice({ invoice, onInvoiceSelect }) {
  const total = invoice.items
    .reduce((acc, curr) => parseInt(curr.total) + acc, 0)
    .toFixed(2);

  return (
    <Container>
      <Col area={"id"}>
        <Link
          to={`/invoices/${invoice.id}`}
          onClick={() => onInvoiceSelect(invoice)}
        >
          <Id>{invoice.id}</Id>
        </Link>
      </Col>
      <Col area={"paymentDue"}>
        <PaymentDue>Due {formatDate(invoice.paymentDue)}</PaymentDue>
      </Col>
      <Col area={"clientName"}>
        <ClientName>{invoice.clientName}</ClientName>
      </Col>
      <Col area={"totalDue"}>
        <Total>{formatMoney(total)}</Total>
      </Col>
      <Col area={"statusPill"}>
        <StatusPill status={invoice.status} />
      </Col>
      <Col area={"link"}>
        {" "}
        <Link
          to={`/invoices/${invoice.id}`}
          onClick={() => onInvoiceSelect(invoice)}
        >
          <Arrow xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1 1l4 4-4 4"
              stroke="#7C5DFA"
              strokeWidth="2"
              fill="none"
              fillRule="evenodd"
            />
          </Arrow>
        </Link>
      </Col>
    </Container>
  );
}
