import {TopMovieActionType} from "../reducers/types"


interface TopMovie {
    imdbID: string;
    Title: string;
    Watched: boolean;
}

export type TopMovieState = TopMovie[];

const {GET_TOP_MOVIES, TOGGLE_TOP_MOVIES_WATCHED} = TopMovieActionType

/**
 * | CODE |: Distrinct implict union
 */
type TopMovieAction = 
 | {
    type: typeof GET_TOP_MOVIES, 
    payload: TopMovie[]
} | {
    type: typeof TOGGLE_TOP_MOVIES_WATCHED, 
    payload: string
}

export const topMovieReducer = (state : TopMovieState, action: TopMovieAction) => {
    switch (action.type) {
        case GET_TOP_MOVIES:
            return action.payload;

        case TOGGLE_TOP_MOVIES_WATCHED:
            return state.map(
                topMovie => topMovie.imdbID === action.payload ? {
                    ...topMovie, Watched: !topMovie.Watched
                } : topMovie
            )

        default:
            return state;
    }
}