import {CognitoUserPool} from 'amazon-cognito-identity-js';
import {signInWithUserAndPassword} from "../Cognito";

jest.mock('amazon-cognito-identity-js', () => {
  return {
    CognitoUserPool: jest.fn().mockReturnThis(),
    CognitoUser: jest.fn().mockReturnThis(),
  };
});

test('adds 1 + 2 to equal 3',  async () => {
   expect(CognitoUserPool).toHaveBeenCalledWith({UserPoolId: "cognitouserpool", ClientId: "ClientId"})
  signInWithUserAndPassword("", "");

});

afterEach(() => {
  jest.resetAllMocks();
});