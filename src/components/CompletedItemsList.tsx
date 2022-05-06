import { useAppSelector } from '../types'
import { CompletedItemContainer, Title, CompletedText, ItemText } from '../styles/completed-items-styles'

const CompletedItemsList = () => {

    const items = useAppSelector(state => state.todos.items)

    return(
        <CompletedItemContainer>
            <Title>Completed Tasks</Title>
            {
                items.length === 0 ?  <CompletedText>You currently don't have any completed tasks</CompletedText> : (
                    items.map(item => {
                        if(item.done === true){
                            return (
                            <ul key={item.id}>
                                <li>
                                    <ItemText>{item.text}
                                    </ItemText>
                                </li>
                            </ul>
                             )}
                    })
                )
            }
        </CompletedItemContainer>
    )
}

export default CompletedItemsList