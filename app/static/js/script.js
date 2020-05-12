function onloadPage() {
  // to load resources on UI as button
  let html = ``;
  let allResource = Object.keys(data);
  for (let i = 0; i < allResource.length; i++) {
    let resourceName = allResource[i];
    html += `<button class="btn bg-white btn-change7 text-left `;
    html += resourceName;
    html += `" >`;
    html += resourceName;
    html += `</button>`;
  }

  let addButton = document.getElementById("resources-button");
  addButton.innerHTML = html;
  count = 5;

  // to add onclick listener on resource button
  for (let i = 0; i < allResource.length; i++) {
    let button_Name = "." + allResource[i];
    $(document).on("click", button_Name, function () {
      //   load(endpoint[i], resources[i], i);
      //   query();
      let selectedResource = button_Name.slice(1);

      let resourceValue = data[selectedResource];
      let param = resourceValue["queryParam"][0]["name"];
      let value = resourceValue["queryParam"][0]["value"][0];
      resource = button_Name.slice(1);
      searchParams = {};
      searchParams[param] = value;
      document.getElementById("selected-query").innerHTML = "";
      document.getElementById("selection_box").style.display = "block";
      driver(button_Name.slice(1), searchParams, 1);
    });
  }
}

async function driver(selectedResource, searchParams, page) {
  let result = await fhirSearch(selectedResource, searchParams, page, count);
  populateParam(resource);
  totalCount = result.totalCount;
  resource = selectedResource;
  renderJSON(result);
  document.getElementById("resources-name").innerHTML =
    `<h4>` + resource + ` API </h4>`;
  createButtons(page, totalCount);
}

function renderJSONviewer(id) {
  let target = "#" + id;
  let source = id + "#";
  let jsonViewer = new JSONViewer();
  let x = document.getElementById(source).innerHTML;
  document.getElementById(id).innerText = "";
  jsonViewer.showJSON(JSON.parse(x), null, 1);
  document.querySelector(target).appendChild(jsonViewer.getContainer());
}
