import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import data from "../data.json";

const Listings = () => {
  const [listingsAcc, setListingsAcc] = useState(data);

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            {listingsAcc.map((list) => (
              <li
                className="list-group-item bg-dark text-white mb-1 p-3 rounded"
                key={list.id}
              >
                <Link
                  //   to={`/${list.id}?username=${list.username}?image=${list.image}?follower=${ list.follower}?following=${list.following}`}
                  to={`${list.id}`}
                  className="text-decoration-none text-white"
                >
                  <div className="d-flex">
                    <img
                      src={list.image}
                      alt="image"
                      width={80}
                      className="rounded-pill me-4"
                    />
                    <div>
                      <h5>@{list.username}</h5>
                      <p className="p-0 m-0">Followers: {list.follower}</p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Listings;
