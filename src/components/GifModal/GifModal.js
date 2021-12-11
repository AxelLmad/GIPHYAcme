import React from 'react';
import './GifModal.css';

// eslint-disable-next-line no-unused-vars
const GifModal = function ({ gifs, gif, changeGif }) {
  const handleGifSum = () => {
    if (gif + 1 === gifs.length) {
      changeGif(0);
    } else {
      changeGif(gif + 1);
    }
  };
  const handleGifSub = () => {
    if (gif - 1 < 0) {
      changeGif(gifs.length - 1);
    } else {
      changeGif(gif - 1);
    }
  };
  if (gifs !== undefined && gifs.length > 0 && gif !== -1) {
    return (
      <div className="main">
        <button
          type="button"
          onClick={() => {
            handleGifSub();
          }}
        >
          PREV
        </button>
        <figure>
          <img
            src={gifs[gif].images.fixed_height.url}
            width={gifs[gif].images.fixed_height.width}
            height={gifs[gif].images.fixed_height.height}
            alt="404"
          />
        </figure>
        <button
          type="button"
          onClick={() => {
            handleGifSum();
          }}
        >
          NEXT
        </button>
      </div>
    );
  }
  return <div />;
};

export default GifModal;
