import styled from 'styled-components'
import { device } from './breakpoints';

export const ItemListContainer = styled.div`
  width : 30%;
  background-color : yellow;
  border-radius : 3%;

  @media ${device.mobileM}{
    width : 100%;
    cursor : pointer;
    margin-bottom : 15px;
}
`
export const Title = styled.p`
    color : #000;
    text-align : center;
    font-size : 18px;
    font-weight : 800;
`

export const Item = styled.li`
  display: flex;
  flex-direction: row
  
`;

export const ItemInput = styled.input`
  height :28px;
  width : 70%;
  margin-bottom : 10px;
`;

export const ItemCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  margin-top : 10px;
  margin-right : 10px;
`;

export const ItemListText = styled.p`
    text-align : center;
    font-size : 16px;
    color : grey;
`
export const ItemDeleteButton = styled.button`
  margin-left : 2px;
  cursor: pointer;
  border : none;
  height : 28px;
  background: none;
`