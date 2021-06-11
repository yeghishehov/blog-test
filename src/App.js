import { Stories } from "./components/Stories";
import logo from "./assets/logo-desktop.svg";
import userImage from "./assets/user.png";
import classes from "./App.module.scss";
import { AiFillCaretDown } from "react-icons/ai";

export default function App() {
  return (
    <div>
      <header className={classes.headerWrapper}>
        <div className={classes.header}>
          <img src={logo} className={classes.logo} alt="logo" />
          <div className={classes.userContainer}>
            <img
              src={userImage}
              className={classes.userImage}
              alt="User"
            />
            <AiFillCaretDown className={classes.arrowIcon} />
          </div>
        </div>
      </header>
      <main className={classes.mainWrapper}>
        <div className={classes.main}>
          <h1 className={classes.title}>Watchlist Name</h1>
          <Stories />
        </div>
      </main>
    </div>
  );
}
