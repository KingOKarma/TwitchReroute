import React from "react";
import '../css/Navbar.css';
import { Navbar } from "react-bootstrap";

const Header = () => {
   
    return (
    <Navbar className="NavBar">
  <Navbar.Brand> You should be able to see your Twitch access token</Navbar.Brand>
  <Navbar.Collapse>
    <Navbar.Text>
      Within the link in the search bar above
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
}

    export default Header
