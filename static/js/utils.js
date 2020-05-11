// The aim of loadStatus function to check the github page is deployed or not
// if It is deployed then it will sends the repositry url and time.
function loadStatus() {
  let time = new Date();
  let url = window.location.href;

  let ackJSON = { url: url, time: time };

  document.body.innerHTML = `<pre>` + JSON.stringify(ackJSON) + `</pre>`;
}

//Function for validating URL
function isUrlValid(userInput) {
  regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(userInput)) return true;
  else return false;
}
//Main function
function getURL() {
  //const queryString = "https://something?apiurl=https://api-dev.oninnovaccer.com&oauthurl=https://api-dev.oninnovaccer.com/fhiroauth/oauth2/token&cid=ZPrnAOjtK36ciM2L7Ks67wwhtwCEQUuN";
  const queryString = window.location.href;
  const url = new URL(queryString);
  const urlParams = new URLSearchParams(url.search);
  const api_url = urlParams.get("apiurl");
  const oauth_url = urlParams.get("oauthurl");
  const client_id = urlParams.get("cid");
  let local = "local";
  let session = "session";
  let set = "set";
  let get = "get";
  if (isUrlValid(api_url) && isUrlValid(oauth_url)) {
    storageDriver({ key: "api_url", value: api_url }, local, set);
    storageDriver({ key: "api_url", value: api_url }, session, set);
    storageDriver({ key: "oauth_url", value: oauth_url }, local, set);
    storageDriver({ key: "oauth_url", value: oauth_url }, session, set);
    storageDriver({ key: "client_id", value: client_id }, local, set);
    storageDriver({ key: "client_id", value: client_id }, session, set);
    document.getElementById("main").innerHTML = "success";
    window.location.replace("https://sid22.dev/smart-on-fhir-demo/base.html");
  } else if (!isUrlValid(api_url))
    document.getElementById("main").innerHTML = "Wrong API url";
  else if (!!isUrlValid(oauth_url))
    document.getElementById("main").innerHTML = "Wrong Oauth url";
}

//function to store client secret
function clientSecret() {
  let client_secret = document.getElementById("client_secret");
  localStore("client_secret", client_secret.value);
  sessionStore("client_secret", client_secret.value);
  window.location.replace("./index.html");
}

//function to hide or unhide the password
function hideSecret() {
  let x = document.getElementById("client_secret");
  let y = document.getElementById("hide1");
  let z = document.getElementById("hide2");
  if (x.type === "password") {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
  } else {
    y.style.display = "none";
    z.style.display = "block";
    x.type = "password";
  }
}

//function to clear storage and closethe tab
function closeTab() {
  var conf = confirm("Are you sure, you want to close this tab?");
  if (conf == true) {
    localStorage.clear();
    sessionStorage.clear();
    close();
  }
}
