import React from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
function Search({handleInput,SearchResult}) {
  return (
    <div className='search-input mt-5 mb-5'>
      <Tippy content=" Please Enter Your Movie Name and Press Enter">
      <input type="text" name="movie" className='w-50 p-2 ' placeholder='Search Movies'
      onChange={handleInput} onKeyDown={SearchResult}></input>
      </Tippy>
    </div>
  )
}

export default Search
