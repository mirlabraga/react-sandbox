
import React, { useEffect, useState } from "react";
import { Auth0Client, User } from "@auth0/auth0-spa-js";
import {
  useNavigate,
  } from "react-router-dom";
import { auth0 } from "../../../libs/auth0";


export default function Auth0Callback() {

    const [error, setError] = useState<string>();
    let navigate = useNavigate();
  
    const checkCallback = async () => {
      try {
        await auth0.handleRedirectCallback(); //Valid callback and fetch token
        navigate('/home')
      } catch(err) {
        console.error(err);
        setError(`some error: ${err}`);
      }
    }
    
    useEffect(() => {
      checkCallback();
    }, []);
    
    return (<>
      {error && <p>{error}</p>}
      {!error && <>Loading</>}
    </>);
  }