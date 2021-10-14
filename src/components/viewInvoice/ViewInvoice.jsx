import React from "react";
import styled from "styled-components";
import SubNav from '../common/SubNav';
import ViewInvoiceHeader from "./ViewInvoiceHeader";
import ViewInvoiceBody from "./ViewInvoiceBody";
import ViewInvoiceFooter from "./ViewInvoiceFooter";


const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-row-gap: 20px;
  justify-items: center;
  margin-top: 100px;
`;

export default function ViewInvoice({ invoice, deviceWidth }) {
  
  return (
    <Container>
      <SubNav linkTo={'/invoices'} label={"Go back"} />
      <ViewInvoiceHeader invoice={invoice} deviceWidth={deviceWidth} />
      <ViewInvoiceBody invoice={invoice} />
      {deviceWidth < 768 ? <ViewInvoiceFooter invoice={invoice} /> : null}
    </Container>
  );
}
