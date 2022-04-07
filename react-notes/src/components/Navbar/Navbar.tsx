import * as React from "react";
import css from "./Navbar.module.scss";
import keep from "./assets/keep.png";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.menuAndLogo}>
        <div className={css.menu}>
          <svg fill="currentColor" focusable="false" viewBox="0 0 24 24">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
        <img className={css.logo} src={keep} />
        <span>Notes</span>
      </div>
    </nav>
  );
};

export { Navbar };
