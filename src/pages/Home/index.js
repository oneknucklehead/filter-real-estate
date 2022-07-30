import React from 'react'
import FilterAside from '../../components/Home/FilterAside'
import SearchBar from '../../components/Home/SearchBar'
import Lists from '../../components/Home/Lists'
import './styles.css'

const Home = () => {
  return (
    <div className='home'>
      {/* search bar */}
      <SearchBar />
      {/* Sidebar */}
      <div className='home-wrapper'>
        <div className='filter-aside'>
          <FilterAside />
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
