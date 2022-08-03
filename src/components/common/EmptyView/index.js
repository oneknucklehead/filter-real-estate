import React from 'react'
import './styles.css'
const EmptyView = () => {
  return (
    <div className='empty-view-container'>
      <img src={process.env.PUBLIC_URL + '/images/giphy.webp'}></img>
      <h1>Oops!</h1>
      <span>we're sorry, we could not find any match</span>
    </div>
  )
}

export default EmptyView
