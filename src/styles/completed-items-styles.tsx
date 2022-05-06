import styled from "styled-components";
import { device } from "./breakpoints";

export const CompletedItemContainer = styled.div`
    width : 30%;
    background-color : #90EE90;
    border-radius : 3%;

    @media ${device.mobileM}{
        width : 100%;
        cursor : pointer;
    }
`
export const Title = styled.p`
    color : #000;
    text-align : center;
    font-size : 18px;
    font-weight : 800;
`
export const ItemText = styled.p`
    font-size : 18px;
    font-weight : 500;
    text-decoration : line-through;
`
export const CompletedText = styled.p`
    text-align : center;
    font-size : 16px;
    color : grey;
`