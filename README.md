# React + Auth0 Authentication


# Cognito + React 

For creating an integration between React + Cognit is important to have an AWS account. Once, you have 
an AWS account we need to go the  Cognit component and create a new basically 3 things:

* A Pool 
* An Application
* A User and Password

After that, in our application react we need to install the dependency: ``amazon-cognito-identity-js``


In the `Cognito.ts` file, we have a sample give a user and password how we can check if exist this user is in the Cognito base. In this file, we open a connection to AWS Cognito with `PoolId` and `Application Id`.

```javascript
const userPoolId = 'eu-west-2_ipIKLtzdh' || process.env.REACT_APP_USERPOOL_ID
const clientId = '726csbajs9j09cfadbmfv6gcu6' || process.env.REACT_APP_CLIENT_ID

const poolData = {
  UserPoolId: `${userPoolId}`,
  ClientId: `${clientId}`,
}

const userPool: CognitoUserPool = new CognitoUserPool(poolData)
let currentUser: any = userPool.getCurrentUser()
```

After that, in the function below is encapsulated a check if the user exist and a callback with `accessToken`, `idToken`, and `refreshToken`.

```javascript
export async function signInWithUserAndPassword(username: string, password: string) {
...
}
```

# Installation

```bash
$ git clone git@github.com:mirlabraga/react-sandbox.git
$ cd react-sandbox
$ npm install
```

# Valids username and password

- For Cognito

| username   | password   |  
| -----------| -----------|
|  mirla | Mirla123456  |  
|  anik  | Anik123456   |  

- For Auth0

| username   | password   |  
| -----------| -----------|
|  mirlabraga@gmail.com | @Password123  |  


# Libraries

1 - for creating new structure component and storybook
https://www.npmjs.com/package/generate-react-cli

2 - sample material ui for login page
https://mui.com/getting-started/templates/sign-in-side/

3 - 
https://auth0.com/docs/libraries/auth0-single-page-app-sdk

