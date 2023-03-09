import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  // TODO: Add `winston` logging framework, replace below
  // tslint:disable-next-line:no-console
  console.log(`Example app listening on port ${port}`);
});
