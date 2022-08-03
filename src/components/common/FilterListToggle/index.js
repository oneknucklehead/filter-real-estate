import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'

const FilterListToggle = ({ value, options, selectToggle, vertical }) => {
  return (
    <>
      <ToggleButtonGroup
        size='small'
        value={value}
        onChange={selectToggle}
        orientation={vertical ? 'vertical' : 'horizontal'}
        exclusive
        sx={{
          border: '1px solid rgba(0, 0, 0, 0.12)',
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        {options.map(({ label, value, id }) => (
          <ToggleButton
            className='toggle'
            key={id}
            value={value}
            sx={{
              fontWeight: 'bold',
              color: '#5D3FD3',
              // border: 'none',
              borderRadius: '10px',
              margin: '10px',

              '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
                // borderRadius: '10px',
                border: 'none',
              },
              '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
                // borderRadius: '10px',
                // border: '1px solid rgba(0, 0, 0, 0.12)',
                border: 'none',
              },
              '&.MuiToggleButtonGroup-groupedVertical:not(:last-child)': {
                // borderRadius: '10px',
                border: 'none',
              },
              '&.MuiToggleButtonGroup-groupedVertical:not(:first-child)': {
                // borderRadius: '10px',
                border: 'none',

                // border: '1px solid rgba(0, 0, 0, 0.12)',
              },
              '&.Mui-selected': {
                background: '#5D3FD3',
                color: '#fff',
              },
              '&.MuiToggleButton-root': {
                transition: '0.2s ease-in-out',
                borderRadius: '0',
                '&:hover': {
                  background: '#5D3FD3',
                  color: '#fff',
                  transition: '0.2s ease-in-out',
                },
              },
            }}
          >
            {label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </>
  )
}

export default FilterListToggle
