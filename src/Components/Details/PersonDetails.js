import React from 'react';
import { Context } from '../State';
import Image from '../Image';
import IMDbLink from './IMDbLink';

const PersonDetails = () => {
  const state = React.useContext(Context);
  const { details } = state;

  return (
    <>
      <h1>{details.name}</h1>
      <p>{`Known for ${details.known_for_department}`}</p>
      <Image path={details.profile_path} alt={details.name} />
      {details.imdb_id && (
        <IMDbLink type={'name'} id={details.imdb_id} />
      )}
      <p>{details.biography}</p>
    </>
  );
};

export default PersonDetails;