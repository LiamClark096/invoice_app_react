import React from "react";
import styled, { css } from "styled-components";

const InputGroup = styled.div`
  width: 100%;
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  display: ${(props) => (props.label ? "block" : "none")};
  color: ${(props) => props.theme.fontSecColor};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const Input = styled.input`
  width: 100%;
  height: 48px;
  font-family: "Spartan";
  background-color: ${(props) =>
    props.theme.themeName === "light" ? "#fff" : "#1E2139"};
  border-radius: 4px;
  border: 1px solid
    ${(props) => (props.theme.themeName === "light" ? "#DFE3FA" : "#252945")};
  padding: 10px 15px;
  color: ${(props) => (props.theme.themeName === "light" ? "#0C0E16" : "#fff")};
  font-weight: 700;
  font-size: 12px;

  &:focus {
    outline: none;
    border: 1px solid #7c5dfa;
  }

  ${(props) =>
    props.noBg &&
    css`
      background-color: transparent;
      border: none;
      padding-left: 0;
      color: #888eb0;
    `}
`;

export default function FormInput({
  name,
  label,
  value,
  area,
  type,
  onChange,
  noBg
}) {
  return (
    <InputGroup gridArea={area}>
      <Label htmlFor={name} label={label || null}>
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e, name)}
        noBg={noBg || null}
        min={1}
        max={1000000}
      ></Input>
    </InputGroup>
  );
}
