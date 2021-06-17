import { useEffect, useState } from "react";
import { IoIosArrowDown } from 'react-icons/io';
import classes from "./FilterLang.module.scss";

const checkboxes = [
  { name: "all", label: "Select / Unselect All" },
  { name: "en", label: "English" },
  { name: "de", label: "German" },
  { name: "zh", label: "Chinese" },
  { name: "it", label: "Italian" },
];

export default function FilterLang({ form, setForm }) {
  const [expanded, setExpanded] = useState(false);

  const showCheckboxes = () => {
    setExpanded(!expanded);
  };

  useEffect(() => {
    const checkLanguageId = (e) => {
      if (e.target.id !== 'language') {
        setExpanded(false)
      }
    }
    document.addEventListener('click', checkLanguageId)

    return () => {
      document.removeEventListener("click", checkLanguageId);
    };
  }, [])

  const handleChange = (e) => {
    if (e.target.name === "all") {
      if (e.target.checked) {
        setForm({
          ...form,
          language: checkboxes.map((checkbox) => checkbox.name),
        });
      } else {
        setForm({ ...form, language: [] });
      }
    } else if (e.target.checked) {
      setForm({ ...form, language: [...form.language, e.target.name] });
    } else {
      setForm({
        ...form,
        language: form.language.filter(
          (lang) => lang !== e.target.name && lang !== "all"
        ),
      });
    }
  };

  return (
    <div className={classes.multiSelect}>
      <div className={classes.selectBox} onClick={showCheckboxes}>
        <div id="language" className={classes.select}>
          {form.language.filter((lang) => lang !== 'all').join(', ')}
          <IoIosArrowDown className={classes.arrow} />
        </div>
        <label className={classes.label} htmlFor="language">
          Languages
        </label>
      </div>
      <div
        className={classes.modal}
        style={{ display: expanded ? "grid" : "none" }}
        onClick={showCheckboxes}
      >
        <div className={classes.modalContent}>
          {checkboxes.map((checkbox) => (
            <label
              key={checkbox.name}
              htmlFor={checkbox.name}
              className={classes.leb}
              onClick={(e) => e.stopPropagation()}
            >
              <input
                type="checkbox"
                id={checkbox.name}
                name={checkbox.name}
                onChange={handleChange}
                checked={form.language.some((lang) => lang === checkbox.name)}
                onClick={(e) => e.stopPropagation()}
              />
              {checkbox.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
