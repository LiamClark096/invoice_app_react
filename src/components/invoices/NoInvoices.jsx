import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Img = styled.img`
  width: 200px;

  @media(min-width: 768px) {
    width: 340px;
  }
`

const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.themeName === 'light' ? '#0C0E16' : '#FFF'};
  transition: color .2s;
  margin-top: 20px;
`

const Paragraph = styled.p`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 20px;
  max-width: 230px;
  color: ${props => props.theme.themeName === 'light' ? '#888EB0' : '#DFE3FA'};
  transition: color .2s;
  margin-top: 20px;
`

export default function NoInvoices() {
  return (
    <Container>
      <Img src="../assets/illustration-empty.svg" />
      <Title>There is nothing here</Title>
      <Paragraph>Create an invoice by clicking the
      New button and get started</Paragraph>
    </Container>
  )
}
