// The function to create the tabular data to display
// fhirSearch results.
function renderJSON(queryData) {
  let i = 1;
  let text = "<div class='list-group list-group-flush'>";
  if (queryData.totalCount == 0) {
    text = "<div>No results found</div>";
  } else {
    for (entry in queryData["entry"][0]["resource"]) {
      let target_id = "div_" + i.toString();
      let target = "#" + target_id;
      let source_json = target_id + "#";
      text +=
        "<a class='list-group-item list-group-item-action result-list-item result-table' data-target=" +
        `${target} data-toggle='collapse' onclick = renderJSONviewer('${target_id}') ><div class='container'>`;
      let j = 0;

      for (let i in data[resource]["displayParam"]) {
        functionName = data[resource]["displayParam"][i];
        if (j % 2 == 0) {
          text += `<div class='row'><div class='col-6'>`;
          text += data[resource][functionName](
            queryData["entry"][0]["resource"][entry]
          );
          text += `</div>`;
        } else {
          text += `<div class='col-6'>`;
          text += data[resource][functionName](
            queryData["entry"][0]["resource"][entry]
          );

          text += `</div></div>`;
        }
        j++;
      }
      if (j % 2 != 0) {
        text += `</div>`;
      }
      text +=
        "</div></a>" +
        `<pre class='collapse json_collapse' id=${source_json}>` +
        JSON.stringify(queryData["entry"][0]["resource"][entry]) +
        "</pre>" +
        `<pre class='collapse json_collapse' id=${target_id}>` +
        "</pre>";
      i++;
    }
    text += "</div>";
  }

  document.getElementById("resource-result").innerHTML = text;
}
