import { Slider } from '@mui/material'
import React from 'react'
import './styles.css'
const SliderProton = ({ value, changedPrice }) => {
  return (
    <div className='root'>
      <Slider
        value={value}
        onChange={changedPrice}
        valueLabelDisplay='on'
        disableSwap
        min={1000}
        max={6000}
        sx={{
          '.MuiSlider-thumb': {
            color: '#5D3FD3',
          },
          '.MuiSlider-rail': {
            color: 'rgba(213,184,255,0.7)',
          },
          '.MuiSlider-track': {
            color: '#5D3FD3',
          },
        }}
      />
    </div>
  )
}

export default SliderProton
