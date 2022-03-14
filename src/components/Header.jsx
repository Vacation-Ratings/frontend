import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../store/themeSlice.js';
import { changeAuth } from '../store/authSlice.js';
import '../css/Header.css';


function Header() {
  let dispatch = useDispatch();
  let theme = useSelector(state => state.theme);
  let auth = useSelector(state => state.auth);
  console.log(auth.isAuth);

  const handleSignIn = () => {
    dispatch(changeAuth())
  }

  const themeToggle = () => {
    dispatch(changeTheme())
  }

  return (
    <div>
      {
        auth.isAuth === true ? (
        <a className={ theme.theme === 'light' ? 'navLink light' : 'navLink dark' } href="/favorites">
          Favorites
        </a>
        ) : null
      }
      <a className={ theme.theme === 'light' ? 'navLink light' : 'navLink dark' } href="/search">
        Search
      </a>
      <a className={ theme.theme === 'light' ? 'siteTitle light' : 'siteTitle dark' } href="/">
        Vacation Ratings
      </a>
      <Button onClick={themeToggle} variant="outlined">{theme.theme === 'light' ? 'Dark' : 'Light'} </Button>
      <Button onClick={handleSignIn} variant="outlined">Log In</Button>
    </div>
  )
}

export default Header;
