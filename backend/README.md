# GitHub API Proxy

This project sets up a simple Node.js server that acts as a proxy for GitHub API endpoints. It provides endpoints to fetch GitHub users, their details, and their repositories.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js: https://nodejs.org/
- npm (Node Package Manager): This comes with Node.js

### Installation

1. Clone the repository:

git clone https://github.com/leandrozanardo/diego-shawandpartners
cd diego-shawandpartners/backend

2. Install dependencies:

npm install


### Usage

1. Run the server:

npm start

- This will start the server on port 3001.

2. Open your browser or use API testing tools like Postman/Insomnia to access the following endpoints:

Fetch GitHub users: http://localhost:3001/api/users
Fetch details of a GitHub user: http://localhost:3001/api/users/{username}/details
Fetch repositories of a GitHub user: http://localhost:3001/api/users/{username}/repos

- Replace `{username}` with the GitHub username you want to fetch details for.

### Testing

To run the tests, execute the following command:

npm test

- This will run the Mocha tests for the server endpoints.
- The server must not be running when the tests are run

### Notes

- This project uses the Axios library to make HTTP requests to the GitHub API.
- Pagination for fetching users is supported through the "nextPageLink" in the response.
- Ensure that the server is running when testing the endpoints.

### Production api links

https://shawandpartners-backend-x0fz.onrender.com/api/users
https://shawandpartners-backend-x0fz.onrender.com/api/users/leandrozanardo/details
https://shawandpartners-backend-x0fz.onrender.com/api/users/leandrozanardo/repos

