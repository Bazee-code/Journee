import { getNewId } from "../utils";
import { ITEM_ADD, ITEM_EDIT, TodoAction, ITEM_COMPLETE, ITEM_REMOVE } from "./todoAC";

type Item = {
  id: string;
  text: string;
  done: boolean;
};

type State = {
  items: Array<Item>;
};

const initialState: State = {
  items: [],
};

const todoReducer = (
  state: State = initialState,
  action: TodoAction
): State => {
  switch (action.type) {
    case ITEM_ADD:
      return {
        items: [
          ...state.items,
          {
            id: getNewId(),
            done: false,
            text: action.text,
          },
        ],
      };
    case ITEM_EDIT:
      const index = state.items.findIndex((item) => item.id === action.itemId);
      return {
        items: [
          ...state.items.slice(0, index),
          { ...state.items[index], text: action.text },
          ...state.items.slice(index + 1),
        ],
      };
    case ITEM_COMPLETE:
        const completedItemIndex = state.items.findIndex((item)=> item.id === action.itemId)
        return {
          items : [
            ...state.items.slice(0,completedItemIndex),
            { ...state.items[completedItemIndex], done : true},
            ...state.items.slice(completedItemIndex + 1)
          ]
        };
    case ITEM_REMOVE:
        const filteredItems = state.items.filter((item) => item.id !== action.itemId)
        return {
          items : [
            ...filteredItems
          ]
        }
    default:
      return state;
  }
};

export default todoReducer;
