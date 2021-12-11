import React from 'react';

const GifButton = function ({ id, setOpenModal, gif }) {
  return (
    <button
      type="button"
      // eslint-disable-next-line no-plusplus
      key={id}
      onClick={() => {
        setOpenModal(id);
      }}
    >
      <figure>
        <img
          src={`${gif.images.fixed_height.url}`}
          width={gif.images.fixed_height.width}
          height={gif.images.fixed_height.height}
          alt="404"
        />
      </figure>
    </button>
  );
};

export default GifButton;
