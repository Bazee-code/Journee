import styled from 'styled-components'
import AddItemsInput from './components/AddItemsInput';
import AllItems from './components/AllItems';
import Header from './components/Header';

const AppContainer = styled.div`
  padding : 30px;
`

const App = () => {
  return (
    <AppContainer>
      <Header />
      <AddItemsInput />
      <AllItems />
    </AppContainer>
  );
};

export default App;
