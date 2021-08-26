import React from 'react';
import './App.css';
import IndividualMovie from './movies/IndividualMovie';
import { MovieDTO } from './movies/movies.model';

const App = () => {
  const tMovie: MovieDTO = {
    id: 1,
    title: 'Spider-Man: Far From Home',
    poster:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTStY893W6Ihm3px1v-iJu3s0qVaAcyXdiE2ICo9bShiQgpCSbx',
  };

  return (
    <>
      <IndividualMovie
        id={tMovie.id}
        title={tMovie.title}
        poster={tMovie.poster}
      />
    </>
  );
};
export default App;
