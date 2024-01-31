import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "react-materialize";

export default function Footer() {
  return (
      <footer class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col l4 s12">
            <h5 class="white-text">
              Subscribe
            </h5>
            <input className="width=10" type="text" placeholder="Enter email address" />
            <Button>Send</Button>
          </div>
          <div class="col l3 s12">
            <h5 class="white-text center">Help us</h5>
            
            <p class="center">We hope you have enjoyed using Materialize and if you feel like it has helped you out and want to support the team</p>
          </div>
          <div class="col l3 offset-l2 s12">
            <h5 class="white-text">Contact</h5>
            <ul>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <FacebookIcon /> Facebook
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <EmailIcon /> baotnvde170638@fpt.edu.vn
                </a>
              </li>
              <li>
                <a class="grey-text text-lighten-3" href="#!">
                  <LocalPhoneIcon /> +84 123123123
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container white-text">Copyright © VietBaoo</div>
      </div>
    </footer>
  );
}

