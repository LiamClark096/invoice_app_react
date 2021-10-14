import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-colums: 1fr;
  grid-row-gap: 15px;
  width: min(90%, 730px);
`

export default function InvoiceList({ children }) {
  return (
    <Container>
      {children}
    </Container>
  )
}
