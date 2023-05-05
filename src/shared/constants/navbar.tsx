import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export const navbarConstants = {
    sections: [
        { title: { en: 'About me', pt: 'Sobre mim' }, id: '#' },
        { title: { en: 'Projects', pt: 'Projetos' }, id: '#' },
        { title: { en: 'Skills', pt: 'Habilidades' }, id: '#' },
        { title: { en: 'Contact', pt: 'Contato' }, id: '#' },
    ],
    socials: [
        { title: 'Github', url: 'https://github.com/GustavoFLuz', icon: <GitHubIcon /> },
        { title: 'LinkedIn', url: 'https://www.linkedin.com/in/gustavofluz/', icon: <LinkedInIcon /> },
        { title: 'Email', url: '#', icon: <EmailIcon /> },
    ]
}