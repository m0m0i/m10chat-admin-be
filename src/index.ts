import express from 'express';

const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

app.get('/', (req, res) => {
  res.send('woof!')
});

app.listen(port, () => {
  console.log(`🚀 Server ready at: http://localhost:${port}`)
})