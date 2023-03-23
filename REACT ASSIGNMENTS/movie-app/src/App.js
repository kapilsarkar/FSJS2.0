import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './components/Search';
import axios from 'axios';
import Result from './components/Result';
import Detail from './components/Detail';
function App() {
  const [state,setState] = useState({
    search: '',
    results: [],
    seleted :{}
  })
 
  const handleInput = (e) =>{
     let search = e.target.value;
     setState((prevState) =>{
      return{...prevState,search:search}
     })
  }
  const openDetail = (id) => {
        axios.get('http://www.omdbapi.com/?i='+id+'&apikey=159a4e96')
        .then(({data}) => {
          setState((prevState) => {return {...prevState,seleted:data}})
        }).catch(err => console.log(err))
  }
  const SearchResult = (e) => {
    if(e.key==='Enter'){
      
      axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=159a4e96' + "&s=" +state.search)
      .then(res =>  {
        setState(prevState =>{
           return {...prevState,results :res.data.Search};
        })
      })
      .catch(err => console.log(err))
      //key = "86bc3e29";
    }
    
  }
  const close = () =>{
    setState((prevState) => {return {...prevState,seleted:{}}})
  }
  return (
    <>
     
     <div className='w-100 main-wrapper d-flex flex-column align-items-center min-vh-100'>
      {typeof state.seleted.Title !== "undefined" ? <Detail seleted={state.seleted} close={close}/> : 
       <header className='w-100 text-center text-white mt-5'>
        <h2>Movie Search</h2>
        <Search handleInput={handleInput} SearchResult={SearchResult}/>
        <div className='container'>
            <div className='row'>
              {
                state.results.map((result, i)=>(
                  <div className='col-12 col-sm-6 col-md-3 col-lg-3 my-2'>
                     <Result result={result} openDetail = {openDetail}/>
                  </div>
                ))
              }
            </div>
        </div>
       </header>
}
     </div>
    </>
  );
}

export default App;
