import React, { useState } from 'react';
import './App.css';
import GifsList from './components/GiftList/GifsList';
import SearchForm from './components/SearchForm/SearchForm';
// eslint-disable-next-line no-unused-vars
import GifModal from './components/GifModal/GifModal';

const App = function () {
  // test: eslint-disable-next-line no-unused-vars
  const [currentGifs, setCurrentGifs] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentSelected, setCurrentSelected] = useState(-1);
  return (
    <main>
      <div className="main-grid">
        <SearchForm setCurrentGifs={setCurrentGifs} />
        <ul className="gifs-grid">
          <GifsList gifs={currentGifs} setOpenModal={setCurrentSelected} />
        </ul>
        <GifModal
          gifs={currentGifs}
          gif={currentSelected}
          changeGif={setCurrentSelected}
        />
      </div>
    </main>
  );
};

export default App;
