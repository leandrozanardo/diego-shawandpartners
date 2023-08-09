import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTriangleExclamation, faEye} from "@fortawesome/free-solid-svg-icons";
import {Modal, Button} from "react-bootstrap";
import defaultAvatar from "../src/assets/img/defaultAvatar.png";

interface UserDetails {
  id: number;
  login: string;
  html_url: string;
  created_at: string;
  avatar_url: string;
}

interface Repository {
  id: number;
  name: string;
  html_url: string;
}

function UserDetails() {
  const {username} = useParams<{username: string}>();
  const [user, setUser] = useState<UserDetails | null>(null);
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [loadingError, setLoadingError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/users/${username}/details`)
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          setLoadingError(true);
        } else {
          setUser(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
        setLoadingError(true);
      });

    fetch(`${process.env.REACT_APP_API_URL}/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepositories(data);
        } else {
          setLoadingError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching user repositories:", error);
        setLoadingError(true);
      });
  }, [username]);

  return (
    <main className="main">
      <div className="container">
        <h3 className="mb-4 title">User Details</h3>
        {loadingError ? (
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
              <p>We were unable to load the user details.</p>
              <p>Please contact your system administrator.</p>
            </div>
          </div>
        ) : user ? (
          <div className="card">
            <div className="row g-0">
              <div className="col-md-3 d-flex align-items-center justify-content-center">
                <img
                  src={user.avatar_url}
                  className="card-img-top img-fluid rounded "
                  alt="User Avatar"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = defaultAvatar;
                  }}
                />
              </div>
              <div className="col-md-9 d-flex align-items-center">
                <div className="card-body">
                  <p className="card-text">
                    <strong>ID:</strong> {user.id}
                  </p>
                  <p className="card-text">
                    <strong>Login:</strong> {user.login}
                  </p>
                  <p className="card-text">
                    <strong>Profile URL:</strong>{" "}
                    <a target="_blank" href={user.html_url}>{user.html_url}</a>
                  </p>
                  <p className="card-text">
                    <strong>Creation Date:</strong>{" "}
                    {new Date(user.created_at).toLocaleDateString()} -{" "}
                    {new Date(user.created_at).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>

                  <Button
                    variant="secondary"
                    onClick={() => setShowModal(true)}
                    className="btn-repositories"
                  >
                    <FontAwesomeIcon icon={faEye} className="me-1" />{" "}
                    View Repositories
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)} size="xl">
          <Modal.Header closeButton>
            <Modal.Title>Repositories</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="repositories-container">
              {repositories.length > 0 ? (
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>URL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {repositories.map((repo) => (
                        <tr key={repo.id}>
                          <td className="align-middle">{repo.id}</td>
                          <td className="align-middle">{repo.name}</td>
                          <td className="align-middle">
                            <a target="_blank" href={repo.html_url}>
                              {repo.html_url}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>No repositories found.</p>
              )}
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </main>
  );
}

export default UserDetails;
