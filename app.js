const express = require('express');
const postsRouter = require('./routers/posts');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Server del mio blog');
});

// registro il router con il prefisso /posts: dentro il router le rotte partono da '/'
app.use('/posts', postsRouter);

app.listen(port, () => {
  console.log(`Server in ascolto su http://localhost:${port}`);
});
