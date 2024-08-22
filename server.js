require('dotenv').config();
const express = require('express');
const path = require('path');  // Add this to handle file paths
const app = express();
const port = process.env.PORT || 5000;
const { Pool } = require('pg');
const cors = require('cors');

// Enable CORS
app.use(cors());

// Postgres connection
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Endpoint to get all notable members
app.get('/api/members', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM members');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// Endpoint to get a single notable member by ID
app.get('/api/members/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM members WHERE id = $1', [id]);
    if (result.rows.length > 0) {
      res.json(result.rows[0]);
    } else {
      res.status(404).send('Member not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// The "catchall" handler: for any request that doesn't match the API routes, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
