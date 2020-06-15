const Fat = require('fatsecret');
const express = require('express');

const fat = new Fat('7489bacf4f0946a8a9bd6250457ae093', '4ba6387fccdc44d18fd1d11a63203fc3');
const app = express();

app.get('/foods/search', async (req, res, next) => {
  try {
    const results = await fat.method('foods.search', {
      search_expression: req.query.expression,
      page_number: req.query.page,
      max_results: 30
    });
    res.json(results);
  } catch(err) {
    next(err);
  }
});

app.listen(1337, () => {
  console.log('listening on 1337');
});