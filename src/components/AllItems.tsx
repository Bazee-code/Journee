import CompletedItemsList from './CompletedItemsList'
import ItemList from './ItemList'
import { ItemsContainer } from '../styles/all-items-styles'

const AllItems = () => {

    return(
        <ItemsContainer>
            <ItemList />
            <CompletedItemsList />
        </ItemsContainer>
    )
}

export default AllItems