import { Link } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetings</Link>
            </li>
            <li>
              <Link to="/new-meetup">New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">Favourites</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
