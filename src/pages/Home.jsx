import React from "react";
import { Card, PaginationModule } from "../components";
import "./Home.css";

const Home = ({ list, object, onPageChanged }) => {
  return (
    <div className="contain">
      <div className="image "></div>
      <div className="list">
        <h1 className="fw-bold">Characters</h1>
        {list.length === 0 && (
          <h2 className="h1 text-danger fw-bold m-5">
            SORRY...SEARCH NOT FOUND
          </h2>
        )}
        <div className=" row my-3 text-white px-auto justify-content-center">
          {object.totalItems >= 1 && list.map((item) => <Card item={item} />)}
        </div>

        {list.length > 0 && (
          <PaginationModule object={object} onPageChanged={onPageChanged} />
        )}
      </div>
    </div>
  );
};

export default Home;
