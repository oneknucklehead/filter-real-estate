import React from 'react'
import FilterListToggle from '../../common/FilterListToggle'
import { categoryList, ratingList } from '../../../constants'
import './styles.css'
const FilterAside = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
}) => {
  return (
    <>
      {/* property type */}
      {/* filter according to bungalow,house,resort,hotel */}
      <div className='input-group'>
        <p className='label'>Property type:</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
          vertical={true}
        />
      </div>

      {/* Price range */}
      <div className='input-group'>
        <p className='label'>Stars:</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
          vertical={false}
        />
      </div>
      {/* move in date */}

      {/* additional star rating */}
    </>
  )
}

export default FilterAside
