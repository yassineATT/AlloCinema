require('dotenv').config({path:".env"})
console.log('env', process.env.SECRET_KEY)

const myFetch = (path) => {
    return new Promise( (resolve, reject) => {
        fetch("https://api.themoviedb.org/3" + path + "?api_key=" + process.env.SECRET_KEY)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(e => reject(e))
    }) 
}

myFetch("/movie/550")
    .then(data=> {
        console.log('res',data)
    })


