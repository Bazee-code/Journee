import styled from 'styled-components'
import { device } from './breakpoints'

export const InputContainer = styled.form`
    width : 100%;
    display : flex;
    justify-content : center;

`

export const InputElement = styled.input`
    width : 30%;
    height : 30px;
    cursor : pointer;

    @media ${device.mobileM}{
        width : 60%;
        cursor : pointer;
    }
`
export const Button = styled.button`
    margin-left : 5px;
    width : 5%;
    cursor : pointer;
    background-color : green;
    color : #FFF;
    border : none;
    
    @media ${device.mobileM}{
        width : 15%;
        cursor : pointer;
    }
`