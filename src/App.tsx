import './App.css'
import AdvancedSearch from './container/AdvancedSearch'

const App: React.FC = () => {
  return (
    <AdvancedSearch
      title="Chainsaw Man" 
      includedTagNames={['']} 
      excludedTagNames={['Romance']} 
    />
  );
};

export default App
