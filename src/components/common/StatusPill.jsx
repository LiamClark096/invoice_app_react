import React from "react";
import styled, { css } from "styled-components";

const StatusContainer = styled.div`
  width: 105px;
  height: 40px;
  background-color: ${(props) =>
    props.theme.themeName === "light"
      ? "rgba(55, 59, 83, 0.06)"
      : "rgba(223, 227, 250, 0.06)"};
  padding: 12px;
  padding-top: 14px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;

  ${(props) =>
    props.status === "pending" &&
    css`
      background-color: rgba(255, 143, 0, 0.06);
    `}
  ${(props) =>
    props.status === "paid" &&
    css`
      background-color: rgba(51, 214, 159, 0.06);
    `}
`;

const Status = styled.p`
  color: ${(props) =>
    props.theme.themeName === "light" ? "#373B53" : "#DFE3FA"};
  font-size: 12px;
  font-weight: 700;
  text-transform: capitalize;
  text-align: center;
  transition: color 0.2s;

  ${(props) =>
    props.status === "pending" &&
    css`
      color: #ff8f00;
    `}
  ${(props) =>
    props.status === "paid" &&
    css`
      color: #33d69f;
    `}

  &::before {
    content: "";
    display: inline-block;
    width: 8px;
    height: 8px;
    background-color: ${(props) =>
      props.theme.themeName === "light" ? "#373B53" : "#DFE3FA"};
    border-radius: 20px;
    margin-right: 10px;
    transition: background-color 0.2s;

    ${(props) =>
      props.status === "pending" &&
      css`
        background-color: #ff8f00;
      `}
    ${(props) =>
      props.status === "paid" &&
      css`
        background-color: #33d69f;
      `}
  }
`;

export default function StatusPill({ status }) {
  return (
    <StatusContainer status={status}>
      <Status status={status}>{status}</Status>
    </StatusContainer>
  );
}
