import styled from 'styled-components'
import { useAppSelector } from '../types'


const CompletedItemContainer = styled.div`
    width : 30%;
    background-color : #90EE90;
    border-radius : 3%;
`

const Title = styled.p`
    color : #000;
    text-align : center;
    font-size : 18px;
    font-weight : 800;
`

const P = styled.p`
    font-size : 18px;
    font-weight : 500;
    text-decoration : line-through;
`
const completedText = styled.p`
    text-align : center;
    font-size : 16px;
    color : grey;
`

const CompletedItemsList = () => {

    return(
        <CompletedItemContainer>
            <Title>Completed Tasks</Title>
        </CompletedItemContainer>
    )
}

export default CompletedItemsList