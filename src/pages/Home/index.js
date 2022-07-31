import React, { useState } from 'react'
import FilterAside from '../../components/Home/FilterAside'
import SearchBar from '../../components/Home/SearchBar'
import Lists from '../../components/Home/Lists'
import './styles.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedRating, setSelectedRating] = useState()
  const handleSelectCategory = (event, value) => {
    return !value ? null : setSelectedCategory(value)
  }
  const handleSelectRating = (event, value) => {
    return !value ? null : setSelectedRating(value)
  }
  return (
    <div className='home'>
      {/* search bar */}
      <SearchBar />
      {/* Sidebar */}
      <div className='home-wrapper'>
        <div className='filter-aside'>
          <FilterAside
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
          />
        </div>
        <div className='list-aside'>
          {/* list of properties & empty view*/}
          <Lists />
        </div>
      </div>
    </div>
  )
}

export default Home
