import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import key from '../../shared/constants/APIKey';
import './SearchForm.css';

const SearchForm = function ({ setCurrentGifs }) {
  const [searchQuery, setSearchQuery] = useState('');

  const onClickSearchButton = () => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchQuery}`;

    fetch(url, {
      method: 'GET',
      headers: {
        // eslint-disable-next-line prettier/prettier
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setCurrentGifs(data.data);
      });
  };
  return (
    <div className="mainForm">
      <TextField
        onChange={($e) => {
          setSearchQuery($e.target.value);
        }}
        id="outlined-basic"
        label="Search gifs..."
        variant="outlined"
      />
      <Button onClick={onClickSearchButton} variant="text">
        Search
      </Button>
    </div>
  );
};

export default SearchForm;
