import axios from "axios";
import { createContext, ReactNode, useReducer } from "react"
import { topMovieReducer, TopMovieState } from "../reducers/TopMovieReducer";
import { TopMovieActionType } from "../reducers/types";
import topMoviesInfo from "../services/getTopMovies";

const { GET_TOP_MOVIES, TOGGLE_TOP_MOVIES_WATCHED } = TopMovieActionType

interface TopMovieContextProps {
    children: ReactNode;
}

interface TopMovieContextDefault {
    topMovies: TopMovieState;
    getTopMovies: () =>Promise<void>;
    toggleWatched: (id: string) => void;
}

const topNoviesDefault: TopMovieState = []

export const TopMovieContext = createContext<TopMovieContextDefault>(
    {
        topMovies: topNoviesDefault,
        getTopMovies: () => Promise.resolve(void 0),
        toggleWatched: (id: string) => {}
    }
);


const TopMovieContextProvider = ({ children }: TopMovieContextProps) => {
    const [topMovies, dispatch] = useReducer(topMovieReducer, topNoviesDefault)

    /**
     * get top movie from api
     * http://www.omdbapi.com/?i=tt0111161&apikey=fe5a9562
     */
    const getTopMovies = async () => {
        /**
         * Asynce await cho mot thang
         */
        // const topMovies = await axios.get(`http://www.omdbapi.com/?i=tt4154664&apikey=fae238cb`)

        /**
         * Async await cho nhieu thang
         */
        const topMovies = await Promise.all(topMoviesInfo);
        dispatch(
             /**
                 * payload danh cho get 1 info
                 */
                // payload: [{...topMovies.data, Watched: false}]
            {
                type: GET_TOP_MOVIES,
               payload: topMovies.map(topMovie =>({
                   ...topMovie.data, 
                   Watched: false.valueOf,
               }))

            }
        )
    }

    /**
     * toggle watched
     */
    const toggleWatched = (imdbID: string) =>{
        dispatch(
            {
                type: TOGGLE_TOP_MOVIES_WATCHED,
                payload: imdbID,
        }
            
            )
    }

    const topMovieContextData = {
        topMovies,
        getTopMovies,
        toggleWatched
    }

    return (
        <TopMovieContext.Provider value={topMovieContextData}>
            {children}
        </TopMovieContext.Provider>
    )

}

export default TopMovieContextProvider