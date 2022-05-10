import { Button, Dialog, DialogActions, DialogContent, TextField } from '@material-ui/core'
import React, { ChangeEvent, useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

interface LoginProps {
    isOpen: boolean;
    handleClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = ({isOpen, handleClose}: LoginProps) => {

    /**
     * lay context
     */
    const {toggleAuth} = useContext(AuthContext);

    /**
     * dat state cho username
     */
    const [username, setUsername] = useState("");

    const onChangUsername = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const onLoginSubmit =() => {
        toggleAuth(username);
        setUsername("");
        handleClose(false);
    }

    return (
        <>
            <Dialog open={isOpen} onClose={handleClose.bind(this, false)}>
                <DialogContent>
                    <TextField label="Username" onChange={onChangUsername} value={username} required />
                </DialogContent>

                <DialogActions>
                    <Button 
                    color="primary"
                    variant="contained"
                    onClick={onLoginSubmit}
                    disabled={username === ""}
                    >
                        Login
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default Login