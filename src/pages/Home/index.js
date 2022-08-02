import React, { useEffect, useState } from 'react'
import FilterAside from '../../components/Home/FilterAside'
import SearchBar from '../../components/Home/SearchBar'
import Lists from '../../components/Home/Lists'
import { dataList } from '../../constants'
import './styles.css'

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedRating, setSelectedRating] = useState()
  const [inputSearch, setInputSearch] = useState()
  const [selectedPrice, setSelectedPrice] = useState([1000, 6000])
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
  const applyFilters = () => {
    let updatedList = dataList

    //Rating filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      )
    }

    //property type
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      )
    }

    //Pricing filter
    let minPrice = selectedPrice[0]
    let maxPrice = selectedPrice[1]
    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    )

    //Searching filter
    if (inputSearch) {
      updatedList = updatedList.filter(
        (item) =>
          item.location
            .toLowerCase()
            .search(inputSearch.toLowerCase().trim()) !== -1
      )
    }

    setLists(updatedList)
  }
  const clearSelections = () => {
    setSelectedCategory('')
    setSelectedPrice([1000, 6000])
    setSelectedRating('')
  }
  useEffect(() => {
    applyFilters()
  }, [selectedRating, selectedCategory, selectedPrice, inputSearch])
  return (
    <div className='home'>
      {/* search bar */}
      <SearchBar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
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
            clearSelections={clearSelections}
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
