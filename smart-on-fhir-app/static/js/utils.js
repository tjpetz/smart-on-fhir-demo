// The aim of loadStatus function to check the github page is deployed or not
// if It is deployed then it will sends the repositry url and time. 
function loadStatus() {
  let time = new Date();
  let url = window.location.href;

  let ackJSON = { url: url, time: time };

  document.body.innerHTML = `<pre>` + JSON.stringify(ackJSON) + `</pre>`;
}
