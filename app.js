import express from 'express';
import path from 'path';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

app.post('/', (req, res, next) => {
  if (!req.body.source) {
    res.status(400).json({ message: 'source missing' });
  }
  if (!req.body.destination) {
    res.status(400).json({ message: 'destination missing' });
  }
  if (!req.body.date) {
    res.status(400).json({ message: 'Date missing' });
  }

  res.status(200).json({
    indigo: Math.floor(Math.random() * 10000) + 10000,
    airAsia: Math.floor(Math.random() * 10000) + 10000,
    vistara: Math.floor(Math.random() * 10000) + 10000,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server running on port: ${port} in ${process.env.NODE_ENV} mode`
  );
});
