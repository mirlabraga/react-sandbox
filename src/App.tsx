import React, { useEffect, useState } from "react";
import { Auth0Client, User } from "@auth0/auth0-spa-js";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Routes,
} from "react-router-dom";

const auth0 = new Auth0Client({
  domain: 'dev-q7rj5o44.us.auth0.com',
  client_id: 'PH0OBJ2fYk1bc3akSovlIe03jwoi0bqa',
  scope: 'openid profile email',
  cacheLocation: 'localstorage',
})

function Auth0Callback(){

  const [error, setError] = useState<string>();
  const [user, setUser] = useState<User>();
  const [token, setToken] = useState<string>();

  const checkCallback = async () => {
    try {
      await auth0.handleRedirectCallback(); //Valid callback and fetch token
      const auth0user = await auth0.getUser(); // jwt claim with user data
      setToken(await auth0.getTokenSilently());
      if (!auth0user) {
        setError('user not found');
      } else {
        setUser(auth0user);
      }
    } catch(err) {
      console.error(err);
      setError(`some error: ${err}`);
    }
  }
  
  useEffect(() => {
    checkCallback();
  }, []);
  
  return (<>
    <Link to='/' >Go home</Link><br />
    {error && <p>{error}</p>}
    {user && <pre>{JSON.stringify(user, null, 3)}</pre>}
    {token && <pre>{JSON.stringify(token, null, 3)}</pre>}
  </>);
}

function Home(){

  const login = async () => {
    await auth0.loginWithRedirect({
      redirect_uri: 'http://localhost:3000/callback'
    });
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
