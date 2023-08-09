# User Details App (Front-end)

The User Details App is a React application that fetches and displays user details and repositories from a backend API.

## Getting Started

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js: https://nodejs.org/
- npm (Node Package Manager): This comes with Node.js

### Installation

1. Clone the repository:

git clone https://github.com/leandrozanardo/diego-shawandpartners
cd user-details-app

2. Install dependencies:

npm install

3. Run the development server:

npm start

- Open your browser and access the app at http://localhost:3000

Enter a GitHub username in the URL to view user details and repositories

### Components
The app consists of the following components:

UserDetails Component: Displays user details including ID, login, profile URL, and creation date.
Repositories Component: Lists user repositories with their IDs, names, and URLs.
API Endpoints
The front-end app communicates with the following backend API endpoints:

GET api/users: Fetches users information
GET /api/users/:username/details: Fetches user details.
GET /api/users/:username/repos: Fetches user repositories.

- Production api links
https://shawandpartners-backend-x0fz.onrender.com/api/users
https://shawandpartners-backend-x0fz.onrender.com/api/users/leandrozanardo/details
https://shawandpartners-backend-x0fz.onrender.com/api/users/leandrozanardo/repos

### Styling

The project uses Bootstrap for styling. You can customize styles in the src/css directory.

### Troubleshooting

If you encounter any issues:

Ensure you have a stable internet connection.
Double-check the correctness of the GitHub username entered.
Verify the backend API server is running.

### Production

To build execute the following command:

npm run build

- For production environments it is necessary to change the REACT_APP_API_URL path in the .ENV file

- In my project it is REACT_APP_API_URL=https://shawandpartners-backend-x0fz.onrender.com/api

