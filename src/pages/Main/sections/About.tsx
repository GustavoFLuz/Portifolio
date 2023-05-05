import { Box, Grid, IconButton, Skeleton, Typography, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { socialMedias } from '../../../shared/constants'

const imageStyle: React.CSSProperties = {
    width: '260px',
    maxWidth: '80vw',
    aspectRatio: 1,
    objectFit: 'cover',
    clipPath: 'polygon(98% 62%, 62% 98%, 14% 85%, 1% 37%, 37% 1%, 85% 14%)',
}

export const About = () => {
    const [loadingImage, setLoadingImage] = useState(true);
    const theme = useTheme();

    return (
        <Box sx={{
            my: 5, mx: 'auto',
            backgroundColor: theme.palette.background.default + "33", boxShadow: "0 8px 32px 0 #1F26875E",
            backdropFilter: "blur(15px)", borderRadius: "10px",
            border: "1px solid #FFFFFF2E",
            display: 'flex', flexDirection: {xs:"column-reverse", md:"row"}, justifyContent: "space-evenly", alignContent: 'center', p: {xs:1, md:5}, maxWidth: "min(100vw, 1000px)"
        }}>
            <Box sx={{ display: 'grid', placeItems: 'center', my: 5 }}>
                {!loadingImage ?
                    <Skeleton variant="rounded" style={imageStyle}>
                        <img src="https://avatars.githubusercontent.com/u/61062270?v=4" style={imageStyle} onLoad={() => setLoadingImage(false)} />
                    </Skeleton> :
                    <img src="https://avatars.githubusercontent.com/u/61062270?v=4" style={imageStyle} onLoad={() => setLoadingImage(false)} />
                }
            </Box>
            <Box sx={{ m: { xs: 2, md: 5 } }}>
                <Typography variant="h4">Title</Typography>
                <Typography variant='body1' sx={{ textAlign: "justify", p: 1 }}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia a quasi exercitationem dolore suscipit accusamus similique nesciunt voluptates in enim, magnam, delectus dolorum quo, qui dolores commodi sapiente. Perferendis, vero?</Typography>
                <Grid container spacing={1} columns={{ xs: Math.round(socialMedias.length / 2), sm: socialMedias.length }} sx={{ mt: { xs: 3, sm: 5 }, maxWidth: '600px', float: 'right' }}>
                    {socialMedias.map((element, index) => (
                        <Grid item xs={1} key={index} sx={{ textAlign: 'center' }}>
                            <IconButton onClick={() => window.open(element.link)}>
                                {element.icon}
                            </IconButton >
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Box>
    )
}