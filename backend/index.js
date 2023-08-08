const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.get('/api/users', async (req, res) => {
  try {
    const since = req.query.since || 0;
    const response = await axios.get(`https://api.github.com/users?since=${since}`);
    const users = response.data;
    const nextPageLink = response.headers.link;
    res.json({ users, nextPageLink });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub users' });
  }
});

app.get('/api/users/:username/details', async (req, res) => {
  try {
    const username = req.params.username;
    const response = await axios.get(`https://api.github.com/users/${username}`);
    const userDetails = response.data;
    res.json(userDetails);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub user details' });
  }
});

app.get('/api/users/:username/repos', async (req, res) => {
  try {
    const username = req.params.username;
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const userRepos = response.data;
    res.json(userRepos);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch GitHub user repositories' });
  }
});

const server = app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

module.exports = server;
