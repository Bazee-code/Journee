import styled from 'styled-components'
import AddItemsInput from './components/AddItemsInput';
import Header from './components/Header';

const AppContainer = styled.div`
  padding : 30px;
`

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AddItemsInput />
    </AppContainer>
  );
};

export default App;
