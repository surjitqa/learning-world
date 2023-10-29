import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/">HomePage</Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
