import { Box, Button, IconButton, Toolbar, Typography } from '@mui/material';
import WeatherCard from './WeatherCard';


const links = [
    {
        address: "/",
        src: "https://img.icons8.com/bubbles/50/home.png",
    },
    {
        address: "https://mailto:karaman.buraak@gmail.com",
        src: "https://img.icons8.com/bubbles/50/new-post.png",
        target: "_blank"
    },
    {
        address: "https://github.com/karamanburak",
        src: "https://img.icons8.com/bubbles/50/github.png",
        target: "_blank"
    },
    {
        address: "https://www.linkedin.com/in/karamanburak/",
        src: "https://img.icons8.com/bubbles/50/linkedin.png",
        target: "_blank"
    },
]

const Footer = () => {

    return <>
        <Toolbar sx={{marginTop:"2rem", backgroundColor:"neutral.dark"}}>
            <Box sx={{ display: { xs: "none", md: 'block' }}}>
                <WeatherCard/>
            </Box>
         
            <Typography sx={{ color: "neutral.light", textAlign: "center", fontWeight: "bold", flexGrow: 1, display: { xs: "none", sm: 'block' } }}>
                Made By Burak Karaman &copy; 2024
            </Typography>

         

            {links.map((link, index) => (
                <Typography key={index} sx={{ margin:"auto",
                    '&:hover': {
                        transform: "scale( 1.10)"
                    }
                }}>
                    <a href={link.address} target={link.target}>
                        <img width="50" height="50" src={link.src} alt="new-post" />
                    </a>
                </Typography>
            ))}
        </Toolbar>
    </>;
};

export default Footer;