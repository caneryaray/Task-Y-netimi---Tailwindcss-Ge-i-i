const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get('/api/tasks', (req, res) => {
  res.json([]);
});

app.get('/api/team', (req, res) => {
  res.json([]);
});

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
});