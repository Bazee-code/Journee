import AddItemsInput from './components/AddItemsInput';
import Header from './components/Header';
import AllItems from './components/AllItems';
import { AppContainer } from './styles/app-styles';

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
