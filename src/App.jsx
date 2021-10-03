import React, { useEffect, useState } from "react";
import "./App.css";

import RowList from "./Components/Rowlist";
import Tmdb from "./Components/Tmdb";
import FeaturedMovie from "./Components/FeaturedMovie";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  const [listMovie, setlistMovie] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [blacknavbar, setblacknavbar] = useState(false);

  // função a ser executada assim que carregar o site
  useEffect(() => {
    // obtendo lista com todos os filmes separados por categoria
    const getAllMovies = async () => {
      let listMovie = await Tmdb.getHomeMovie();
      setlistMovie(listMovie);

      //  selecionando a lista de filmes da netfli
      const originals = listMovie.filter((item) => item.slug === "originals");

      // generando um nro aleatorio dentre da quantidade de filmes
      const randomMovie = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );

      // selectionando filme como o nro  aletarorio gerado
      const movie = originals[0].items.results[randomMovie];

      // obtendo as infomar;oes completas do filme

      const movieInfo = await Tmdb.getMovieInf(movie.id,'tv')
       setFeaturedMovie(movieInfo)
    };
    getAllMovies();
  }, []);

  useEffect(()=>{
    const scrollListener = ()=>{
      if (window.scrollY > 10) {
        setblacknavbar(true)
      }else{
        setblacknavbar(false)
      }
    }

    window.addEventListener('scroll',scrollListener)

    return ()=>{
      window.removeEventListener('scroll',scrollListener)
    }
  },[])


  return (
    <div className="app">
      <Navbar black={blacknavbar}/>
      {featuredMovie && <FeaturedMovie movie={featuredMovie}/>}
      <section className="list--movies">
        {listMovie.map((item, key) => (
          <RowList title={item.title} items={item.items} key={key} />
        ))}
      </section>
      <Footer/>

      {listMovie.length <= 0 && <div className="loading">
        <img src="https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif" alt="" />
      </div>}



    </div>
  );
}

export default App;
