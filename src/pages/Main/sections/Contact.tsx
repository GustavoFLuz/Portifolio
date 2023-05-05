import { Box, Button, Divider, FormControl, TextField, Typography, IconButton } from '@mui/material'
import { socialMedias } from '../../../shared/constants'
export const Contact = () => {
    return (
        <Box sx={{ width: "100%", minHeight: "60vh", display: "grid", placeItems: "center" }}>
            <Box sx={{ m: 3, textAlign: "center" }}>
                <Typography variant="h4">Contact</Typography>
                <Typography variant="subtitle1">If you got interested, please leave a message</Typography>
            </Box>
            <FormControl sx={{ width: "80%" }}>
                <Box sx={{ display: 'flex', gap: 3 }}>
                    <TextField label="Name" variant="outlined" sx={{ width: "60%" }} color="secondary" />
                    <TextField label="Email" variant="outlined" sx={{ width: "40%" }} color="secondary" />
                </Box>
                <TextField label="Message" variant="outlined" margin='normal' multiline rows={3} color="secondary" />
                <Button variant='contained' sx={{ width: { xs: '100%', md: "200px" }, p: 1, m: 2, backgroundColor: "primary.light", alignSelf: "center", fontSize: 20 }}>Send</Button>
            </FormControl>
            <Divider light role="presentation" sx={{ width: "100%" }}>Or message me directly</Divider>
            <Box sx={{ display: 'flex', gap: 5 }}>
                {socialMedias.filter(social => social.contact).map((social, index) => (
                    <IconButton key={index} onClick={() => window.open(social.link)}>
                        {social.lgIcon}
                    </IconButton >
                ))}
            </Box>
        </Box>
    )
}
