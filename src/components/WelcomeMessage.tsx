import React, { useContext } from 'react'
import { Box } from '@mui/material';
import { AuthContext } from '../contexts/AuthContext';

interface WelcomeMessageProps{
    position: string;
    /**
     * co truyen tham so vao bien nay hay khong cung dc
     */
    country?: string;
}

const WelcomeMessage = ({position, country = "Viet Nam"} :WelcomeMessageProps) => {

  const {authInfo: {username}} = useContext(AuthContext);

  return (
    <Box mb={1}>
        Welcome {username} {position} from {country}
    </Box>
  )
}

export default WelcomeMessage