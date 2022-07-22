import React from 'react';

import '../styles/SearchBar.css';

export default function SearchBar({ handleChange, handleSubmit }) {
  return (
    <form className='search_cont' onSubmit={(e) => handleSubmit(e)}>
      <input type='search' placeholder='Search for movie, tv, and person' onChange={handleChange} />

      <button onClick={() => handleSubmit()} type='submit'>
        Search
      </button>
    </form>
  );
}
