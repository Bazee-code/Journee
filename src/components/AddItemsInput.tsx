import React, {useState} from 'react'
import { useAppDispatch } from '../types'
import { addTodo } from '../todo/todoAC'
import { InputContainer, InputElement, Button } from '../styles/input-styles'

const AddItemsInput = () => {

    const [item, setItem] = useState('')
    const dispatch = useAppDispatch()

    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setItem(event.target.value)
    }

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        
        if(!item || /^\s*$/.test(item)){
            return
        }
        
        dispatch(addTodo(item))
        setItem('')
    }

    return (
        <InputContainer>
            <InputElement 
                type="text"
                placeholder="Type to add a task"
                value={item}
                onChange={handleChange}
                autoFocus
            />
            <Button onClick={handleSubmit}>Add</Button>
        </InputContainer>
    )
}

export default AddItemsInput