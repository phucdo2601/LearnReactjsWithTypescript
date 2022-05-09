
import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ChangeEvent, Fragment, useContext, useState } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import { MovieContext } from './../contexts/MovieContext';

const useStyles = makeStyles((theme: Theme) => createStyles({
    movieInput: {
        marginRight: '5px'
    },
    movieChip:{
        fontSize: "2rem",
        padding: "30px 10px",
        margin: "5px"
    }
}))

const Movies = () => {

    /**
     * useStyles
     */
    const classes = useStyles();

    /**
     * su dung state cho ham input phim nguoi dung go vao
     */
     const [movie, setMovie] = useState('');

     const {theme} = useContext(ThemeContext);
     const chipTheme = theme as Exclude<PropTypes.Color, "inherit">

    const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setMovie(event.target.value);
    }

    /**
     * tao ra context movie
     */
    const {movies, addMovie, deleteMovie} = useContext(MovieContext);

    return (
        <>
            <Box display='flex' justifyContent='center' my={10}>
                <TextField
                    label="Your favorite movie ..."
                    variant="outlined"
                    className={classes.movieInput}
                    onChange={onMovieInputChange}
                    value={movie}
                />
                <Button variant="contained" color="primary"
                    onClick={
                        () => {
                            addMovie(movie)
                            setMovie("")
                        }
                    }
                    >
                    Add
                </Button>
            </Box>

            <Box display="flex" justifyContent="center" flexWrap="wrap" mx={5}>
                    {movies.map(movie => (
                        <Chip key={movie.id} label={movie.title} clickable color={chipTheme}
                        className={classes.movieChip}
                        onDelete={deleteMovie.bind(this, movie.id)}
                        />
                    ))}
            </Box>
        </>
    )
}

export default Movies