import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'
import { Navbar } from './'
export const PageWrapper = () => {
    return (
        <>
            <Navbar />
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} maxWidth="xl">
                <Outlet />
            </Container>
        </>
    )
}