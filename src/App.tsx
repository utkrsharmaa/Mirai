import './App.css';
import { AdvancedSearch } from './containers';

const App: React.FC = () => {
  return (
    <AdvancedSearch
      title="Chainsaw" 
      includedTagNames={['']} 
      excludedTagNames={['']}
      filters= {{
        status:['ongoing'],
      }}
      order={{
        rating: "desc",
      }}
    />
  );
};

export default App
