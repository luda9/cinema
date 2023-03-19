import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../modules/Search.module.css"
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

function Search() {
  const navigate = useNavigate();

  const [searched, setSearched ] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate("/cinema/?search=" + searched)
  };

  const search = useLocation().search
  const params = new URLSearchParams(search)
  const query = params.get("search");

  useEffect(() => {
    setSearched(query ? query : "");
  }, [query])

  return (
      <form
      onSubmit={handleFormSubmit}

      >
        <div className={styles.box}>
          <input
            type="text"
            className={styles.textlabel}
            value={searched}
            onChange={(e) => setSearched(e.target.value)}
            />
          <button type="submit" className={styles.icon}>
          <img src={process.env.PUBLIC_URL + "/search.png"} alt="search icon"/>
          </button>
        </div>
      </form>
  )
}

export default Search
