import React from "react";

const Card = ({ item }) => {
  return (
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
          <img src={item.image} className="img-fluid rounded-start" alt="..." />
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
            <span className="card-text text-muted">Last known location:</span>

            <p className="card-text">{item.location.name}</p>
            <span className="card-text text-muted">Created at:</span>

            <p className="card-text">
              {item.created.split("T")[0].split("-").reverse().join("/")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
