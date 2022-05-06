import styled from 'styled-components'
import Header from './components/Header';
import ItemList from "./components/ItemList";

const AppContainer = styled.div`
  padding : 30px;
`

const App = () => {
  return (
    <AppContainer>
      <Header />
      <ItemList />
    </AppContainer>
  );
};

export default App;
