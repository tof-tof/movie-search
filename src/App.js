import React from 'react';
import Header from './components/Header';
import './tailwind.css';
import SearchMovies from './components/Search';

function App() {
  return (
    <div className="relative width-full">
      <div className="mx-auto overflow-hidden">
        <Header />
        <SearchMovies />
      </div>
    </div>
  );
}

export default App;
