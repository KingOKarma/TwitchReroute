import React from "react";
import '../css/Navbar.css';
import { Navbar } from "react-bootstrap";
// import { useLocation } from "react-router-dom";

const Header = () => {

  let token = "Cannot find token, please try again"
  let response = ""
  let scopesResponse = ""
  let newScopes: string[] = [];

  const hash = window.location.hash.split("=")
  if (!hash.includes("")) {
    token = (hash[1].split("&")[0])
    response = "Here is your access token:"
    console.log(hash[1].split("&")[0])
  
  const tokenScopes = hash[2].split("&");
  const scopes = tokenScopes[0].split("+");

  scopes.forEach(element => {
    const replace = new RegExp('%3A', 'g');
    const newElement = element.replace(replace, ":")
    newScopes.push(newElement)
  });
  scopesResponse = "Your Scopes are:";
  console.log(newScopes.join(", "));
}


    return (
    <Navbar className="NavBar">
  <Navbar.Brand>{response}</Navbar.Brand> 
  <Navbar.Collapse>
    <Navbar.Text>
      {token} 
      <br/ >
      {scopesResponse}
      <br/ >
      {newScopes.join(" || ")}
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