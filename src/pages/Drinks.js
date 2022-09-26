import React from 'react';
import Header from '../components/Header';
import searchImg from '../images/searchIcon.svg';

export default function Drinks() {
  return (
    <div>
      <Header
        title="Drinks"
        search={ searchImg }
      />
    </div>
  );
}
