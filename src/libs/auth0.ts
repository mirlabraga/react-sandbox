import { Auth0Client } from "@auth0/auth0-spa-js";

export const auth0 = new Auth0Client({
    domain: 'dev-q7rj5o44.us.auth0.com',
    client_id: 'PH0OBJ2fYk1bc3akSovlIe03jwoi0bqa',
    scope: 'openid profile email',
    cacheLocation: 'localstorage',
    redirect_uri: 'http://localhost:3000/callback',
    audience: 'https://nestjs-api.demo.com',
    useRefreshTokens: true,
  });