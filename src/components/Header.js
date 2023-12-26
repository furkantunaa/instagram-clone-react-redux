import { Link, NavLink } from "react-router-dom";
import Search from "components/Search";
import { logout } from "firebase.js";
import Icon from "components/Icon";
import { useSelector } from "react-redux";

export default function Header() {
  const user = useSelector((state) => state.auth.user);
  return (
    <header className="bg-white border-b border-gray-300">
      <div className="flex items-center justify-between h-[60px] container mx-auto">
        <Link to="/">
          <img
            alt=""
            className="h-[29px]"
            src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png"
          />
        </Link>

        <Search />

        <nav className="flex items-center gap-x-6">
          <NavLink to="/">
            <Icon name="home" size={24} />
          </NavLink>
          <NavLink to="/inbox">
            <Icon name="direct" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="new" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="explore" size={24} />
          </NavLink>
          <NavLink to="/">
            <Icon name="heart" size={24} />
          </NavLink>
          <NavLink to={`/${user.username}`}>
            <img
              src="/no-avatar.jpeg"
              alt=""
              className="w-6 h-6 rounded-full"
            />
          </NavLink>
        </nav>

        <button
          onClick={() => {
            logout();
          }}
          className="border-2 p-1 , rounded-md	border-inherit	mr-20 "
        >
          <Icon name="logout" size={24} />
        </button>
      </div>
    </header>
  );
}
