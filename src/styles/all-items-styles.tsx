import styled from "styled-components";
import { device } from './breakpoints'

export const ItemsContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-around;
    margin-top : 20px;

    @media ${device.mobileM}{
        display : flex;
        flex-direction: column;
        cursor : pointer;
    }
`