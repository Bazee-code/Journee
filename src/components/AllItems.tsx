import styled from 'styled-components'
import CompletedItemsList from './CompletedItemsList'
import ItemList from './ItemList'

const ItemsContainer = styled.div`
    width : 100%;
    display : flex;
    justify-content : space-around;
    margin-top : 20px;
`

const AllItems = () => {

    return(
        <ItemsContainer>
            <ItemList />
            <CompletedItemsList />
        </ItemsContainer>
    )
}

export default AllItems