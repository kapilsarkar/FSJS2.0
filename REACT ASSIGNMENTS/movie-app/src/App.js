import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import axios from 'axios';
function App() {
  const [state,setState] = useState({
    search: '',
    result: []
  })
  const handleInput = (e) =>{
     let search = e.target.value;
     setState((prevState) =>{
      return{...prevState,search:search}
     })
  }
  const SearchResult = (e) => {
    if(e.key==='Enter'){
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=159a4e96').then(res => console.log(res)).catch(err => console.log(err))
      //key = "86bc3e29";
    }
  }
  return (
    <>
     
     <div className='w-100 main-wrapper d-flex flex-column align-items-center justify-content-center'>
       <header className='w-100 text-center text-white mt-5'>
        <h2>Movie Search</h2>
        <Search handleInput={handleInput} SearchResult={SearchResult}/>
       </header>
     </div>
    </>
  );
}

export default App;
