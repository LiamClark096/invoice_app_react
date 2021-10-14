import React from "react";
import styled from "styled-components";

const InputGroup = styled.div`
  width: 100%;
  grid-area: ${(props) => props.gridArea};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Label = styled.label`
  color: ${(props) => props.theme.fontSecColor};
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const Select = styled.select`
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
`;

const Option = styled.option`
  font-size: 12px;
  font-weight: 500;
`;

export default function SelectInput({ name, label, values, area, onChange }) {
  return (
    <InputGroup gridArea={area}>
      <Label htmlFor={name}>{label}</Label>
      <Select id={name} name={name}>
        {values.map((value) => (
          <Option key={value} value={value} onChange={() => onChange()}>
            {value}
          </Option>
        ))}
      </Select>
    </InputGroup>
  );
}
