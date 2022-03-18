import '../css/Header.css';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import VacationRatings from './images/VacationRatings-slim.jpg';

function Header() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      <div>
        <a data-testid="navLink2" className="siteTitle" href="/">
          <img src={VacationRatings} alt='Vacation Ratings' />
        </a>
      </div>
      <div>
        <a data-testid="navLink1" className="navLink" href="/search">
          Search
        </a>
        {isAuthenticated ? (
          <a data-testid="navLink3" className="navLink" href="/addreview">
            Add a Review
          </a>
        ) : null}
        {isAuthenticated ? (
          <LogoutButton />
        ) : (
          <LoginButton />
        )}
      </div>
    </div>
  );
}

export default Header;
