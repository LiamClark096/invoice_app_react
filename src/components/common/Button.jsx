import styled, { css } from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 200px;
  padding: 20px;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  font-size: 12px;
  font-weight: 700;
  font-family: "Spartan";
  min-width: 85px;
  cursor: pointer;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
