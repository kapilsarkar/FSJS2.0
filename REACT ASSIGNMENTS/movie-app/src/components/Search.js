import React from 'react'

function Search({handleInput,SearchResult}) {
  return (
    <div className='search-input mt-5 mb-5'>
      <input type="text" name="movie" className='w-50 p-2 ' placeholder='Search Movies'
      onChange={handleInput} onKeyDown={SearchResult}></input>
    </div>
  )
}

export default Search
