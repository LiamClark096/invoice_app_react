import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { Button } from "../common/Button";

const Bg = styled.div`
  background-color: ${(props) => props.theme.navBg};
  transition: background-color 0.2s;
  width 100%;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

export default function ViewInvoiceFooter({ invoice }) {
  return (
    <Bg>
      <Container>
        <Link to={`/invoices/edit/${invoice.id}`}>
          <Button bg={"#252945"} color={"#fff"}>
            Edit
          </Button>
        </Link>
        <Button bg={"#EC5757"} color={"#fff"}>
          Delete
        </Button>
        <Button bg={"#7C5DFA"} color={"#fff"}>
          Mark as Paid
        </Button>
      </Container>
    </Bg>
  );
}
