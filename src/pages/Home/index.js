import React, { useState } from 'react'
import FilterAside from '../../components/Home/FilterAside'
import SearchBar from '../../components/Home/SearchBar'
import Lists from '../../components/Home/Lists'
import { dataList } from '../../constants'
import './styles.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedRating, setSelectedRating] = useState()
  const [selectedPrice, setSelectedPrice] = useState([1000, 5000])
  const [lists, setLists] = useState(dataList)
  const handleSelectCategory = (event, value) => {
    return !value ? null : setSelectedCategory(value)
  }
  const handleSelectRating = (event, value) => {
    return !value ? null : setSelectedRating(value)
  }
  const handleChangedPrice = (event, value) => {
    return setSelectedPrice(value)
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
            selectedPrice={selectedPrice}
            changedPrice={handleChangedPrice}
          />
        </div>
        <div className='list-aside'>
          {/* list of properties & empty view*/}
          <Lists lists={lists} />
        </div>
      </div>
    </div>
  )
}

export default Home
