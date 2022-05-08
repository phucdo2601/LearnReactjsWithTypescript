import React from 'react'
import { Box } from '@mui/material';

interface WelcomeMessageProps{
    position: string;
    /**
     * co truyen tham so vao bien nay hay khong cung dc
     */
    country?: string;
}

const WelcomeMessage = ({position, country = "Viet Nam"} :WelcomeMessageProps) => {
  return (
    <Box mb={1}>
        Welcome {position} from {country}
    </Box>
  )
}

export default WelcomeMessage