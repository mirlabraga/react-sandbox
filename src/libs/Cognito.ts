import { AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool } from 'amazon-cognito-identity-js'

import { IdentityProvider } from "./IdentityProvider";

const userPoolId = 'eu-west-2_LbRx1DlcT' || process.env.REACT_APP_USERPOOL_ID
const clientId = '1r79ds96morkrb6jj0f7lk3fn3' || process.env.REACT_APP_CLIENT_ID

const poolData = {
  UserPoolId: `${userPoolId}`,
  ClientId: `${clientId}`,
}

const userPool: CognitoUserPool = new CognitoUserPool(poolData)
let currentUser: any = userPool.getCurrentUser()

export class Cognito implements IdentityProvider {

  async signInWithEmail(username: string, password: string) {
    try {

      return new Promise(function (resolve, reject) {
        const authenticationData = {
          Username: "mirla",
          Password: "mirla123456",
        };
        const authenticationDetails = new AuthenticationDetails(authenticationData);

        console.log(authenticationDetails);

        currentUser = getCognitoUser(username);

        console.log(currentUser);

        currentUser.authenticateUser(authenticationDetails, {
          onSuccess: function (res_1: any) {
            console.log(res_1);
            resolve(res_1);
          },
          onFailure: function (err_1: any) {
            reject(err_1);
          },
        });
      });
    } catch (err_2) {
      throw err_2;
    }
  }

}

function getCognitoUser(username: string) {
  const userData = {
    Username: username,
    Pool: userPool,
  }
  const cognitoUser = new CognitoUser(userData)

  return cognitoUser
}

