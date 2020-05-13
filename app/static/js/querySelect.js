// To store the selected queries

// Function to populate the select tag
// with the parameters available to
// query the selected API resource
function populateParam(resource) {
  let parameterSelect = document.getElementById("parameters");
  removeOptions(parameterSelect);
  documentFragment = document.createDocumentFragment();
  let parameter;
  let index = 0;

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
    if (!searchParams.hasOwnProperty(parameter)) {
      searchParams[parameter] = parameterValue;
      createQueryIcons();
    }
  }

  document.getElementById("parameterValue").value = "";
}

// The function to display the added queries as icons
function createQueryIcons() {
  document.getElementById("selected-query").innerHTML = "";
  for (i in searchParams) {
    document.getElementById("selected-query").innerHTML +=
      "<p class='btn btn-outline-primary query_delete'>" +
      i +
      " : " +
      searchParams[i] +
      "<button type='button' class='query_delete_close' onclick=" +
      `deleteQuery("${i}")` +
      "><span aria-hidden='true'>&times;</span></button></p> ";
  }
}

// The function to delete any query item
function deleteQuery(id) {
  delete searchParams[id];
  createQueryIcons();
}

// Function which will be called when
// submit query button will be clicked
function submitQuery() {
  if (Object.keys(searchParams).length == 0) {
    addQueryClick();
  }
  if (Object.keys(searchParams).length != 0) {
    driver(resource, searchParams, 1);
  } else {
    alert("Please Enter the parameters correctly.");
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
