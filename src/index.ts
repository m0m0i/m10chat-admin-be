import express from 'express';
import { ErrorWithStatus } from "../types";

const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

function error(status: number, msg: string) {
  const err = new Error(msg) as ErrorWithStatus;
  err.status = status;
  return err;
}

app.get('/', (req, res) => {
  res.send('woof!')
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`)
})