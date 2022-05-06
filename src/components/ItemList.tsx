import React from "react";
import styled from "styled-components";
import { editTodo } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";

const ItemListContainer = styled.div`
  width : 30%;
  background-color : yellow;
  border-radius : 3%;
`
const Title = styled.p`
    color : #000;
    text-align : center;
    font-size : 18px;
    font-weight : 800;
`
const List = styled.ul`
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // box-sizing: border-box;
`;

const Item = styled.li`
  // width: 100%;
  // margin: 4px 0;
  // display: flex;
  // flex-direction: row;
`;

const ItemInput = styled.input`
  height :28px;
  width : 70%;
`;

const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})``;

const ItemListText = styled.p`
    text-align : center;
    font-size : 16px;
    color : grey;
`

const ItemList: React.FC = () => {
  const items = useAppSelector((s) => s.todos.items);
  const dispatch = useAppDispatch();

  return (
    <ItemListContainer>
    <Title>Your Tasks</Title>
    <List>
      {
        items.length === 0 ? <ItemListText>You currently have no tasks</ItemListText> : (
          items.map((item) => {
            if (item.done === false){
              return (
                <Item key={item.id}>
                <ItemCheckbox  />
                <ItemInput
                type="text"
                value={item.text}
                onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
              />
            </Item>
              )
            }
          })
        )
      }
    </List>
    </ItemListContainer>
  );
};

export default ItemList;
