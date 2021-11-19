import React from "react";
import { Auth0Client } from "@auth0/auth0-spa-js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function Auth0Callback(){
  return (<></>);
}
const auth0 = new Auth0Client({
  domain: 'dev-q7rj5o44.us.auth0.com',
  client_id: 'PH0OBJ2fYk1bc3akSovlIe03jwoi0bqa',
  scope: 'openid profile email'
})

function Home(){

  const login = async () => {
    await auth0.loginWithRedirect();
  }

  return (<><button onClick={login}>login</button></>);
}

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/callback" element={<Auth0Callback />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
