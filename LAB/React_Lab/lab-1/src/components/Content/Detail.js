import React from "react";
import { useParams } from "react-router-dom";
import { listFilms } from "../../Share/ListOfFilms";
import { useState } from "react";
import ModalCase from "./ModalCase";
import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, CssBaseline, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Container, Divider } from "react-materialize";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Rating from '@mui/material/Rating';

export default function Detail() {
  const [isOpen, setIsOpen] = useState(false);
  const userName = useParams();
  const player = listFilms.find((obj) => {
    return obj.id == userName.id;
  });

  return (
    <div class="row">
      <CssBaseline />

      <div class="col s12 m6">
        <h3 className="center-align">{player.Title}</h3>
        <div class="card-image">
          <img src={`../${player.Image}`} alt="" />
        </div>
        <a
          onClick={() => setIsOpen(true)}
          class="btn-floating btn-large waves-effect waves-light red pulse"
        >
          <i class="material-icons">play_arrow</i>
        </a>
        {isOpen && <ModalCase setIsOpen={setIsOpen} player={player} />}
      </div>

      <div class="col s12 m6">
        <div class="card-contenta">
          <h5 className="product-price">
            Director:
            {player.Director}
          </h5>
          <h6 className="product-price">
            IMDb: <span className="orange darken-1">{player.IMDb}</span>
          </h6>
          <h6>Nation: {player.Nation}</h6>
          <p>{player.Info}</p>
          <a class="waves-effect waves-light btn red darken-4">Download</a>
          <a class="waves-effect waves-light btn  "> Watch now</a>
        </div>
      </div>
        <Container>
            <Box sx={{
              width: '100%',
            }}>
            <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{fontWeight: 'bold'}}>Comments</Typography>
          </AccordionSummary>              
          
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <Rating name="read-only" value={4} readOnly />
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <Rating name="read-only" value={5} readOnly />
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    <Rating name="read-only" value={3} readOnly />
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </Accordion> 
            </Box>
        </Container>
    </div>
  );
}
