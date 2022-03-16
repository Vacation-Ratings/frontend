import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeAuth } from '../store/authSlice.js';
import '../css/Header.css';


function Header() {
  let dispatch = useDispatch();
  let auth = useSelector(state => state.auth);
  console.log(auth.isAuth);

  const handleSignIn = () => {
    dispatch(changeAuth())
  }

  return (
    <div>
      {
        auth.isAuth === true ? (
        <a className="navLink" href="/favorites">
          Favorites
        </a>
        ) : null
      }
      <a className="navLink" href="/search">
        Search
      </a>
      <a className="siteTitle" href="/">
        Vacation Ratings
      </a>
      <Button onClick={handleSignIn} variant="outlined">Log In</Button>
    </div>
  )
}

export default Header;
