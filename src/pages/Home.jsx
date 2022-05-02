import React from "react";
import PaginationModule from "../components/PaginationModule";
import "./Home.css";

const Home = ({ list, object, onPageChanged }) => {
  return (
    <div className="contain">
      <div className="image "></div>
      <div className="list">
        <h1 className="fw-bold">Characters</h1>
        <div className=" row my-3 text-white px-auto justify-content-center">
          {list.lenght !== 0 &&
            list.map((item) => (
              <div
                key={item.id}
                className="col-6 card m-2 bg-dark text-start p-0"
                style={{
                  maxWidth: "500px",
                  minWidth: "500px",
                  maxHeight: "168px",
                  minHeight: "168px",
                }}
              >
                <div className="row g-0">
                  <div className="col-4">
                    <img
                      src={item.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-8 my-auto">
                    <div className="card-body">
                      <span className="card-title h4 fw-bold">{item.name}</span>
                      <p className="card-text">
                        {item.status === "Alive" ? (
                          <span>&#128994;</span>
                        ) : item.status === "Dead" ? (
                          <span>&#128308;</span>
                        ) : (
                          <span>&#9898;</span>
                        )}{" "}
                        {item.status} - {item.species} - {item.gender}
                      </p>
                      <span className="card-text text-muted">
                        Last known location:
                      </span>

                      <p className="card-text">{item.location.name}</p>
                      <span className="card-text text-muted">Created at:</span>

                      <p className="card-text">
                        {item.created
                          .split("T")[0]
                          .split("-")
                          .reverse()
                          .join("/")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {list.lenght !== 0 && (
          <PaginationModule object={object} onPageChanged={onPageChanged} />
        )}
      </div>
    </div>
  );
};

export default Home;
