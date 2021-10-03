import React from 'react';
import './featuredmovie.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({movie})=>{

    if (movie.overview ==='') {
        movie.overview = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quasi dignissimos, delectus cupiditate repellendus pariatur ea, voluptate omnis quas placeat temporibus ab, quia praesentium recusandae dolor corrupti maiores labore autem.'
    }

    let description = movie.overview
    if (description.length > 200) {
        description = description.substring(0.200)+'...'
        
    }


    return ( 
    
    <div className='feature--movie' 
        style={{
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage:`url('https://image.tmdb.org/t/p/original${movie.backdrop_path}')`,
                }} >

        <div className="feature--bg-vertical">
        <div className="feature--bg-horizontal">
        <div className="feature--title">{movie.original_name}</div>
        <div className="feature--info">
            <div className="featured-points">{movie.vote_average} pontos</div>
            <div className="featured-year">2020</div>
            <div className="featured-season">{movie.number_of_seasons} temporada{movie.number_of_seasons>1 ? 's': ''}</div>
        </div>
        <div className="feature--description" >{description }</div>
        <div className="feature--btn-main">
            <a href="/" className="btn-play feature--buttons">▶ Assitir</a>
            <a href="/" className="btn-inf feature--buttons">ℹ️ Mais Informações</a>
        </div>
        </div>
        </div>
    </div> );
}