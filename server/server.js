import express from 'express';
import journalRoutes from './routes/journalRoutes.js'

const app = express();
const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// });

app.use('/', journalRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
