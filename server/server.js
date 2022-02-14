import express from 'express';
import cors from 'cors';
import journalRoutes from './routes/journalRoutes.js'

// const express = require('express');
// const journalRoutes = require('./routes/journalRoutes.js');

const app = express();
const port = 8000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.use(express.json());
app.use(cors());
app.use('/', journalRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`); 
});
