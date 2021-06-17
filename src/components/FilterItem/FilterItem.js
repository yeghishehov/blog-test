import { useEffect, useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import classes from "./FilterItem.module.scss";

export default function FilterItem({ form, setForm, options, label, formKey }) {
  const [expanded, setExpanded] = useState(false);

  const show = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const checkId = (e) => {
      if (e.target.id !== label) {
        setExpanded(false)
      }
    }
    document.addEventListener('click', checkId)

    return () => {
      document.removeEventListener("click", checkId);
    };
  }, [])

  const handleClick = (e, value) => {
    setForm({ ...form, [formKey]: value });
  };

  return (
    <div className={classes.multiSelect}>
      <div className={classes.selectBox} onClick={show}>
        <div id={label} className={classes.select}>

          {options.find((item) => (item.value === form[formKey])).label}
          <IoIosArrowDown className={classes.arrow} />
        </div>
        <label className={classes.label} htmlFor={label}>
          {label}
        </label>
      </div>
      <div
        className={classes.modal}
        style={{ display: expanded ? "grid" : "none" }}
        onClick={show}
      >
        <div className={classes.modalContent}>
          {options.map((item) => (
            <label
              key={item.value}
              htmlFor={item.value}
              className={classes.leb}
              onClick={(e) => handleClick(e, item.value)}
            >
              <div
                id={item.value}
                onClick={(e) => handleClick(e, item.value)}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
