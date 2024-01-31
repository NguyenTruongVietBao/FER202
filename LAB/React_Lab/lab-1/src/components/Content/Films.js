import React from "react";
import { listFilms } from "../../Share/ListOfFilms";
import { Link } from "react-router-dom";
import {Button} from "@mui/material";

export default function Films() {
  return (
    <div class="container">
        {listFilms.map((film) => (
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src={film.Image} alt="" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4 bold-text">
                {film.Title}
                <i class="material-icons right">more_vert</i>
              </span>           
                <Link to={`detail/${film.id}`}>
                  <Button sx={{border:'solid 1px'}}>Detail</Button>
                </Link>        
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">
                {film.Title}
                <i class="material-icons right">close</i>
              </span>
              <p> {film.Info} </p>
            </div>
          </div>
        ))}
      </div>
  )
}