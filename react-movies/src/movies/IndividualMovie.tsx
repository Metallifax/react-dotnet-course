import React from 'react';
import css from './IndividualMovie.module.css';
import { MovieDTO } from './movies.model';

const IndividualMovie = (props: MovieDTO) => {
  const buildLink = () => `/movie/${props.id}`;
  return (
    <div className={css.div}>
      <a href={buildLink()}>
        <img alt="Poster" src={props.poster} />
      </a>
      <p>
        <a href={buildLink()}>{props.title}</a>
      </p>
    </div>
  );
};

export default IndividualMovie;
