import React from 'react';
import GifButton from './GifButton/GifButton';
import './GiftList.css';

const GifsList = function ({ gifs, setOpenModal }) {
  if (gifs !== null && gifs !== undefined) {
    let counter = 0;
    return gifs.map((gif) => (
      <GifButton
        key={counter}
        gif={gif}
        setOpenModal={setOpenModal}
        // eslint-disable-next-line no-plusplus
        id={counter++}
      />
    ));
  }

  return <li />;
};

export default GifsList;
