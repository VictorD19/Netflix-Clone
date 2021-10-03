const API_KEY = "6c982d1756777c5cc3cb9bf986975334";
const URL_BASE = "https://api.themoviedb.org/3/";

/* Lista de filme a serem criada
    Originais 
    Top ranting
    en alta
    comedia
    terror
    romance
    documentario
    ação
*/

// função para fazer uma requisição pra api do tmdb
const getMovies = async (endpoint) => {
  const req = await fetch(`${URL_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeMovie: async () => {
    return [
      {
        slug: "originals",
        title: "Originais de Neflix",
        items: await getMovies(
          `discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "topranting",
        title: "En Alta",
        items: await getMovies(
          `movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "trending",
        title: "Recomendados",
        items: await getMovies(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await getMovies(
          `discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await getMovies(
          `discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "horror",
        title: "Terror",
        items: await getMovies(
          `discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comedia",
        items: await getMovies(
          `discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentario",
        items: await getMovies(
          `discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
  getMovieInf: async (movieId, type) => {
    let inf = {};

    if (movieId) {

      switch (type) {
        case "movie":
          inf = await getMovies(
            `movie/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
          
        case 'tv':
          inf = await getMovies(
            `tv/${movieId}?language=pt-BR&api_key=${API_KEY}`
          );
          break;
          default:
            inf = null;
          break;
      }
    }
    return inf
  },
};
