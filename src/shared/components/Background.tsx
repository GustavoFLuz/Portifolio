import { Box, useTheme } from '@mui/material'
import React from 'react'

type Props = {
    sx: React.CSSProperties
}

export const Background: React.FC<Props> = ({ sx = {} }) => {
    const theme = useTheme();

    const changeColorOpacity = (color: string, opacity: number) => {
        if (color.includes("rgb")) return color.slice(0, -1) + ", " + opacity + ")";
        return color + Math.round(opacity * 255).toString(16).padStart(2, "0");
    }

    return (
        <Box sx={{
            position: 'fixed', top: 0, left: 0, zIndex: -1,
            width: '100%', height: "100vh",
            background: theme.palette.primary.dark,
            backgroundImage: `
            radial-gradient(circle at 0% 0%, ${changeColorOpacity(theme.palette.primary.dark, 1)} 0%, ${changeColorOpacity(theme.palette.primary.dark, .4)} 100%),
            radial-gradient(circle at 10% 90%, ${changeColorOpacity(theme.palette.primary.main, 1)} 0%, ${changeColorOpacity(theme.palette.primary.main, .4)} 20%),
            radial-gradient(ellipse at 95% 20%, ${changeColorOpacity(theme.palette.secondary.dark, 1)} 0%, ${changeColorOpacity(theme.palette.secondary.dark, .3)} 50%)
            `,
            backgroundSize: '100% 100vh',
            ...sx
        }}>
        </Box >
    )
}
