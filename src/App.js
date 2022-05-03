import React, { useState, useEffect } from "react";
import Axios from "./config/Axios";
import { Navbar } from "./components";
import { Home } from "./pages";

const App = () => {
  const [list, setList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [filters, setFilters] = useState({});

  const onPageChanged = async (page) => {
    setCurrentPage(page);
    await getList(page);
  };

  const getFilters = () => {
    let query = "";
    if (filters.name) {
      query += `&name=${filters.name}`;
    }
    if (filters.gender && filters.gender !== "All") {
      query += `&gender=${filters.gender}`;
    }
    return query;
  };

  const getList = async (page) => {
    try {
      let queries = getFilters();
      if (queries !== "") {
        queries = `?page=${page}${queries}`;
      } else {
        queries = `?page=${page}`;
      }
      const arrList = await Axios.get(`/character${queries}`);
      setList(arrList.data.results);
      setTotalPages(arrList.data.info.pages);
      setTotalItems(arrList.data.info.count);
    } catch (error) {
      setList([]);
    }
  };

  useEffect(() => {
    getList(1);
  }, [filters]);

  return (
    <div>
      <Navbar setFilters={setFilters} />
      <Home
        list={list}
        object={{ currentPage, totalPages, totalItems }}
        onPageChanged={onPageChanged}
      />
    </div>
  );
};

export default App;
