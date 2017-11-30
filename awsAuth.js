import AWS from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails
} from "amazon-cognito-identity-js";

function authentication(email, password) {
  var authenticationData = {
    Username: email,
    Password: password
  };

  var authenticationDetails = new AuthenticationDetails(authenticationData);
  var poolData = {
    UserPoolId: "", // Your user pool id here
    ClientId: "" // Your client id here
  };
  var userPool = new CognitoUserPool(poolData);
  var userData = {
    Username: authenticationData.Username,
    Pool: userPool
  };
  var cognitoUser = new CognitoUser(userData);
  console.log(cognitoUser);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
      AWS.config.region = "us-east-1";

      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
        Logins: {
          // Enter domain here
          "": result.getIdToken().getJwtToken()
        }
      });
      window.sessionStorage.setItem(
        "token",
        result.getAccessToken().getJwtToken()
      );
      window.location.reload();
    },
    onFailure: function(err) {
      alert(
        "An error occurred. Please ensure you entered the correct login information."
      );
      window.location.reload();
    },

    newPasswordRequired: function(userAttributes, requiredAttributes) {
      const newPassword = prompt("Please choose a new password");
      userAttributes = {
        email: authenticationData.Username,
        given_name: "",
        family_name: ""
      };
      delete userAttributes.email_verified;
      // Get these details and call
      cognitoUser.completeNewPasswordChallenge(
        newPassword,
        userAttributes,
        this
      );
    }
  });
}

export default authentication;
