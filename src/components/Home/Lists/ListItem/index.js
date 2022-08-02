import React from 'react'
import './styles.css'
import VerifiedIcon from '@mui/icons-material/Verified'
import AirlineSeatFlatIcon from '@mui/icons-material/AirlineSeatFlat'
import Grid4x4Icon from '@mui/icons-material/Grid4x4'
import HotTubIcon from '@mui/icons-material/HotTub'
const ListItem = ({ item }) => {
  return (
    <div className='listItem-wrap'>
      <div className='card'>
        <img src={item.coverSrc} alt={item.title} />
        <p className='price'>
          ${item.price}
          <span>/month</span>
        </p>

        <header>
          <div className='title-wrapper'>
            <span className='icon'>
              <VerifiedIcon />
            </span>
            <h4>
              {' '}
              {item.title}, <span className='location'>{item.location}</span>
            </h4>
          </div>
          <span>🌟{item.rating}</span>
        </header>
        <hr></hr>

        <footer>
          <p>
            <span className='icon2'>
              <Grid4x4Icon sx={{ fontSize: '14px' }} />
            </span>
            : {item.space} sqft
          </p>
          |
          <p>
            <span className='icon2'>
              <AirlineSeatFlatIcon sx={{ fontSize: '14px' }} />
            </span>
            : {item.rooms} Rooms
          </p>
          |
          <p>
            <span className='icon2'>
              <HotTubIcon sx={{ fontSize: '14px' }} />
            </span>
            : {item.bathrooms} Bathrooms
          </p>
        </footer>
      </div>
    </div>
  )
}

export default ListItem
