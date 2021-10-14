import React from 'react';
import styled, { css } from "styled-components";

const FilterRow = styled.div`
  display: flex;
  align-items: flex-end;
`;

const FilterCheckbox = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  background-color: ${props => props.theme.themeName === 'light' ? '#DFE3FA' : '#1E2139'};
  border-radius: 2px;
  margin-right: 12px;
  cursor: pointer;
  transition: background-color .2s;

  &:hover {
    border: 1px solid #7C5DFA;

    ${(props) =>
      props.id === props.active &&
      css`
        border: none;
    `}
  }

  ${(props) =>
    props.id === props.active &&
    css`
      background-color: #7C5DFA;
    `}

  &::after {
    display: none;
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    background-image: url(../assets/icon-check.svg);
    background-position: center;
    background-repeat: no-repeat;

    ${props => props.id === props.active && css`
      display: block;
    `}
  }
`;

const FilterText = styled.p`
  color: ${props => props.theme.themeName === 'light' ? '#1E2139' : '#FFF' };
  font-weight: 400;
  font-size: 12px;
  text-transform: capitalize;
  letter-spacing: 1px;
  user-select: none;
  cursor: pointer;
  transition: color .2s;

  ${(props) =>
    props.id === props.active &&
    css`
      font-weight: 700;
    `}
`;

export default function FilterOption({ id, active, onClick }) {
  return (
    <FilterRow>
      <FilterCheckbox id={id} active={active} onClick={() => onClick(id)} />
      <FilterText id={id} active={active} onClick={() => onClick(id)}>
        {id}
      </FilterText>
    </FilterRow>
  );
}
