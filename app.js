'use strict';

import path from 'path';
import express from 'express';

const port = process.env.PORT || 3000;
const app = express();


app.get('*', (req, res) => {
  res.send('Hello');
})

app.listen(port, (err) => {
  if(err) throw err;
  console.log('Server is running at localhost:3000');
})
