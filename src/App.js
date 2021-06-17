import { useEffect, useState } from "react";
import { AiFillCaretDown, AiOutlineMenu } from "react-icons/ai";
import logo from "./assets/logo-desktop.svg";
import userImage from "./assets/user.png";
import { Stories } from "./components/Stories";
import { Filters } from "./components/Filters";
import classes from "./App.module.scss";

export default function App() {
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [form, setForm] = useState({
    refreshTime: 60 * 1000,
    order: "top",
    language: [],
    limit: 10,
    isFirstRun: true,
  });

  useEffect(() => {
    if (!form.isFirstRun) {
      setRefresh(true);
    }
  }, [form.language, form.order]);

  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    const id = setInterval(() => {
      setRefresh(true);
    }, form.refreshTime);
    setIntervalId(id);

    return () => {
      clearInterval(id);
    };
  }, [form.refreshTime]);

  return (
    <div className={classes.app}>
      <header className={classes.headerWrapper}>
        <div className={classes.header}>
          <div className={classes.menuContainer}>
            <AiOutlineMenu className={classes.menuIcon} />
            <img src={logo} className={classes.logo} alt="logo" />
          </div>
          <div className={classes.userContainer}>
            <img src={userImage} className={classes.userImage} alt="User" />
            <AiFillCaretDown className={classes.arrowIcon} />
          </div>
        </div>
      </header>
      <main className={classes.mainWrapper}>
        <div className={classes.main}>
          <h1 className={classes.title}>Watchlist Name</h1>
          <Filters
            form={form}
            setForm={setForm}
            refresh={refresh}
            setRefresh={setRefresh}
            setData={setData}
          />
          <Stories
            refresh={refresh}
            setRefresh={setRefresh}
            form={form}
            setForm={setForm}
            data={data}
            setData={setData}
          />
        </div>
      </main>
    </div>
  );
}
