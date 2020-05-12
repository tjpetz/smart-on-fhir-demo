//driver function
function storageDriver(obj, storage_type, operation) {
  if (operation == "set") {
    if (storage_type == "local") {
      localStore(obj["key"], obj["value"]);
    } else {
      sessionStore(obj["key"], obj["value"]);
    }
  } else {
    if (storage_type == "local") {
      return localGet(obj["key"]);
    } else {
      return sessionGet(obj["key"]);
    }
  }
}
//Function for localstorage
function localStore(key, value) {
  window.localStorage.setItem(key, value);
}
function localGet(key) {
  return window.localStorage.getItem(key);
}
//Function for sessionStorage
function sessionStore(key, value) {
  window.sessionStorage.setItem(key, value);
}
function sessionGet(key) {
  return window.sessionStorage.getItem(key);
}
