import React from 'react';
import AdvancedSearch from './components/AdvancedSearch';

const App: React.FC = () => {
  return (
    <AdvancedSearch
      title="Jujutsu Kaisen" 
      includedTagNames={['Action']} 
      excludedTagNames={['Romance']} 
    />
  );
};

export default App;