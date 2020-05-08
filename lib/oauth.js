/* 
  The schema for application token is
  {
    "access_token" : "access_token_value",
    "expires_in"  : "validity of the token",
    "onSetTime" : "time of token creation"
  } 
*/

// Function to perform the OAuth2.0 authorization
// It first checks whether application token is present in the local storage
// If present it checks whether the token has timedout or not
// If it's still valid, then it's reused.
// In all other cases, a new token is fetched.
function oauth() {
  // Get the token from local storage
  let application_token = storageDriver(
    { key: "application_token" },
    "local",
    "get"
  );

  if (application_token == null) {
    // If token is not found
    return fetchNewAccessToken();
  } else {
    application_token = JSON.parse(application_token);

    // Check whether the token has timed-out
    let response = checkTimeout(application_token);

    if (response["status"] == "Miss") {
      application_token = await fetchNewAccessToken();
      response["message"] = "Previous Token timed-out. Generated new token.";
    } else {
      response["message"] = "Previous Token is still valid.";
    }

    response["token"] = application_token["access_token"];
    return response;
  }
}

// To check whether the token has timed-out or not
function checkTimeout(application_token) {
  let timeOutTime = application_token["expires_in"];
  let onSetTime = application_token["onSetTime"];
  let currentTime = new Date().getTime();

  let response = {};

  if (currentTime - onSetTime >= timeOutTime) {
    response["status"] = "Miss";
  } else {
    response["status"] = "Hit";
  }

  return response;
}

// The function fetches a new access token.
// It uses the client_id, client_secret and oauth_url
// stored in the local storage
async function fetchNewAccessToken() {
  let client_id = storageDriver({ key: "client_id" }, "local", "get");
  let client_secret = storageDriver({ key: "client_secret" }, "local", "get");
  let oauth_url = storageDriver({ key: "oauth_url" }, "local", "get");

  let auth_Headers = new Headers();
  auth_Headers.append("Content-Type", "application/json");

  let raw = `{"client_id":"${client_id}","client_secret":"${client_secret}","grant_type":"client_credentials"}`;
  let authrequest = {
    method: "POST",
    headers: auth_Headers,
    body: raw,
    redirect: "follow",
  };
  const data = await fetch(oauth_url, authrequest)
    .then((response) =>
      response.text().then((result) => {
        if (!response.ok) {
          return {
            status: "Failure",
            code: response.status,
            message: "Invalid Credentials",
          };
        } else {
          return storeApplicationToken(JSON.parse(result));
        }
      })
    )
    .catch((error) => {
      return {
        status: "Failure",
        code: error.status,
        message: error,
      };
    });
  return data;
}

// The function stores the application token in the local storage
function storeApplicationToken(data) {
  let obj = {
    status: "Success",
    message: "Token created successfully.",
    token: data["access_token"],
    expires_in: data["expires_in"],
    onSetTime: new Date().getTime(),
  };

  let storageObject = {
    key: "application_token",
    value: JSON.stringify(obj),
  };
  storageDriver(storageObject, "local", "set");

  return obj;
}
