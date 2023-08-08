const express = require('express');
const axios = require('axios');
const router = express.Router();


router.get('/users', async (req, res) => {
    const { since } = req.query;

    try {
        const response = await axios.get(`https://api.github.com/users?since=${since}`);
        const users = response.data;
        const nextPageLink = response.headers.link;

        res.json({ users, nextPageLink });
    } catch (error) {
        console.error('Error fetching GitHub users:', error);
        res.status(500).json({ error: 'Failed to fetch GitHub users' });
    }
});


router.get('/users/:username/details', async (req, res) => {
    const { username } = req.params;

    try {
        const response = await axios.get(`https://api.github.com/users/${username}`);
        const userDetails = response.data;

        res.json(userDetails);
    } catch (error) {
        console.error('Error fetching GitHub user details:', error);
        res.status(500).json({ error: 'Failed to fetch GitHub user details' });
    }
});


router.get('/users/:username/repos', async (req, res) => {
    const { username } = req.params;

    try {
        const response = await axios.get(`https://api.github.com/users/${username}/repos`);
        const userRepos = response.data;

        res.json(userRepos);
    } catch (error) {
        console.error('Error fetching GitHub user repositories:', error);
        res.status(500).json({ error: 'Failed to fetch GitHub user repositories' });
    }
});


module.exports = router;