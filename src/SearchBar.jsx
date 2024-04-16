import { useState } from 'react'
import './TodoCard.css'

function SearchBar({ value, onChange }) {
  
    return (
      <input className="searchBar"
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    )
  
  }

export default SearchBar