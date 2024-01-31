import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  CssBaseline,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Container } from "react-materialize";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function About() {
  return (
    <Container> 
      <CssBaseline/>
      <Typography variant="h2">About us</Typography>
      <Box sx={{
          width: "100%",
          m: "10px 0",
          boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <PeopleAltIcon/>
            <Typography sx={{fontWeight: 'bold'}}>  Team</Typography>
          </AccordionSummary>              
          <AccordionDetails>
            <Typography>Bao's Team</Typography>
          </AccordionDetails>
        </Accordion> 

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <AlternateEmailIcon/>
            <Typography sx={{fontWeight: 'bold'}}>Email</Typography>
          </AccordionSummary>              
          <AccordionDetails>
            <Typography>baotnvde170638@fpt.edu.vn</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <HomeIcon/>
            <Typography sx={{fontWeight: 'bold'}}>Location</Typography>
          </AccordionSummary>              
          <AccordionDetails>
            <Typography>Hoai An - Binh Dinh - Viet Nam</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <FlagIcon/>
            <Typography sx={{fontWeight: 'bold'}}>  Goal</Typography>
          </AccordionSummary>              
          <AccordionDetails>
            <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
          </AccordionDetails>
        </Accordion>    
                  
      </Box>
    </Container>
  );
}
