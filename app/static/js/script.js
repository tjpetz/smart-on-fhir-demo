function onloadPage() {
  // to load resources on UI as button
  let html = ``;
  let allResource = Object.keys(data);
  for (let i = 0; i < allResource.length; i++) {
    let resourceName = allResource[i];
    html += `<a class="list-group-item list-group-item-action `;
    html += resourceName;
    html += ` resource-a-tag" >`;
    html += resourceName;
    html += `</a>`;
  }

  let addButton = document.getElementById("resources-button");
  addButton.innerHTML = html;
  count = 20;

  // to add onclick listener on resource button
  for (let i = 0; i < allResource.length; i++) {
    let button_Name = "." + allResource[i];
    $(document).on("click", button_Name, function () {
      $("a").removeClass("active");
      $(this).addClass("active");

      //   load(endpoint[i], resources[i], i);
      //   query();
      document.getElementById("result-box").style.display = "none";
      document.getElementById("overview-box").style.display = "none";
      let selectedResource = button_Name.slice(1);

      let resourceValue = data[selectedResource];
      let param = resourceValue["queryParam"][0]["name"];
      let value = resourceValue["queryParam"][0]["value"][0];
      resource = button_Name.slice(1);
      searchParams = {};
      searchParams[param] = value;
      document.getElementById(
        "parameter-text"
      ).innerHTML = `Find ${resource} based on Paramaters`;
      document.getElementById("resources-name").innerHTML =
        `<p class="resource-name-heading">` + resource + ` <p>`;
      document.getElementById("selected-query").innerHTML = "";

      driver(button_Name.slice(1), searchParams, 1);
      document.getElementById("selection_box").style.display = "block";
    });
  }
}

async function driver(selectedResource, searchParams, page) {
  createQueryIcons();

  let result = await fhirSearch(selectedResource, searchParams, page, count);

  populateParam(resource);
  totalCount = result.totalCount;
  resource = selectedResource;
  renderJSON(result);
  for (i in searchParams) {
    delete searchParams[i.toString()];
  }
  document.getElementById("result-box").style.display = "block";
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
