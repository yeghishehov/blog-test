import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";

import classes from "./Filters.module.scss";

export default function Filters({
  form,
  setForm,
  refresh,
  setRefresh,
  setData,
}) {
  const [active, setActive] = useState(false);

  const toggleActive = () => {
    setActive((state) => !state);
  };

  const handleChange = (e) => {
    setForm((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleRefresh = () => {
    if (!refresh) {
      setData([]);
      setRefresh(true);
    }
  };

  const handleReset = () => {
    setForm({
      refreshTime: 60 * 1000,
      order: "top",
      language: "en",
      limit: 10,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonsContainer}>
        <button className={classes.button} onClick={handleRefresh}>
          <AiOutlineReload className={classes.icon} />
          Refresh
        </button>
        <button
          className={classes.button}
          style={{ background: active ? "#eee" : "#fff" }}
          onClick={toggleActive}
        >
          <FaFilter className={classes.icon} />
          Filters
        </button>
      </div>
      {active ? (
        <div className={classes.filtersContainer}>
          <div className={classes.selectContainer}>
            <select
              className={classes.select}
              id="Autorefresh"
              name="refreshTime"
              value={form.refreshTime}
              onChange={handleChange}
            >
              <option value={10 * 1000}>10 sec</option>
              <option value={30 * 1000}>30 sec</option>
              <option value={60 * 1000}>1 min</option>
              <option value={10 * 60 * 1000}>10 min</option>
            </select>
            <label className={classes.label} htmlFor="Autorefresh">
              Autorefresh
            </label>
          </div>

          <div className={classes.selectContainer}>
            <select
              className={classes.select}
              id="Order"
              name="order"
              value={form.order}
              onChange={handleChange}
            >
              <option value="top">Top Rated</option>
              <option value="latest">Latest</option>
              <option value="retweeted">Most Read</option>
              <option value="read">Popular</option>
            </select>
            <label className={classes.label} htmlFor="Order">
              Order
            </label>
          </div>

          <div className={classes.selectContainer}>
            <select
              className={classes.select}
              id="Languages"
              name="language"
              value={form.language}
              onChange={handleChange}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="zh">Chinese</option>
              <option value="it">Italian</option>
            </select>
            <label className={classes.label} htmlFor="Languages">
              Languages
            </label>
          </div>

          <button className={classes.reset} onClick={handleReset}>
            RESET
          </button>
        </div>
      ) : null}
    </div>
  );
}
