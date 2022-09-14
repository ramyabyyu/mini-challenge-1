import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const ListingDetail = () => {
  const params = useParams();

  const listDetail = data[params.id - 1];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card rounded shadow d-flex flex-column justify-content-center align-items-center p-5">
            <img
              src={listDetail.image}
              alt=""
              width={100}
              height={100}
              className="rounded-circle border border-danger border-3"
              style={{ objectFit: "cover" }}
            />
            <h3 className="mt-2">@{listDetail.username}</h3>
            <div className="d-flex mt-3">
              <div className="me-4 d-flex flex-column align-items-center">
                <h4>Followers</h4>
                <h6>{listDetail.follower}</h6>
              </div>
              <div className="me-4 d-flex flex-column align-items-center">
                <h4>Following</h4>
                <h6>{listDetail.following}</h6>
              </div>
            </div>
            <div className="my-5">
              <Link to="/" className="text-decoration-none">
                <h3>Back</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingDetail;
