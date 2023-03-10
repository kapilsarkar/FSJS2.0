import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

const Fields = ({name,email,index}) => {
  return (
    <div className='data-val'>
          <h3>Name  : {name}</h3>
          <h3>E-mail :{email}</h3>
          <Stack>
          <Button variant="contained" color="error">
           <DeleteIcon/>
         </Button>
          </Stack>
          
        </div>
  )
}

export default Fields
