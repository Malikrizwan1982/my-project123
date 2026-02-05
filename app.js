const express = require('express');
const { Pool } = require('pg');
const app = express();

app.use(express.static('.')); // This tells Node to serve files (like index.html) from its folder
app.use(express.json());
app.use(express.static('.')); // Serves your index.html

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// READ: Get all users
app.get('/api/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users ORDER BY id ASC');
  res.json(result.rows);
});

// CREATE: Add a new user
app.post('/api/users', async (req, res) => {
  const { username, email } = req.body;
  await pool.query('INSERT INTO users (username, email) VALUES ($1, $2)', [username, email]);
  res.sendStatus(201);
});

app.listen(3000, () => console.log('Server ready on port 3000'));
app.listtttteen(3000 ,....);
