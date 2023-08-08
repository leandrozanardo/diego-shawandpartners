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


/*   const leandro = {
    login: "leandrozanardo",
    id: 28871373,
    node_id: "MDQ6VXNlcjI4ODcxMzcz",
    avatar_url: "https://avatars.githubusercontent.com/u/28871373?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/leandrozanardo",
    html_url: "https://github.com/leandrozanardo",
    followers_url: "https://api.github.com/users/leandrozanardo/followers",
    following_url:
      "https://api.github.com/users/leandrozanardo/following{/other_user}",
    gists_url: "https://api.github.com/users/leandrozanardo/gists{/gist_id}",
    starred_url:
      "https://api.github.com/users/leandrozanardo/starred{/owner}{/repo}",
    subscriptions_url:
      "https://api.github.com/users/leandrozanardo/subscriptions",
    organizations_url: "https://api.github.com/users/leandrozanardo/orgs",
    repos_url: "https://api.github.com/users/leandrozanardo/repos",
    events_url: "https://api.github.com/users/leandrozanardo/events{/privacy}",
    received_events_url:
      "https://api.github.com/users/leandrozanardo/received_events",
    type: "User",
    site_admin: false,
    name: "Leandro Zanardo",
    teste: "leandrozanardo",
    company: null,
    blog: "https://www.linkedin.com/in/leandro-zanardo/",
    location: "Indaiatuba, SP - Brasil",
    email: null,
    hireable: true,
    bio: "Full-Stack Web Developer",
    twitter_username: null,
    public_repos: 6,
    public_gists: 0,
    followers: 2,
    following: 1,
    created_at: "2017-05-22T17:04:47Z",
    updated_at: "2023-08-08T01:13:10Z",
  };

  const repos = [
    {
      id: 597906228,
      node_id: "R_kgDOI6NTNA",
      name: "7Secure",
      full_name: "leandrozanardo/7Secure",
      private: false,
      owner: {
        login: "leandrozanardo",
        id: 28871373,
        node_id: "MDQ6VXNlcjI4ODcxMzcz",
        avatar_url: "https://avatars.githubusercontent.com/u/28871373?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/leandrozanardo",
        html_url: "https://github.com/leandrozanardo",
        followers_url: "https://api.github.com/users/leandrozanardo/followers",
        following_url:
          "https://api.github.com/users/leandrozanardo/following{/other_user}",
        gists_url:
          "https://api.github.com/users/leandrozanardo/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/leandrozanardo/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/leandrozanardo/subscriptions",
        organizations_url: "https://api.github.com/users/leandrozanardo/orgs",
        repos_url: "https://api.github.com/users/leandrozanardo/repos",
        events_url:
          "https://api.github.com/users/leandrozanardo/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/leandrozanardo/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/leandrozanardo/7Secure",
      description: "Teste de front-end, CRUD para consumir API da empresa",
      fork: false,
      url: "https://api.github.com/repos/leandrozanardo/7Secure",
      forks_url: "https://api.github.com/repos/leandrozanardo/7Secure/forks",
      keys_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/collaborators{/collaborator}",
      teams_url: "https://api.github.com/repos/leandrozanardo/7Secure/teams",
      hooks_url: "https://api.github.com/repos/leandrozanardo/7Secure/hooks",
      issue_events_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/issues/events{/number}",
      events_url: "https://api.github.com/repos/leandrozanardo/7Secure/events",
      assignees_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/branches{/branch}",
      tags_url: "https://api.github.com/repos/leandrozanardo/7Secure/tags",
      blobs_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/languages",
      stargazers_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/stargazers",
      contributors_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/contributors",
      subscribers_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/subscribers",
      subscription_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/subscription",
      commits_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/compare/{base}...{head}",
      merges_url: "https://api.github.com/repos/leandrozanardo/7Secure/merges",
      archive_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/downloads",
      issues_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/labels{/name}",
      releases_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/leandrozanardo/7Secure/deployments",
      created_at: "2023-02-06T00:43:32Z",
      updated_at: "2023-02-06T01:00:08Z",
      pushed_at: "2023-03-17T07:13:28Z",
      git_url: "git://github.com/leandrozanardo/7Secure.git",
      ssh_url: "git@github.com:leandrozanardo/7Secure.git",
      clone_url: "https://github.com/leandrozanardo/7Secure.git",
      svn_url: "https://github.com/leandrozanardo/7Secure",
      homepage: null,
      size: 1636,
      stargazers_count: 0,
      watchers_count: 0,
      language: "CSS",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 4,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 4,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 675890083,
      node_id: "R_kgDOKElDow",
      name: "diego-shawandpartners",
      full_name: "leandrozanardo/diego-shawandpartners",
      private: false,
      owner: {
        login: "leandrozanardo",
        id: 28871373,
        node_id: "MDQ6VXNlcjI4ODcxMzcz",
        avatar_url: "https://avatars.githubusercontent.com/u/28871373?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/leandrozanardo",
        html_url: "https://github.com/leandrozanardo",
        followers_url: "https://api.github.com/users/leandrozanardo/followers",
        following_url:
          "https://api.github.com/users/leandrozanardo/following{/other_user}",
        gists_url:
          "https://api.github.com/users/leandrozanardo/gists{/gist_id}",
        starred_url:
          "https://api.github.com/users/leandrozanardo/starred{/owner}{/repo}",
        subscriptions_url:
          "https://api.github.com/users/leandrozanardo/subscriptions",
        organizations_url: "https://api.github.com/users/leandrozanardo/orgs",
        repos_url: "https://api.github.com/users/leandrozanardo/repos",
        events_url:
          "https://api.github.com/users/leandrozanardo/events{/privacy}",
        received_events_url:
          "https://api.github.com/users/leandrozanardo/received_events",
        type: "User",
        site_admin: false,
      },
      html_url: "https://github.com/leandrozanardo/diego-shawandpartners",
      description: "Shawandpartners full-stack test",
      fork: false,
      url: "https://api.github.com/repos/leandrozanardo/diego-shawandpartners",
      forks_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/forks",
      keys_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/keys{/key_id}",
      collaborators_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/collaborators{/collaborator}",
      teams_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/teams",
      hooks_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/hooks",
      issue_events_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/issues/events{/number}",
      events_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/events",
      assignees_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/assignees{/user}",
      branches_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/branches{/branch}",
      tags_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/tags",
      blobs_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/git/blobs{/sha}",
      git_tags_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/git/tags{/sha}",
      git_refs_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/git/refs{/sha}",
      trees_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/git/trees{/sha}",
      statuses_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/statuses/{sha}",
      languages_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/languages",
      stargazers_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/stargazers",
      contributors_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/contributors",
      subscribers_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/subscribers",
      subscription_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/subscription",
      commits_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/commits{/sha}",
      git_commits_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/git/commits{/sha}",
      comments_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/comments{/number}",
      issue_comment_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/issues/comments{/number}",
      contents_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/contents/{+path}",
      compare_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/compare/{base}...{head}",
      merges_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/merges",
      archive_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/{archive_format}{/ref}",
      downloads_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/downloads",
      issues_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/issues{/number}",
      pulls_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/pulls{/number}",
      milestones_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/milestones{/number}",
      notifications_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/notifications{?since,all,participating}",
      labels_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/labels{/name}",
      releases_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/releases{/id}",
      deployments_url:
        "https://api.github.com/repos/leandrozanardo/diego-shawandpartners/deployments",
      created_at: "2023-08-08T01:14:23Z",
      updated_at: "2023-08-08T02:13:03Z",
      pushed_at: "2023-08-08T03:43:32Z",
      git_url: "git://github.com/leandrozanardo/diego-shawandpartners.git",
      ssh_url: "git@github.com:leandrozanardo/diego-shawandpartners.git",
      clone_url: "https://github.com/leandrozanardo/diego-shawandpartners.git",
      svn_url: "https://github.com/leandrozanardo/diego-shawandpartners",
      homepage: null,
      size: 19,
      stargazers_count: 0,
      watchers_count: 0,
      language: "JavaScript",
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: true,
      has_pages: false,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: "public",
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ];

  useEffect(() => {
    setUser(leandro);
    setRepositories(repos);
  }, []); */

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
              <p>We were unable to load the user list.</p>
              <p>Please contact your system administrator.</p>
            </div>
          </div>
        ) : user ? (
          <div className="card">
            <div className="row g-0">
              <div className="col-md-3">
                <img
                  src={user.avatar_url}
                  className="card-img-top img-fluid"
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
                    <a href={user.html_url}>{user.html_url}</a>
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
                    View Repositories{" "}
                    <FontAwesomeIcon icon={faEye} className="me-1" />{" "}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading user details...</p>
        )}

        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
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
                          <td>{repo.id}</td>
                          <td>{repo.name}</td>
                          <td>
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
