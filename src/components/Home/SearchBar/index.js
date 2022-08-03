import { Search } from '@mui/icons-material'
import React from 'react'
import './styles.css'
const SearchBar = ({ value, changeInput }) => {
  return (
    <div className='searchbar-wrapper'>
      <h2>Search for property</h2>
      <div className='search-container'>
        <Search className='search-icon' />
        <input
          type='text'
          placeholder='Enter location'
          value={value}
          onChange={changeInput}
        />
      </div>
    </div>
  )
}

export default SearchBar
