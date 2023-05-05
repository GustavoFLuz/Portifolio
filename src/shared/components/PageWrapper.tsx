import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export const PageWrapper = () => {
    return (
        <>
            <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} maxWidth="xl">
                <Outlet />
            </Container>
        </>
    )
}