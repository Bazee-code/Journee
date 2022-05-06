import React from "react";
import styled from "styled-components";
import { editTodo, completeTodo, deleteTodo } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";
import { MdDelete } from 'react-icons/md'

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
  // display: flex;
  // box-sizing: border-box;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row
`;

const ItemInput = styled.input`
  height :28px;
  width : 70%;
`;

const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  margin-top : 10px;
`;

const ItemListText = styled.p`
    text-align : center;
    font-size : 16px;
    color : grey;
`
const ItemDeleteButton = styled.button`
  margin-left : 2px;
  cursor: pointer;
  border : none;
  height : 28px;
  background: none;
  // margin-top : 10px;
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
                <ItemCheckbox onClick={()=>dispatch(completeTodo(item.id))} />
                <ItemInput
                  type="text"
                  value={item.text}
                  onChange={(e) => dispatch(editTodo(item.id, e.target.value))}
                />
                <ItemDeleteButton onClick={()=>dispatch(deleteTodo(item.id))}>
                  <MdDelete size={25} color={"red"} />
                </ItemDeleteButton>
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
