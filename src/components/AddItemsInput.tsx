import React, {useState} from 'react'
import styled from 'styled-components'
import { useAppDispatch } from '../types'
import { addTodo } from '../todo/todoAC'

const InputContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
`

const InputElement = styled.input`
    width : 30%;
    height : 30px;
    cursor : pointer;
`
const Button = styled.button`
    margin-left : 5px;
    width : 5%;
    cursor : pointer;
    background-color : green;
    color : #FFF;
    border : none;
`

const AddItemsInput = () => {

    

    return (
        <InputContainer>
            <InputElement 
                type="text"
                placeholder="Type to add a task"
            />
            <Button>Add</Button>
        </InputContainer>
    )
}

export default AddItemsInput