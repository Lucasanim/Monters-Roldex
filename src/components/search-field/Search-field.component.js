import React from 'react'
import './Search-field.styles.css'

export const SearchField = (props) => {
    return <input 
        className='search'
        onChange={e => props.onchange(e)}
        type='search'
        placeholder='search monsters'
    />
}