import styled from "styled-components";
import FilterOption from "./FilterOption";

const StyledFilterBox = styled.div`
  width: 192px;
  height: 128px;
  background-color: ${props => props.theme.themeName === 'light' ? '#FFF' : '#252945'};
  border-radius: 8px;
  box-shadow: 0px 10px 20px 0px ${props => props.theme.themeName === 'light' ? 'rgba(72,84,159,0.25)' : 'rgba(0,0,0,0.25)'} ;
  position: absolute;
  top: 100%;
  right: 0;
  transform: translate(35%, 5%);
  padding: 20px;
  display: ${props => props.visible ? 'grid' : 'none'};
  grid-row-gap: 20px;
  flex-direction: column;
  align-content: flex-start;
  transition: background-color .2s;
`;

export default function FilterBox({ visible, filterOptions, activeFilter, onFilterSelect }) {
  return (
    <StyledFilterBox visible={visible}>
      {filterOptions.map((option) => {
        return (
          <FilterOption
            key={option}
            id={option}
            active={activeFilter}
            onClick={onFilterSelect}
          />
        );
      })}
    </StyledFilterBox>
  );
}
