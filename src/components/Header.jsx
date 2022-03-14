import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../store/authSlice.js';


function Header() {
  let dispatch = useDispatch();
  let auth = useSelector(state => state.auth);
  console.log(auth.isAuth);

  const handleSignIn = () => {
    dispatch(changeAuth())
  }
  return (
    <div>
      <h1>
        Welcome to Vacation Ratings!
      </h1>
      <Button onClick={handleSignIn} variant="outlined">Log In</Button>
    </div>
  )
}

export default Header;
