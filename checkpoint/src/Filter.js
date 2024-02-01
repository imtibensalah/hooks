import React, { useState } from 'react';
import Movies from './Movies';
import Moviescard from './Movielist';
const Filtrer = () => {
  const [nameFilter, setNameFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTitleChange = (event) => {
    setNameFilter(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingFilter(Number(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const Moviescard = Movies.filter((movie) => {
    return (
      movie.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      movie.rating >= ratingFilter &&
      movie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <div>
        <input type="text" value={nameFilter} onChange={handleTitleChange} placeholder="Filtrer par titre" />
        <input type="number" value={ratingFilter} onChange={handleRatingChange} placeholder="Filtrer par note" />
        <input type="text" onChange={handleSearchChange} placeholder="Rechercher par titre" />
      </div>
     
      
    </div>
  );
};

export default Filtrer;
