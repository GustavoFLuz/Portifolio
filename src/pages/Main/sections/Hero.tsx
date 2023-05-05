import { Box, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { configs } from '../../../shared/constants'

export const Hero = () => {
    const [wordState, setWordState] = React.useState("");
    const word = "GustavoFLuz"
    
    useEffect(() => {
        if (wordState.length < word.length)
            setTimeout(() => {
                setWordState(wordState + word[wordState.length])
            }, 200)
    }, [wordState])

    return (
        <Box sx={{
            width: '100%', height: 'calc(100vh - ' + configs.navbarHeight + ')',
            display: "flex", flexDirection: { xs: 'column', md: "row" }, alignItems: "center", justifyContent: "space-around", pb: 3,
        }}>
            <Box>
                <Typography variant="h3">{wordState}</Typography>
                <Typography variant="h6">Full Stack Developer focused on the Front End</Typography>
            </Box>
            <Box sx={{ width: { xs: '200px', sm: "300px", lg: "400px" }, height: { xs: '200px', sm: "300px", lg: "400px" }, border: "1px solid lightblue" }}>

            </Box>
        </Box>
    )
}
