import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const socialMedias = [
    { name: "GitHub", lgIcon: <GitHubIcon fontSize="large" />, mdIcon: <GitHubIcon />, link: "#", about: true, navbar: true, contact: false },
    { name: "LinkedIn", lgIcon: <LinkedInIcon fontSize="large" />, mdIcon: <LinkedInIcon />, link: "#", about: true, navbar: true, contact: true },
    { name: "Instagram", lgIcon: <InstagramIcon fontSize="large" />, mdIcon: <InstagramIcon />, link: "#", about: true, navbar: false, contact: false },
    { name: "Email", lgIcon: <EmailIcon fontSize="large" />, mdIcon: <EmailIcon />, link: "#", about: true, navbar: true, contact: true },
    { name: "Telegram", lgIcon: <TelegramIcon fontSize="large" />, mdIcon: <TelegramIcon />, link: "#", about: true, navbar: false, contact: true },
    { name: "WhatsApp", lgIcon: <WhatsAppIcon fontSize="large" />, mdIcon: <WhatsAppIcon />, link: "#", about: true, navbar: false, contact: true },
]