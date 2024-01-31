import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-materialize";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const [dataAPI, setDataAPI] = useState([]);
  // const tabs = ["horror", "action", "romance", "documentary"];
  // const [type, setType] = useState("horror");
  // useEffect(() => {
  //   fetch(
  //     `https://65a2aa3a42ecd7d7f0a803f0.mockapi.io/api/courseList/films?Type=${type}`
  //   )
  //     .then((res) => res.json())
  //     .then((dataAPI) => {
  //       setDataAPI(dataAPI);
  //     });
  // }, [type]);

  return (
    <nav>
      <a href="#" data-target="slide-out" class="sidenav-trigger">
        <i class="material-icons">menu</i>
      </a>
      <div class="nav-wrapper">
        <ul class="left hide-on-med-and-down ">
          <li class="active">
            <Link to="/">
              <Icon left>home</Icon>
              Home
            </Link>
          </li>
          <li to="/about">
            <Link to="/about">
              <Icon left>info_outline</Icon>
              About
            </Link>
          </li>
          <li to="/news">
            <Link to="/news">
              <Icon left>dvr</Icon>
              News
            </Link>
          </li>
          <li to="/contact">
            <Link to="/contact">
              <Icon left>contacts</Icon>
              Contact
            </Link>
          </li>
        </ul>
        {/* {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setType(tab)}
            style={
              type === tab
                ? {
                    color: "white",
                    backgroundColor: "#333",
                  }
                : {}
            }
          >
            {tab}
          </button>
        ))}
        <ul>
          {dataAPI.map((data) => (
            <li style={{ color: "black" }} key={data.id}>
              {data.Title}
            </li>
          ))}
        </ul> */}

        <Button
          id="fade-button"
          aria-controls={open ? "fade-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          variant="outlined"
          sx={{
            color: 'white'
          }}
        >
          Types of Film
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            "aria-labelledby": "fade-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={handleClose}>Action Films</MenuItem>
          <MenuItem onClick={handleClose}>Horror Films</MenuItem>
          <MenuItem onClick={handleClose}>Romance movie</MenuItem>
          <MenuItem onClick={handleClose}>Documentary movie</MenuItem>
        </Menu>

        <ul class="right hide-on-med-and-down">
          <Link to="/login">
            <Icon left>contacts</Icon>
            Login
          </Link>
        </ul>

        <form class="right hide-on-med-and-down">
          <div class="input-field">
            <input id="search" type="search" required />
            <label class="label-icon" for="search">
              <i class="material-icons">search</i>
            </label>
            <i class="material-icons">close</i>
          </div>
        </form>

      </div>
    </nav>
  );
}
