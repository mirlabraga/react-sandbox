import { AuthenticationDetails, CognitoUser, CognitoUserPool } from 'amazon-cognito-identity-js'

const userPoolId = 'eu-west-2_ipIKLtzdh' || process.env.REACT_APP_USERPOOL_ID
const clientId = '726csbajs9j09cfadbmfv6gcu6' || process.env.REACT_APP_CLIENT_ID

const poolData = {
  UserPoolId: `${userPoolId}`,
  ClientId: `${clientId}`,
}

const userPool: CognitoUserPool = new CognitoUserPool(poolData)
let currentUser: any = userPool.getCurrentUser()

export function signInWithUserAndPassword(username: string, password: string) {
  try {

    return new Promise(function (resolve, reject) {

      const authenticationData = {
        Username: username,
        Password: password
      };
      const authenticationDetails = new AuthenticationDetails(authenticationData);
      currentUser = getCognitoUser(username);
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
function getCognitoUser(username: string) {
  const userData = {
    Username: username,
    Pool: userPool,
  }
  const cognitoUser = new CognitoUser(userData)

  return cognitoUser
}

