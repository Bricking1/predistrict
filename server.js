const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

// Alap root endpoint
app.get('/', (req, res) => {
  res.send('Predistrict backend is running...');
});

// Új API végpont: status
app.get('/api/status', (req, res) => {
  res.json({ status: 'OK', message: 'API is working fine!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

