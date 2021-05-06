import React from "react";
import '../css/Navbar.css';
import { Navbar } from "react-bootstrap";
// import { useLocation } from "react-router-dom";

const Header = () => {

  let token = "Cannot find token, please try again"
  let response = ""

  const hash = window.location.hash.split("=")
  if (!hash.includes("")) {
    token = (hash[1].split("&")[0])
    response = "Here is your access token:"
  }
  console.log(hash)


    return (
    <Navbar className="NavBar">
  <Navbar.Brand>{response}</Navbar.Brand> 
  <Navbar.Collapse>
    <Navbar.Text>
      {token}
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
    )
}

    export default Header


    // Notes of code for future referance
  // const url_string = window.location.href
  // const url = new URL(url_string);
  // const access_token = url.searchParams.get("access_token");