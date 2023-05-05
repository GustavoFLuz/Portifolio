import { Box } from '@mui/material'
import { Hero, About, Skills } from './sections'

export const Main = () => {
    return (
        <Box sx={{ height: '100%', width: '100%' }}>
            <Hero/>
            <About/>
            <Skills/>
        </Box>
    )
}
