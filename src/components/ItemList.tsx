import React from "react";
import { editTodo, completeTodo, deleteTodo } from "../todo/todoAC";
import { useAppDispatch, useAppSelector } from "../types";
import { MdDelete } from 'react-icons/md'
import { ItemListContainer, Title, ItemListText, 
        Item, ItemCheckbox, ItemInput, ItemDeleteButton } from "../styles/item-list-styles";

const ItemList: React.FC = () => {
  const items = useAppSelector((s) => s.todos.items);
  const dispatch = useAppDispatch();

  return (
    <ItemListContainer>
    <Title>Your Tasks</Title>
    <ul>
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
    </ul>
    </ItemListContainer>
  );
};

export default ItemList;
