// import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import '../css/Header.css';
import TextField from '@mui/material/TextField';


function Search() {
  let [query, setQuery] = useState('');
  let dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  }
  return (
    <div>
    <TextField id="outlined-basic" onChange={handleChange} label="Search Location" variant="outlined" />
    </div>
  )
}
  
  export default Search;
