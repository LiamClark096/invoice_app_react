import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import FormInput from "../common/FormInput";
import SelectInput from "../common/SelectInput";
import DatePicker from "../common/DatePicker";
import ItemList from "../common/ItemList";
import { Button } from "../common/Button";
import _ from "lodash";
import CreateItemList from "./CreateItemList";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const EditFormHeader = styled.div`
  width: min(90%, 730px);
  display: flex;
  align-items: flex-start;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${(props) => props.theme.fontPriColor};
`;

const FormContainer = styled.div`
  width: min(90%, 730px);
  display: flex;
  align-items: flex-start;
  margin-top: 15px;
`;

const FieldSet = styled.fieldset`
  width: 100%;

  & + & {
    margin-top: 20px;
  }
`;

const Legend = styled.legend`
  grid-area: ${(props) => props.area};
  font-weight: 700;
  font-size: 12px;
  color: #7c5dfa;
`;

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  grid-template-areas:
    "legend legend"
    "street street"
    "city postCode"
    "country country";

  ${(props) =>
    props.grid === "billTo" &&
    css`
      grid-template-areas:
        "legend legend"
        "clientName clientName"
        "clientEmail clientEmail"
        "street street"
        "city postCode"
        "country country"
        "invoiceDate invoiceDate"
        "payment payment"
        "desc desc"
        "itemList itemList";
    `}

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "legend legend legend"
      "street street street"
      "city postCode country";

    ${(props) =>
      props.grid === "billTo" &&
      css`
        grid-template-columns: repeat(6, 1fr);
        grid-template-areas:
          "legend legend legend legend legend legend"
          "clientName clientName clientName clientName clientName clientName"
          "clientEmail clientEmail clientEmail clientEmail clientEmail clientEmail"
          "street street street street street street"
          "city city postCode postCode country country"
          "invoiceDate invoiceDate invoiceDate payment payment payment"
          "desc desc desc desc desc desc"
          "itemList itemList itemList itemList itemList itemList";
      `}
  }
`;

const ButtonsContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #1e2139;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
`;

function handleSubmit(e) {
  e.preventDefault();
}

export default function CreateInvoice() {
  const [invoice, setInvoice] = useState({});
  const [itemList, setItemList] = useState([]);

  function handleChange(e, property) {
    // const newInvoice = _.cloneDeep(invoice);
    // _.set(newInvoice, property, e.currentTarget.value);
    console.log('property :', property);
    console.log('e.currentTarget.value :', e.currentTarget.value);
    // setInvoice(newInvoice);
  }

  function handleItemListChange(itemList) {
  console.log('itemList :', itemList);
    // const newInvoice = { ...invoice };
    // newInvoice.items = itemList;
    // newInvoice.total = itemList.reduce(
    //   (acc, curr) => parseInt(curr.total) + acc,
    //   0
    // );
    // setInvoice(newInvoice);
  }

  function handleSave(invoice) {
  console.log('invoice :', invoice);
    // onSave(invoice);
    // history.replace(`/invoices/${invoice.id}`);
  }

  return (
    <Container>
      <EditFormHeader>
        <Title>
          Számla létrehozása
        </Title>
      </EditFormHeader>
      <FormContainer>
        <form onSubmit={() => handleSubmit()}>
          <FieldSet>
            <StyledDiv>
              <Legend area={"legend"}>Számla adatok</Legend>
              <FormInput
                area={"street"}
                type={"text"}
                name="senderAddress.street"
                label={"Street Address"}
                onChange={handleChange}
              />
              <FormInput
                area={"city"}
                type={"text"}
                name="senderAddress.city"
                label={"City"}
                onChange={handleChange}
              />
              <FormInput
                area={"postCode"}
                type={"text"}
                name="senderAddress.postCode"
                label={"Post Code"}
                onChange={handleChange}
              />
              <FormInput
                area={"country"}
                type={"text"}
                name="senderAddress.country"
                label={"Country"}
                onChange={handleChange}
              />
            </StyledDiv>
          </FieldSet>
          <FieldSet>
            <StyledDiv grid={"billTo"}>
              <Legend area={"legend"}>Ügyfél</Legend>
              <FormInput
                area={"clientName"}
                type={"text"}
                name="clientName"
                label={"Client's Name"}
                onChange={handleChange}
              />
              <FormInput
                area={"clientEmail"}
                type={"email"}
                name="clientEmail"
                label={"Client's Email"}
                onChange={handleChange}
              />
              <FormInput
                area={"street"}
                type={"text"}
                name="clientAddress.street"
                label={"Street Address"}
                onChange={handleChange}
              />
              <FormInput
                area={"city"}
                type={"text"}
                name="clientAddress.city"
                label={"City"}
                onChange={handleChange}
              />
              <FormInput
                area={"postCode"}
                type={"text"}
                name="clientAddress.postCode"
                label={"Post Code"}
                onChange={handleChange}
              />
              <FormInput
                area={"country"}
                type={"text"}
                name="clientAddress.country"
                label={"Country"}
                value="Magyarország"
                onChange={handleChange}
              />
              <DatePicker area={"invoiceDate"} />
              <SelectInput
                area={"payment"}
                name="paymentTerms"
                label={"Fizetési határidő"}
                values={["3 nap", "5 nap", "14 nap"]}
                onChange={handleChange}
              />
              <FormInput
                area={"desc"}
                type={"text"}
                name="description"
                label={"Projekt leírása"}
                onChange={handleChange}
              />
              <CreateItemList
                area={"itemList"}
                items={itemList}
                onItemListChange={handleItemListChange}
              />
            </StyledDiv>
          </FieldSet>
        </form>
      </FormContainer>
      <ButtonsContainer>
        <Link to={`/invoices`}>
          <Button bg={"#252945"} color={"#FFF"}>
            Mégsem
          </Button>
        </Link>
        <Button
          bg={"#7C5DFA"}
          color={"#FFF"}
          onClick={() => handleSave(invoice)}
        >
          Mentés
        </Button>
      </ButtonsContainer>
    </Container>
  );
}
