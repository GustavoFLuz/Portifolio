import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { Navbar, Background } from './'
export const PageWrapper = () => {
    return (
        <>
            <Background sx={{}} />
            <Navbar />
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} maxWidth="xl">
                <Outlet />
            </Container>
        </>
    )
}