import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: min(90%, 730px);
  display: flex;
  margin-bottom: 10px;
`;

const Arrow = styled.svg`
  width: 7px;
  height: 11px;
  margin-right: 16px;
  cursor: pointer;
`;

const ArrowText = styled.p`
  color: ${(props) => props.theme.fontPriColor};
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  text-decoration: none;
  transition: color 0.2s;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: flex-start;
  text-decoration: none;
`;

export default function ViewInvoiceNav() {
  return (
    <Container>
      <StyledLink to={"/invoices"}>
        <Arrow xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.342.886L2.114 5.114l4.228 4.228"
            stroke="#9277FF"
            strokeWidth="2"
            fill="none"
            fillRule="evenodd"
          />
        </Arrow>
        <ArrowText>Go back</ArrowText>
      </StyledLink>
    </Container>
  );
}
