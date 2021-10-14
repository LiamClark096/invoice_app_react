import React from "react";
import styled from "styled-components";
import InvoiceHeader from "./InvoiceHeader";
import InvoiceList from "./InvoiceList";
import Invoice from "./Invoice";
import NoInvoices from "./NoInvoices";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 60px;
`;

export default function Invoices({ invoices, handleInvoiceSelect }) {
  return (
    <Container>
      <InvoiceHeader count={invoices.length} />
      {invoices.length === 0 ? (
        <NoInvoices />
      ) : (
        <InvoiceList>
          {invoices.map((invoice) => (
            <Invoice
              key={invoice.id}
              invoice={invoice}
              onInvoiceSelect={handleInvoiceSelect}
            />
          ))}
        </InvoiceList>
      )}
    </Container>
  );
}
