//Function for hitting the API with the query searchParamseters
//and returning the json object
let resource, searchParams, page, count;
async function fhirSearch(resource, searchParams, page, count) {
  let fhirUrl = storageDriver({ key: "api_url" }, "local", "get");
  let lastElement = fhirUrl.slice(-1);
  if (lastElement != "/") fhirUrl += "/";
  let fhirReqHeaders = new Headers();
  let applicationToken = oauth();
  let acessToken = applicationToken["token"];
  fhirReqHeaders.append("x-api-key", accessToken);
  fhirReqHeaders.append("Content-Type", "application/json");
  let requestOptions = {
    method: "GET",
    headers: fhirReqHeaders,
    redirect: "follow",
  };
  let query = "";
  for (let value in searchParams) {
    if (searchParams.hasOwnProperty(value)) {
      query += value + "=" + searchParams[value] + "&";
    }
  }
  query = query.slice(0, -1);
  let data;
  let pageQuery = "&_page=" + page + "&_count=" + count;
  await fetch(fhirUrl + resource + "?" + query + pageQuery, requestOptions)
    .then((response) => response.text())
    .then((result) => {
      data = JSON.parse(result);
    })
    .catch((error) => {
      alert("Error while hitting API !");
    });
  return data;
}

//For using the FHIRSearch function ,
//the Parent function must be async
//for eg:-
//  async function testing(a,b,c,d)
//  {
//    var y=await FHIRSearch(a,b,c,d);
//    console.log(y["totalCount"]);
//    return y;
//  }
