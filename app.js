require('dotenv').config({path:".env"})
console.log('env', process.env.SECRET_KEY)

const myFetch = (path) => {
    return new Promise( (resolve, reject) => {
        fetch("https://api.themoviedb.org/3" + path + "?api_key=" + process.env.SECRET_KEY + "&query=Jack+Reacher")
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    }) 
}

myFetch("/search/movie")
    .then(data=> {

        // <div class="movie">
        //     <div class="movie-description">
        //         <div class="movie-title">Tomb Raider</div>
        //         <div class="movie-year">2012</div>
        //         <div class="movie-realisator">Thomas</div>
        //         <div class="movie-actor">Tom Cruise</div>
        //     </div>
        //     <div class="movie-image">
        //         <img src="https://m.media-amazon.com/images/I/8129a7-9A7L._AC_SX425_.jpg" alt="movie image" width="200px">
        //     </div>
        // </div>
        const movieListDOM = document.querySelector(".movie-list")
        console.log('res',data.results)

        data.results.forEach(movie => {
    
            

            const movieDOM = document.createElement("div")
            movieDOM.setAttribute("class", "movie")

            const movieDescriptionDOM = document.createElement("div")
            movieDescriptionDOM.setAttribute("class", "movie-description")
            movieDOM.appendChild(movieDescriptionDOM)

            const movieTitleDOM = document.createElement("div")
            movieTitleDOM.setAttribute("class", "movie-title")
            movieTitleDOM.innerHTML = movie.title
            movieDescriptionDOM.appendChild(movieTitleDOM)

            const movieRealisatorDOM = document.createElement("div")
            movieRealisatorDOM.setAttribute("class", "movie-realisator")
            movieRealisatorDOM.innerHTML = movie.popularity
            movieDescriptionDOM.appendChild(movieRealisatorDOM)

            const movieDateDOM = document.createElement("div")
            movieDateDOM.setAttribute("class", "movie-date")
            movieDateDOM.innerHTML = movie.release_date
            movieDescriptionDOM.appendChild(movieDateDOM)


            const movieImageDOM = document.createElement("img")
            movieImageDOM.setAttribute("src","https://image.tmdb.org/t/p/w500/uQBbjrLVsUibWxNDGA4Czzo8lwz.jpg")
            //movieImageDOM.setAttribute("class", "movie-image")
            //movieImageDOM.innerHTML = movie.popularity
            movieDOM.appendChild(movieImageDOM)

            movieListDOM.appendChild(movieDOM)
    
            // const titleDOM = document.querySelector('.movie-title')
            // const title = data.results[0].title
            // titleDOM.innerHTML = title
            // console.log('res',data.results[0].title, titleDOM)
        });

    })

