import { Button, Chip } from '@material-ui/core'
import { AppBar, Box, FormControl, MenuItem, Select, Toolbar, Typography } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles'
import { Theme } from '@mui/system'
import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import WelcomeMessage from './WelcomeMessage'
import { ProgressContext } from '../contexts/ProgressContext';
import { ThemeContext } from '../contexts/ThemeContext'
import Login from './Login'
import { AuthContext } from '../contexts/AuthContext'


const useStyles = makeStyles((theme: Theme) => createStyles({
    positionSelect: {
        color: "white",
        borderBottom: "1px solid white"
    }
}))

const Navbar = () => {

    //style
    const classes = useStyles();

    /**
     * moc context tu ProgressContextProvider
     */
    const {lastTime, status} = useContext(ProgressContext);

    const {authInfo: {isAuthenticated}, toggleAuth} = useContext(AuthContext);

    /**
     * dat bien trang thai mo khung nhap login
     */
    const [loginOpen, setLoginOpen] = useState(false);

    /**
     * moc context tu ThemeContextProvider
     */
    const {theme} = useContext(ThemeContext);

    //useState => dung tao ra bien thoi gian tren giao dien
    const [time, setTime] = useState<Date>(() => new Date(Date.now()));

    //useEffect
    /**
     * De lap lai hay trong truong hop nay la dem chuoi thoi gian thuc
     */
    useEffect(() => {
        const timer = setInterval(() => setTime(new Date(Date.now())), 1000);
        return () => clearInterval(timer);
    }, [])

    // useState
    const [position, setPosition] = useState<string>('Full-stack Developer');

    const onPositionChange = (event: any) => {
        setPosition(event.target.value as string)
    }

    return (
        <AppBar position='static' color={theme}>
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    width={1}
                    py={2}
                >
                    <Typography variant='h6'>
                        My Movie
                    </Typography>

                    <Box
                        textAlign="center"
                    >
                        <WelcomeMessage position={position} />
                        <Chip label={`Last time working on this project: ${lastTime} -Status: ${status}`} />
                        <Box mt={1}>
                            <FormControl>
                                <Select
                                    value={position}
                                    className={classes.positionSelect}
                                    onChange={(event) => onPositionChange(event)}
                                >
                                    <MenuItem value='Full-stack Developer'>
                                        Full-stack Developer
                                    </MenuItem>
                                    <MenuItem value='Front-end Developer'>
                                        Front-end Developer
                                    </MenuItem>
                                    <MenuItem value='Back-end Developer'>
                                        Back-end Developer
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                    <Box
                        textAlign="center"
                    >
                        <Box my={1}>
                            <Typography variant="h6">
                                {time.toUTCString()}
                            </Typography>
                        </Box>
                        <Button variant="contained" onClick={
                            isAuthenticated? toggleAuth.bind(this, ""):
                            setLoginOpen.bind(this, true)
                            }>
                            {isAuthenticated ? "Logout":"Login" }
                        </Button>
                    </Box>
                    <Login isOpen={loginOpen} handleClose={setLoginOpen} />

                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar