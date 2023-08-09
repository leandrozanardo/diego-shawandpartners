import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
  faTriangleExclamation,
  faEye,
} from "@fortawesome/free-solid-svg-icons";
import defaultAvatar from "../src/assets/img/defaultAvatar.png";

interface User {
  id: number;
  login: string;
  avatar_url: string;
}

const ITEMS_PER_PAGE = 20;

function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(
      `${process.env.REACT_APP_API_URL}/users?since=${
        (currentPage - 1) * ITEMS_PER_PAGE
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.users)) {
          setUsers(data.users);
        } else {
          setError(true);
          console.error("API response does not contain an array of users:", data);
        }
      })
      .catch((error) => {
        setError(true);
        console.error("Error fetching users:", error);
      });
  }, [currentPage]);

  return (
    <main className="main">
      <div className="UsersList container">
        <h1 className="text-center mb-5 title">GitHub Users</h1>
        {error ? (
          <div className="alert alert-warning" role="alert">
            <div className="text-center">
              <h2 className="mb-3">
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faTriangleExclamation}
                />{" "}
                Ops!{" "}
                <FontAwesomeIcon
                  className="text-warning"
                  icon={faTriangleExclamation}
                />
              </h2>
              <p>We were unable to load the user list.</p>
              <p>Please contact the system administrator.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <div className="col d-flex justify-content-center">
                {users.length === 0 ? (
                  <div className="spinner-border text-secondary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table
                      className="table table-sm table-striped"
                      style={{ width: "600px" }}
                    >
                      <thead>
                        <tr>
                          <th className="text-center">ID</th>
                          <th  style={{ width: "136px" }}>Profile Picture</th>
                          <th>Name</th>
                          <th className="text-center" style={{ width: "160px" }}>
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {users.map((user) => (
                          <tr key={user.id}>
                            <td className="align-middle text-center">
                              <strong>{user.id}</strong>
                            </td>
                            <td className="align-middle">
                              <img
                                src={user.avatar_url}
                                className="card-img-top img-fluid rounded"
                                alt="User Avatar"
                                style={{ width: "50px" }}
                                onError={(e) => {
                                  (e.target as HTMLImageElement).src =
                                    defaultAvatar;
                                }}
                              />
                            </td>
                            <td className="align-middle">{user.login}</td>
                            <td className="align-middle text-center">
                              <Link
                                to={`/user/${user.login}`}
                                className="btn btn-secondary"
                              >
                                <FontAwesomeIcon
                                  icon={faEye}
                                  className="me-1"
                                />{" "}
                                View Profile
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            <div className="row my-4">
              <div className="col d-flex justify-content-center">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() =>
                    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1))
                  }
                  disabled={currentPage === 1}
                >
                  <FontAwesomeIcon className="me-1" icon={faChevronLeft} /> Prev
                </button>
                <span className="mx-3">Page {currentPage}</span>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
                >
                  Next
                  <FontAwesomeIcon className="ms-1" icon={faChevronRight} />
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

export default UsersList;
