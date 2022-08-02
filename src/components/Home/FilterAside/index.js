import React from 'react'
import FilterListToggle from '../../common/FilterListToggle'
import { categoryList, ratingList } from '../../../constants'
import './styles.css'
import SliderProton from '../../common/SliderProton'
const FilterAside = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  changedPrice,
  selectedPrice,
  clearSelections,
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
        <p className='label-range'>Price:</p>
        <SliderProton value={selectedPrice} changedPrice={changedPrice} />
      </div>
      {/* move in date */}
      <div className='input-group'>
        <p className='label'>Stars:</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
          vertical={false}
        />
      </div>
      <button className='btn' onClick={clearSelections}>
        Clear Selection
      </button>
      {/* additional star rating */}
    </>
  )
}

export default FilterAside
