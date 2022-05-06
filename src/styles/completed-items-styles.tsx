import styled from "styled-components";
import { device } from "./breakpoints";

export const CompletedItemContainer = styled.div`
    width : 100%;
    border-radius : 3%;
    margin : 20px;

    @media ${device.mobileS}{
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
export const ItemText = styled.p`
    font-size : 18px;
    font-weight : 500;
    text-decoration : line-through;
    padding : 5px;

    @media ${device.mobileS}{
        font-size: 13px;
        padding-bottom : 5px;
      }
    
    @media ${device.tablet}{
        font-size: 16px;
        padding-bottom : 5px;
      }
`
export const CompletedText = styled.p`
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

export const CompletedItem = styled.div`
      height : 40px;
      background-color : #90EE90;
      border-radius : 3%;
      overflow : hidden;
      text-overflow : ellipsis;

      @media ${device.mobileS}{
          padding-bottom : 3px;
          margin-bottom : 5px;
      }
      @media ${device.tablet}{
        padding-bottom : 5px;
        margin-bottom : 3px;
      }
`