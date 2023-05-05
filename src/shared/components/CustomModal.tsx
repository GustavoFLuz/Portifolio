import { ClickAwayListener, Box, styled, Typography, Button, useTheme } from '@mui/material';
import React from 'react'
import SVG from 'react-inlinesvg'

type PropsTypes = {
    title: string;
    link: string;
    icon: string;
    description: string;
    hideFunction: () => any;
    backgroundColor?: string;
}

const StyledModal = styled('div')(({ theme }) => ({
    position: 'fixed',
    zIndex: 1300,
    right: 0,
    bottom: 0,
    top: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.background.paper + "33",
}))


export const CustomModal: React.FC<PropsTypes> = ({ title, link, icon, description, backgroundColor, hideFunction }) => {
    const theme = useTheme();
    const handleClose = () => hideFunction();

    return (
        <StyledModal>
            <ClickAwayListener onClickAway={handleClose}>
                <Box sx={{
                    p: 3, borderRadius: 4, maxWidth: '450px',
                    backgroundColor: (backgroundColor || theme.palette.background.default) + "55",
                    boxShadow: "0 8px 32px 0 #1F26875E",
                    backdropFilter: "blur(15px)",
                    border: "1px solid #FFFFFF2E",
                }}>
                    <Typography variant='h5' sx={{ m: 1, display: 'flex', alignItems: 'center', gap: 2 }}>
                        <SVG src={icon} style={{ height: "1em" }} fill={theme.palette.text.primary}></SVG>
                        {title}
                    </Typography>
                    <Typography variant='body1' sx={{ m: 3 }}>{description}</Typography>
                    <Button variant="contained" sx={{ float: 'right' }}
                        onClick={() => window.open(link, "_blank")}>
                        Learn More
                    </Button>
                </Box>
            </ClickAwayListener>
        </StyledModal>

    )
}
