import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  /**
   * searchCache = {
   * "iphone" : ["iphone11", "iphone 14"]
   * }
   *searchQuery = iphone
   *
   */

  /**
   *
   * key - i
   *   - render the component
   *   - useEffect()
   *   - start timer => make api call after 200ms
   *
   *
   * key- ip
   *   - if press ey before 200 ms , it destroy the component (call useEffect return method)
   *    - it trigger the reconcilation process
   *    -re- render the component
   *   - useEffect()
   * - start timer => make api call after 200ms (new timer)
   *
   *
   *
   * setTimeout(200) - make an API Call after 200 ms
   *
   *
   *
   */
  const getSearchSuggestion = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1]);

    // update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  useEffect(() => {
    //API CALL
    console.log(searchQuery);

    // make an api call after key press
    // but if the difference between 2 api call is < 200ms
    // decline api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="menu"
          src="https://www.svgrepo.com/show/524617/hamburger-menu.svg"
        />
        <a href="/">
          <img
            className="h-10 mx-2"
            src="https://logos-world.net/wp-content/uploads/2020/06/YouTube-Logo-500x281.png"
            alt="logo"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            placeholder="search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[37rem] shadow-lg rounded-lg border border-gray-100 absolute">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          src="https://static.thenounproject.com/png/961-200.png"
          alt="user"
        />
      </div>
    </div>
  );
};

export default Head;
