import React from 'react'
import ListItem from './ListItem'
import './styles.css'
const Lists = ({ lists }) => {
  return (
    <div className='list-wrap'>
      {lists.map((item) => (
        <ListItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default Lists
