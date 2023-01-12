import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

//interfaces to get the info from DB/API
interface Movie {
    id:string;
    rank:number;
    rankUpDown:string;
    title:string;
    fullTitle:string;
    year:number;
    image:string;
    crew:string;
    imDbRating:number;
    imDbRatingCount:number;
}
interface SpecificMovie{
    Title:"Guardians of the Galaxy Vol. 2",
    Year:"2017",
    Rated:"PG-13",
    Released:"05 May 2017",
    Runtime:"136 min",
    Genre:"Action, Adventure, Comedy",
    Director:"James Gunn",
    Writer:"James Gunn, Dan Abnett, Andy Lanning",
    Actors:"Chris Pratt, Zoe Saldana, Dave Bautista",
    Plot:"The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
    Language:"English",
    Country:"United States",
    Awards:"Nominated for 1 Oscar. 15 wins & 59 nominations total",
    Poster:"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
    Ratings:[],
    Metascore:"67",
    imdbRating:"7.6",
    imdbVotes:"681,990",
    imdbID:"tt3896198",
    Type:"movie",
    DVD:"22 Aug 2017",
    BoxOffice:"$389,813,101",
    Production:"N/A",
    Website:"N/A",
    Response:"True"
}


// getting all movies
const getAllMovies = async (req: Request, res: Response, next: NextFunction) => {
    // get some movies
    let result: AxiosResponse = await axios.get(`https://imdb-api.com/en/API/MostPopularMovies/k_1693r7ma`);
    let movies: [Movie] = result.data.items;
    return res.status(200).json(movies);
};

// getting a single movie
const getSpecificMovie = async (req: Request, res: Response, next: NextFunction) => {
    // get the movie id from the req
    let id: string = req.params.id;
    // get the movie
    let result: AxiosResponse = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=9696fe63`);
    let movie: SpecificMovie = result.data;
    return res.status(200).json(movie);
};



export default { getAllMovies,getSpecificMovie };