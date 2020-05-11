// Function to be called whenever a
// page no is clicked for pagination
function paginationClick(page) {
  driver(resource, searchParams, page);
}

// The function is called to create buttons iteratively
//  based on the page no requested 'N', total pages
// and the entries to be listed in one page.
function createButtons(currentPage, totalCount) {
  let totalPages = parseInt(totalCount / count);
  if (totalCount % count != 0) {
    totalPages += 1;
  }
  let text = "";
  let range = 5;

  if (range > totalPages) {
    range = totalPages;
  }
  let start = 1;

  // Don't use negative values, force start at 1
  if (currentPage < range / 2 + 1) {
    start = 1;

    // Don't go beyond the last page
  } else if (currentPage >= totalPages - range / 2) {
    start = Math.floor(totalPages - range + 1);
  } else {
    start = currentPage - Math.floor(range / 2);
  }

  if (start != 1) {
    text +=
      "<button type='button' class='btn btn-outline-dark' onclick=paginationClick(" +
      1 +
      ")>" +
      "First Page" +
      "</button> ";
  }
  for (let i = start; i <= start + range - 1; i++) {
    if (i == currentPage) {
      text +=
        "<button type='button' class='btn btn-outline-dark active' onclick=paginationClick(" +
        i +
        ")>" +
        i +
        "</button> ";
    } else {
      text +=
        "<button type='button' class='btn btn-outline-dark' onclick=paginationClick(" +
        i +
        ")>" +
        i +
        "</button> ";
    }
  }
  if (start + range - 1 != totalPages) {
    text +=
      "<button type='button' class='btn btn-outline-dark' onclick=paginationClick(" +
      totalPages +
      ")>" +
      "Last Page" +
      "</button> ";
  }
  document.getElementById("pagination_button").innerHTML = text;

  let stats = "Displaying ";
  start = (currentPage - 1) * count + 1;
  if (currentPage != totalPages) {
    end = currentPage * count;
  } else {
    end = totalCount;
  }
  stats += `${start}-${end} out of ${totalCount}`;

  document.getElementById("pagination_stats").innerHTML = stats;
}
