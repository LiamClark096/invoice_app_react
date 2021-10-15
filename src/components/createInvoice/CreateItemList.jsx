import React, { useEffect, useState } from "react";
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

export default function CreateItemList({ onItemListChange, area }) {
  const [items, setItems] = useState([]);

  function handleItemsChange(item, idx) {
    const newItems = [...items];
    newItems[idx] = item;
    newItems[idx].total = newItems[idx].quantity * newItems[idx].price;
    onItemListChange(newItems);
  }
  const addItem = () => {
    const newItem = {
      name: "",
      quantity: 1,
      price: 1,
      total: 1,
    };
    setItems((prev) => [...prev, newItem]);
  };
  return (
    <StyledDiv area={area}>
      <Title>Tételek</Title>
      {items.map((item, idx) => (
        <Item
          key={idx}
          item={item}
          onItemsChange={handleItemsChange}
          idx={idx}
        />
      ))}
      <Button
        bg={"#252945"}
        color={"#888EB0"}
        onClick={() => addItem()}
        fullWidth
      >
        Új tétel
      </Button>
    </StyledDiv>
  );
}
