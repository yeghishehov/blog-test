import { useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import { FaFilter } from "react-icons/fa";
import { FilterLang } from './../FilterLang';
import { FilterItem } from '../FilterItem';

import classes from "./Filters.module.scss";

export default function Filters({
  form,
  setForm,
  refresh,
  setRefresh,
  setData,
}) {
  const [active, setActive] = useState(false);

  const orders = [
    { value: "top", label: "Top Rated" },
    { value: "latest", label: "latest" },
    { value: "retweeted", label: "Most Read" },
    { value: "read", label: "Popular" },
  ];

  const minutes = [
    { value: 10 * 1000, label: "10 sec" },
    { value: 30 * 1000, label: "30 sec" },
    { value: 60 * 1000, label: "1 min" },
    { value: 10 * 60 * 1000, label: "10 min" },
  ];

  const toggleActive = () => {
    setActive((state) => !state);
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
      language: [],
      limit: 10,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.buttonsContainer}>
        <button className={classes.button} onClick={handleRefresh}>
          <AiOutlineReload className={classes.icon} />
          <p>Refresh</p>
        </button>
        <button
          className={classes.button}
          style={{ background: active ? "#eee" : "#fff" }}
          onClick={toggleActive}
        >
          <FaFilter className={classes.icon} />
          <p>Filters</p>
        </button>
      </div>
      {active ? (
        <div className={classes.filtersContainer}>
          <FilterItem form={form} setForm={setForm} options={minutes} formKey="refreshTime" label="Autorefresh" />
          <FilterItem form={form} setForm={setForm} options={orders} formKey="order" label="Order" />
          <FilterLang form={form} setForm={setForm} />
          <button className={classes.reset} onClick={handleReset}>
            RESET
          </button>
        </div>
      ) : null}
    </div>
  );
}
