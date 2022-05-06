import styled from "styled-components";
import { device } from './breakpoints'

export const ItemsContainer = styled.div`
    width : 100%;
    display : flex;
    margin-top : 20px;
    justify-content : space-around;

    @media ${device.mobileS}{
        display : block;
    }
    @media ${device.tablet}{
        display : flex;
        justify-content : space-around;
    }
`
