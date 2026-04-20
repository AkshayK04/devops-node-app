const express = require('express');
const app = express();

const PORT = 3000;

// Home route
app.get('/', (req, res) => {
  res.send('🚀 DevOps Node App Running, checking if ci cd wokring');
});

// CPU stress route
app.get('/stress', (req, res) => {
  const start = Date.now();
  while (Date.now() - start < 5000) {
    // heavy CPU load for 5 seconds
  }
  res.send('🔥 Server stressed for 5 seconds');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
