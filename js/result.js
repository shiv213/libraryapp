$(document).ready(function() {
  init();

});

function init() {
  resultstitle.classList.add('hide');
  searchresults.classList.add('hide');
};

function reserveBook(booknumber) {
  document.getElementById('reserveDiv' + booknumber).innerHTML = '<p2><b>Reserved!</b></p2>';
}

function getBook() {
  resultstitle.classList.remove('hide');
  searchresults.classList.remove('hide');

  var openlibraryAPI = $("#q").val();
  openlibraryAPI = "https://openlibrary.org/search.json?q=" + openlibraryAPI;
  console.log(openlibraryAPI);
  console.log("Searching for ", openlibraryAPI);
  $.getJSON(openlibraryAPI, function(json) {
    console.log("Results found ", json.docs.length);
    console.log(json.docs);
    var added = 0;
    var i = 0;
    var resultHtml = "";
    while (added < 10 && i < json.docs.length) {
      if (json.docs[i].isbn && json.docs[i].isbn.length > 0) {
        var isbn = json.docs[i].isbn[0];
        var coverimagesrc = "https://covers.openlibrary.org/b/isbn/" + isbn + "-M.jpg";
        var title = json.docs[i].title_suggest;
        var author = json.docs[i].author_name;
        resultHtml += "<div class=\"w3agile frontPage\">" +
          "<img src=\"" + coverimagesrc + "\"/><br>" +
          "<p2>" + title + "</p2><br>" +
          "<p2> By: " + author + "</p2> <br>" +
          "<div id=\"reserveDiv" + added + "\">" +
          "<button id=\"reserveButton" + added + "\" onclick=\"reserveBook(" + added + ")\">Reserve</button>" +
          "</div>";
        "<hr>" +
        "</div>";
        added++;
      }
      i++;
    }
    document.getElementById("searchresults").innerHTML = resultHtml;
  });
};

document.getElementById
