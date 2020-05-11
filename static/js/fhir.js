//Function for hitting the API with the query searchParamseters
//and returning the json object
let resource, searchParams, page, count;
async function fhirSearch(resource, searchParams, page, count) {
  let fhirUrl = storageDriver({ key: "api_url" }, "local", "get");
  // if fhirUrl gets nothing from the storageDriver
  if (fhirUrl == null) {
    return {
      status: "Failure",
      message: "Invalid URl",
    };
  }
  let lastElement = fhirUrl.slice(-1);
  if (lastElement != "/") fhirUrl += "/";
  let fhirReqHeaders = new Headers();
  let applicationToken = await oauth();
  // if applicationToken is not found
  if (applicationToken["status"] == "Failure") {
    return {
      status: "Failure",
      message: "Invalid Credentials",
    };
  }
  let accessToken = applicationToken["token"];
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
  let pageQuery = "&_page=" + page + "&_count=" + count;
  let data = await fetch(
    fhirUrl + resource + "?" + query + pageQuery,
    requestOptions
  )
    .then((response) =>
      response.text().then((result) => {
        if (response.ok) {
          result = JSON.parse(result);
          result["status"] = response.status;
          result["message"] = "Successfully Executed";
          return result;
        } else {
          result = JSON.parse(result);
          return {
            status: response.status,
            message: result["issue"][0]["diagnostics"],
          };
        }
      })
    )
    .catch((error) => {
      console.log(error);
      return {
        status: "Failure",
        code: "200",
        message: error,
      };
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
