import styled from 'styled-components'
import { device } from './breakpoints';

export const ItemListContainer = styled.div`
  width : 100%;
  background-color : yellow;
  border-radius : 3%;
  margin : 20px;

  @media ${device.mobileS}{
    width : 90%;
    margin : 10px;
  }

  @media ${device.tablet}{
    width : 90%;
    margin : 10px;
  }
`
export const Title = styled.p`
    color : #000;
    text-align : center;
    font-size : 18px;
    font-weight : 800;

    @media ${device.mobileS}{
      font-size: 15px;
      padding-top : 10px;
    }

    @media ${device.tablet}{
      font-size: 17px;
    }
`

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
   
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

    @media ${device.mobileS}{
      font-size: 13px;
      padding-bottom : 5px;
    }
    @media ${device.tablet}{
      font-size: 15px;
      padding-bottom : 5px;
    }
`
export const ItemDeleteButton = styled.button`
  margin-left : 2px;
  cursor: pointer;
  border : none;
  height : 28px;
  background: none;
`