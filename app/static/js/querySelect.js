// To store the selected queries
var queryAdded = {};

// Function to populate the select tag
// with the parameters available to
// query the selected API resource
function populateParam(resource) {
  queryAdded = {};
  let parameterSelect = document.getElementById("parameters");
  removeOptions(parameterSelect);
  documentFragment = document.createDocumentFragment();
  let parameter;

  for (parameter in data[resource]["queryParam"]) {
    let option = document.createElement("option");
    option.value = data[resource]["queryParam"][parameter]["name"];
    option.appendChild(
      document.createTextNode(data[resource]["queryParam"][parameter]["name"])
    );
    documentFragment.appendChild(option);
  }

  parameterSelect.appendChild(documentFragment);
  document.getElementById("parameterValue").value = "";
}

// The function adds the query to the array
// to be sent to fetch the query
function addQueryClick() {
  let parameter = document.getElementById("parameters").value;
  let parameterValue = document.getElementById("parameterValue").value;
  if (parameter != "" && parameterValue != "") {
    if (!queryAdded.hasOwnProperty(parameter)) {
      queryAdded[parameter] = parameterValue;
      createQueryIcons(queryAdded);
    }
  }

  document.getElementById("parameterValue").value = "";
}

// The function to display the added queries as icons
function createQueryIcons(data) {
  document.getElementById("selected-query").innerHTML = "";
  for (i in data) {
    document.getElementById("selected-query").innerHTML +=
      `<button class='btn btn-outline-primary query-delete' onclick=deleteQuery("${i}")>` +
      i +
      ": " +
      data[i] +
      "  &#x2715;</button> ";
  }
}

// The function to delete any query item
function deleteQuery(id) {
  // queryAdded.splice(id, 1);
  delete queryAdded[id];
  createQueryIcons(queryAdded);
}

// Function which will be called when
// submit query button will be clicked
function submitQuery() {
  if (Object.keys(queryAdded).length == 0) {
    addQueryClick();
  }
  if (Object.keys(queryAdded).length != 0) {
    convertArray();
    driver(resource, searchParams, 1);
  } else {
    alert("Please Enter the parameters correctly.");
  }
}

// Function to convert addedQueries array to searchParams
function convertArray() {
  searchParams = {};
  for (i in queryAdded) {
    searchParams[i] = queryAdded[i];
  }
}

// Function to flush the previously present
// Options in the select tag
function removeOptions(selectElement) {
  let i,
    L = selectElement.options.length - 1;
  for (i = L; i > 0; i--) {
    selectElement.remove(i);
  }
}

// Function to display example value on input tag
function ibtn() {
  let value = document.getElementById("parameters").value;
  let x = data[resource]["queryParam"];
  let val;
  for (i in x) {
    if (x[i]["name"] == value) {
      if (x[i]["value"] == null) {
        val = `sorry! there is not any sample value for`;
        val += x[i]["name"];
        val += `param`;
      } else {
        val = x[i]["value"].toString();
      }
    }
  }
  document.getElementById("parameterValue").title = val;
}
