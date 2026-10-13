const express = require('express');
const router = express.Router();
const posts = require('../data/posts');

// Convenzioni REST: risorsa al plurale, il verbo HTTP dice l'operazione

// index → GET /posts
router.get('/', (req, res) => {
  // BONUS: lista in json
  res.json(posts);
});

// show → GET /posts/:id
router.get('/:id', (req, res) => {
  // req.params.id è una STRINGA: la converto per confrontarla con l'id numerico
  const id = parseInt(req.params.id);
  // BONUS: singolo post in json
  const post = posts.find(post => post.id === id);
  res.json(post);
});

// store → POST /posts
router.post('/', (req, res) => {
  res.send('Creazione di un nuovo post');
});

// update → PUT /posts/:id
router.put('/:id', (req, res) => {
  res.send(`Modifica integrale del post ${req.params.id}`);
});

// modify → PATCH /posts/:id
router.patch('/:id', (req, res) => {
  res.send(`Modifica parziale del post ${req.params.id}`);
});

// destroy → DELETE /posts/:id
router.delete('/:id', (req, res) => {
  res.send(`Cancellazione del post ${req.params.id}`);
});

module.exports = router;
