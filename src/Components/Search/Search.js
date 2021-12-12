import React from 'react'
import classes from './Search.module.css'
const Search = ({ icon, placeholder }) => {
   return (
      <div className={classes.searchBar + " d-flex align-items-center"}>
         <input type="text" placeholder={placeholder ? placeholder : "Search"} />
         {icon && <i class="fas fa-search fa-xs"></i>}
      </div>
   )
}

export default Search
