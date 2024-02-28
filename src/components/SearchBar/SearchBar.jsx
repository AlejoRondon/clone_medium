import React, { useState } from 'react'
import './SearchBar.scss'

const SearchBar = () => {
  return (
    <div className='search-bar'>
      <span className='search-bar__icon'>
        <i className='fas fa-search'></i>
      </span>
      <input type='text' placeholder='Search ' className='search-bar__input' />
    </div>
  )
}

export default SearchBar
