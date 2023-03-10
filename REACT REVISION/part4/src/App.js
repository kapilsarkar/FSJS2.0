
import './App.css';

import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
// import Fields from './Fields';
// import { element } from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';


function App() {

  const[name,setName] = useState("");
  const[email,setEmail] = useState("");
  const[data,setData] = useState([]);

  const addData = () => {
    setData([...data, {name , email}]);
    setName("");
    setEmail("");

  }
  const removeItem = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      {/* FORM */}
      <div className='form'>
      <Stack direction="row" spacing={2}>
      <TextField value={name} onChange={(event) =>setName(event.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={email} onChange={(event) =>setEmail(event.target.value) } id="outlined-basic" label="Email" variant="outlined" />
      <Button onClick={addData} variant="contained" color="success">
        <AddIcon/>
      </Button>
      </Stack>
      </div>
      {/* DATA */}
      <div className='data'>
      <div className='data-val'>
          <h3>Name :</h3>
          <h3>E-mail :</h3>
          <h3>Remove</h3>
        </div>
      </div >
      {
        data.map((element,index) => {
          return(
            // <Fields key = {index} name ={element.name} email= {element.email} index={index}/>

            <div key ={index} className='data-val'>
          <h3>Name  : {element.name}</h3>
          <h3>E-mail :{element.email}</h3>
          <Stack>
          <Button onClick={()=>removeItem(index)} variant="contained" color="error">
           <DeleteIcon/>
         </Button>
          </Stack>
          
        </div>
          )
        })
      }
      
    </div>
  );
}

export default App;
