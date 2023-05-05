import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button, MenuItem, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import styled, { keyframes } from 'styled-components';
import { configs, navbarConstants } from '../constants';

const hoverEffects = (props: any) => keyframes`
    100% {
        translate: 0 -3px;
        text-decoration: underline;
        color: ${props.theme.palette.secondary.main};
    }
`

const StyledLinks = styled(Button)`
    &:hover {
        animation: ${hoverEffects} .5s forwards;
    }
`

export const Navbar = () => {
    const theme = useTheme();
    const [anchorNavElement, setAnchorNavElement] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorNavElement(event.currentTarget);
    const handleCloseNavMenu = () => setAnchorNavElement(null);

    const getMenuButtons = () => {
        return navbarConstants.sections.map((section) => (
            <StyledLinks
                key={section.title.en}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'text.primary', display: 'block', whiteSpace: 'nowrap' }}
                href={section.id} theme={theme}>
                {section.title.en}
            </StyledLinks>
        ))
    }

    const getMenuItems = () => {
        return navbarConstants.sections.map((section) => (
            <MenuItem key={section.title.en}>
                <Typography textAlign="center" component="a" href={section.id}
                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { color: 'primary.main' }, whiteSpace: 'nowrap' }}
                >{section.title.en}</Typography>
            </MenuItem>
        ))
    };

    const getSocials = () => {
        return navbarConstants.socials.map((social) => (
            <Button
                key={social.title}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, pt: 1, color: 'text.primary', display: 'block', }}
                component="a" href={social.url}>
                {social.icon}
            </Button>
        ))
    }
    return (
        <AppBar position="sticky" sx={{ background: "none", boxShadow: 'none', top:'0', height: configs.navbarHeight}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* Large Screens */}
                    <Typography
                        variant="h6" noWrap component="a" href="#home"
                        sx={{
                            flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center',
                            mr: 2, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none',
                        }}>
                        GustavoFLuz
                    </Typography>
                    <Box sx={{ flexGrow: 8, display: { xs: 'none', md: 'flex' }, justifyContent: "center", gap: { xs: 3, lg: 6 } }}>
                        {getMenuButtons()}
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {getSocials()}
                    </Box>



                    {/* Small Screens */}
                    <Typography
                        variant="h6" noWrap component="a" href="#home"
                        sx={{ my: 3, mr: 2, display: { xs: 'flex', md: 'none' }, fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: 'inherit', textDecoration: 'none', flexGrow: 1 }}>
                        GustavoFLuz
                    </Typography>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" aria-label="navigation items" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar" anchorEl={anchorNavElement}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} keepMounted
                            transformOrigin={{ vertical: 'top', horizontal: 'left', }} open={Boolean(anchorNavElement)}
                            onClose={handleCloseNavMenu} sx={{ display: { xs: 'block', md: 'none' }, }}
                        >
                            {getMenuItems()}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}