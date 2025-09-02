import './App.css';
import { SearchForm } from './components/SearchForm';
import { SearchProvider } from './contexts/Search';
import { Books } from './components/Books';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <SearchProvider>
      <output>{count}</output>
      <button
        type="button"
        onClick={() => {
          setCount((count) => ++count);
        }}
      >
        +1
      </button>
      <SearchForm />
      <Books />
    </SearchProvider>
  );
}

export default App;
