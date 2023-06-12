import moviesData from '../../json/moviesData.js'

export const getMovies=(req, res)=>{
        res.send({status:200,data:moviesData});
}