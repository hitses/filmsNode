var express = require('express');
var router = express.Router();
var axios = require('axios')

module.exports = router;

router.get('/', async function(req, res, next){
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_POPULAR_URL = 'movie/popular';
  const API_KEY = 'a94db6e1acf929e6c3d28e88dc1bb386';

  let films;

  let arrayFilms = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY);
  films = arrayFilms.data.results;

  res.render('index', {
    title: 'Jero',
    films
  });
});

/* router.get(`/:title`, async function(req, res, next){
  const API_URL = 'https://api.themoviedb.org/3/';
  const API_POPULAR_URL = 'movie/popular';
  const API_KEY = 'a94db6e1acf929e6c3d28e88dc1bb386';
  const title = req.params.title

  let films;

  let arrayFilms = await axios.get(API_URL + API_POPULAR_URL + '?api_key=' + API_KEY);
  films = arrayFilms.data.results.find(title);

  res.render('index', {
    title: 'Jero',
    films
  });
}); */