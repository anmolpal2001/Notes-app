import React from 'react'
import {MdSearch} from 'react-icons/md'
import './Search.css'
const Search = ({handleSearchNote}) => {
  return (
    <div className="search">
       <MdSearch className="search-icons" size={30}/>
        <input type='text' placeholder='Search' onChange={(event) => handleSearchNote(event.target.value)}/>
    </div>
  )
}

export default Search