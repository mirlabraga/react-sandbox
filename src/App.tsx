import React, { useEffect, useState } from "react";
import { Auth0Client, User } from "@auth0/auth0-spa-js";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./components/Login/Login";
import Auth0Callback from "./components/Login/Auth0Callback/Auth0Callback";
import Home from "./components/Home/Home";


export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/callback" element={<Auth0Callback />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login/>} />
        </Routes>
      </div>
    </Router>
  );
}
