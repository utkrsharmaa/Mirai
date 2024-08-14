import './App.css';
import { AdvancedSearch } from './containers';

const App: React.FC = () => {
  return (
    <AdvancedSearch
      title="" 
      includedTagNames={['']} 
      excludedTagNames={['']}
      filters= {{
      }}
      order={{
      }}
    />
  );
};

export default App
