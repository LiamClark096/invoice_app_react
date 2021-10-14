import React from "react";
import styled from "styled-components";
import Item from "../common/Item";
import { Button } from "../common/Button";

const StyledDiv = styled.div`
  grid-area: ${(props) => props.area};
  display: grid;
  grid-row-gap: 20px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #777f98;
  margin-bottom: 0;
`;

export default function ItemList({ items, onItemListChange, area }) {
  function handleItemsChange(item, idx) {
    const newItems = [...items];
    newItems[idx] = item;
    newItems[idx].total = newItems[idx].quantity * newItems[idx].price;
    onItemListChange(newItems);
  }

  return (
    <StyledDiv area={area}>
      <Title>Item List</Title>
      {items.map((item, idx) => (
        <Item
          key={idx}
          item={item}
          onItemsChange={handleItemsChange}
          idx={idx}
        />
      ))}
      <Button bg={"#252945"} color={"#888EB0"} fullWidth>
        Add New Item
      </Button>
    </StyledDiv>
  );
}
