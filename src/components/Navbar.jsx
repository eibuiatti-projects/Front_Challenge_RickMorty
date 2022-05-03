import React, { useState } from "react";

const Navbar = ({ setFilters }) => {
  const [filt, setFilt] = useState({ gender: "All", name: "" });
  const genders = ["All", "Female", "Male", "Genderless", "unknown"];

  const onChange = (e) => setFilt({ ...filt, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setFilters(filt);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"
      style={{ brightness: 100 }}
    >
      <div className="container-fluid">
        <span className="navbar-brand">The Rick and Morty UI</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto ms-5 mb-2 mb-lg-0">
            <li className="nav-item">
              <span
                onClick={() => {
                  setFilt({ gender: "All", name: "" });
                  setFilters({ gender: "All", name: "" });
                }}
                className="nav-link active"
                aria-current="page"
                style={{ cursor: "pointer" }}
              >
                Home
              </span>
            </li>
          </ul>
          <form onSubmit={onSubmit} className="d-flex align-items-center">
            <label style={{ minWidth: "max-content", color: "whitesmoke" }}>
              Gender:{" "}
            </label>
            <select
              onChange={onChange}
              name="gender"
              value={filt.gender}
              className="form-select d-flex ms-2 me-3"
              aria-label="Default select example"
            >
              {genders.map((gender) => (
                <option key={gender} value={gender}>
                  {gender}
                </option>
              ))}
            </select>
            <input
              onChange={onChange}
              name="name"
              value={filt.name}
              className="form-control me-3"
              type="search"
              placeholder="Name..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
