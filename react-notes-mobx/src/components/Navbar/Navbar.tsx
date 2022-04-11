import * as React from "react";
import css from "./Navbar.module.scss";
import keep from "./assets/keep.png";
import { ReactComponent as IconBurger } from "src/assets/icon-burger.svg";

interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = () => {
  return (
    <nav className={css.navbar}>
      <div className={css.menuAndLogo}>
        <div className={css.menu}>
          <IconBurger />
        </div>
        <img alt={"Logo"} className={css.logo} src={keep} />
        <span>Notes</span>
      </div>
    </nav>
  );
};

export { Navbar };
