import React from 'react';

import './footer.css'
// eslint-disable-next-line import/no-anonymous-default-export
export default ()=>{

    return (
        <footer className='footer-content'>
            <div className="redes-sociais">
                <a href="https://www.linkedin.com/in/victord08/"><i class="fab fa-linkedin-in"></i></a>
                <a href="https://github.com/VictorD19"><i class="fab fa-github"></i></a>
                <a href="https://api.whatsapp.com/send?phone=49998218294&text=Oi%20tudo%20gostaria%20de%20falar%20contigo"><i class="fab fa-whatsapp"></i></a>
            </div>
            <div className="creditos-tmdb">
                <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="" />
                <div>Os creditos dos filmes são para The Movie Database</div>
            </div>
            <div className='description-geral'>
                Site Feito apenas para fines didacticos. By: VictorD
            </div>
        </footer>
    );
}