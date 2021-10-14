import styled, { css } from "styled-components";
import { formatDate } from "../../helpers";
import ViewInvoiceItemList from "./ViewInvoiceItemList";

const Container = styled.div`
  display: grid;
  grid-template-areas:
    "id ."
    "senderAddress ."
    "invoiceDate billTo"
    "paymentDue billTo"
    "sentTo ."
    "itemList itemList";
  grid-row-gap: 30px;
  padding: 30px 20px;
  width: min(90%, 730px);
  background-color: ${(props) => props.theme.invoiceBg};
  border-radius: 8px;
  transition: background-color 0.2s;

  @media (min-width: 768px) {
    grid-template-areas:
      "id . . senderAddress"
      "invoiceDate billTo sentTo sentTo"
      "paymentDue billTo . ."
      "itemList itemList itemList itemList";
  }
`;

const Col = styled.div`
  grid-area: ${(props) => props.area};

  @media (min-width: 768px) {
    ${(props) =>
      props.justifyRight &&
      css`
        justify-self: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      `}
  }
`;

const Data = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-transform: capitalize;
  text-align: left;
  color: ${(props) => props.theme.fontSecColor};
  transition: color 0.2s;

  & + & {
    margin-top: 8px;
  }

  ${(props) =>
    props.marginY &&
    css`
      margin-bottom: 12px;
    `}

  ${(props) =>
    props.highlight &&
    css`
      font-size: 15px;
      font-weight: 700;
      color: ${(props) => props.theme.fontPriColor};
    `}

  ${(props) =>
    props.lowercase &&
    css`
      text-transform: lowercase;
    `}

    ${(props) =>
      props.itemId &&
      css`
        color: ${(props) => props.theme.fontPriColor};
        font-weight: bold;
        text-transform: uppercase;
        &::before {
          content: "#";
          color: #7e88c3;
        }
      `}
`;

export default function ViewInvoiceBody({ invoice }) {
  return (
    <Container>
      <Col area={"id"}>
        <Data itemId>{invoice.id}</Data>
        <Data>{invoice.description}</Data>
      </Col>
      <Col area={"senderAddress"} justifyRight>
        <Data>{invoice.senderAddress.street}</Data>
        <Data>{invoice.senderAddress.city}</Data>
        <Data>{invoice.senderAddress.postCode}</Data>
        <Data>{invoice.senderAddress.country}</Data>
      </Col>
      <Col area={"invoiceDate"}>
        <Data>Invoice Date</Data>
        <Data highlight>{formatDate(invoice.createdAt)}</Data>
      </Col>
      <Col area={"paymentDue"}>
        <Data>Payment Due</Data>
        <Data highlight>{formatDate(invoice.paymentDue)}</Data>
      </Col>
      <Col area={"billTo"}>
        <Data>Bill To</Data>
        <Data highlight marginY>
          {invoice.clientName}
        </Data>
        <Data>{invoice.clientAddress.street}</Data>
        <Data>{invoice.clientAddress.city}</Data>
        <Data>{invoice.clientAddress.postCode}</Data>
        <Data>{invoice.clientAddress.country}</Data>
      </Col>
      <Col area={"sentTo"}>
        <Data>Sent to</Data>
        <Data highlight lowercase>
          {invoice.clientEmail}
        </Data>
      </Col>
      <Col area={"itemList"}>
        <ViewInvoiceItemList items={invoice.items} total={invoice.total} />
      </Col>
    </Container>
  );
}
