import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import FilterBox from './FilterBox';

const Container = styled.div`
  display: flex;
  width: min(90%, 730px);
  margin-bottom: 30px;
  align-items: center;
`

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: auto;
`

const Title = styled.h1`
  color: ${props => props.theme.fontPriColor};
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.63px;
  margin-bottom: 5px;
  transition: color .2s;

  @media(min-width: 768px) {
    font-size: 32px;
  }
`

const SubTitle = styled.p`
  color: ${props => props.theme.fontSecColor};
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.25px;
  line-height: 15px;
  transition: color .2s;
`

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  position: relative;
`

const Filter = styled.p`
  color: ${props => props.theme.fontPriColor};
  font-size: 12px;
  font-weight: 700;
  margin-right: 10px;
  transition: color .2s;
  user-select: none;
  cursor: pointer;
`

const FilterIcon = styled.svg`
  width: 11px;
  height: 7px;
  cursor: pointer;
`

const ButtonContainer = styled.div`
  background-color: #7C5DFA;
  border-radius: 100px;
  display: flex;
  align-items: center;
  padding: ${props => props.width < 768 ? '5px' : '8px'};
  cursor: pointer;

  &:hover {
    background-color: #9277FF;
  }
`

const AddIconContainer = styled.div`
  background-color: #FFF;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`

const AddIcon = styled.svg`
  width: 11px;
  height: 11px;
`

const New = styled.p`
  color: #FFF;
  font-size: 12px;
  font-weight: 700;
  margin-right: 5px;

  ${props => props.width >= 768 && css`
    margin-left: 6px;
  `}
`


export default function InvoiceHeader({ count }) {

  const [filterBox, setFilterBox] = useState(false);
  const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
  const filterOptions = ["draft", "pending", "paid"];
  const [activeFilter, setActiveFilter] = useState("");

  function handleFilterBox() {
    filterBox ? setFilterBox(false) : setFilterBox(true);
  }

  function handleResize(e) {
    setDeviceWidth(window.innerWidth);
  }

  function handleFilterSelect(id) {
    return id === activeFilter ? setActiveFilter("") : setActiveFilter(id);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <Container>
      <TitleContainer>
        <Title>Invoices</Title>
        <SubTitle>{deviceWidth < 768 ? `${count} invoices` : `There are ${count} total invoices`}</SubTitle>
      </TitleContainer>
      <FilterContainer>
        <Filter onClick={() => handleFilterBox()}>{deviceWidth >= 768 && activeFilter !== '' ? `Filter by ${activeFilter}` : 'Filter'}</Filter>
        <FilterIcon 
          onClick={() => handleFilterBox()}
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1l4.228 4.228L9.456 1" stroke="#7C5DFA" strokeWidth="2" fill="none" fillRule="evenodd"/>
        </FilterIcon>
        <FilterBox 
          visible={filterBox}
          activeFilter={activeFilter}
          filterOptions={filterOptions}
          onFilterSelect={handleFilterSelect}
        />
      </FilterContainer>
      <ButtonContainer width={deviceWidth}>
        <AddIconContainer>
          <AddIcon>
            <path d="M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z" fill="#7C5DFA" fillRule="nonzero"/>
          </AddIcon>
        </AddIconContainer>
        <New width={deviceWidth}>{deviceWidth < 768 ? 'New' : 'New Invoice'}</New>
      </ButtonContainer>
    </Container>
  )
}
