import app from './app';

const port = 8080;

app.listen(port, () => {
  // TODO: Add `winston` logging framework, replace below
  // tslint:disable-next-line:no-console
  console.log(`Example app listening on port ${port}`);
});
