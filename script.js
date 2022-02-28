$(document).ready(function () {
  const proxyUrl = "https://cors-anywhere.herokuapp.com/";
  $.ajax({
    url: `${proxyUrl}https://newsapi.org/v2/top-headlines?country=eg&apikey=34cb23cca98c4838b8dd8a7f6cd99e60`,
    contentType:
      "application/x-www-form-urlencoded; charset=urf-8; text/plain; application/json",
    dataType: "json",
    mode: "core",
    headers: {
      "content-Type": "application/json,text/plain",
      Accept: "*/*",
      "Access-Control-Allow-Origin": "*",
    },
  }).then(function (data) {
    for (i = 0; i < data.articles.length; i++) {
      $("#news").append("<ul><li>" + data.articles[i].title + "</li></ul>");
      $("#arabicNews").append(
        "<a class='listNews' href = '" +
          data.articles[i].url +
          "'>" +
          data.articles[i].title +
          "</a>" +
          "<br><br>"
      );
    }
  });
});

// 34cb23cca98c4838b8dd8a7f6cd99e60

// const proxyUrl = "https://cors-anywhere.herokuapp.com/";
// const qInTitle = "";
// const from = "";
// const apiKey = "34cb23cca98c4838b8dd8a7f6cd99e60";
// // https://newsapi.org/v2/top-headlines?country=us&apiKey=34cb23cca98c4838b8dd8a7f6cd99e60
// const url = `${proxyUrl}https://newsapi.org/v2/top-headlines?country=us&apiKey=34cb23cca98c4838b8dd8a7f6cd99e60`;
// const request = new Request(url);

// fetch(request)
//   .then((response) => response.json())
//   .then((news) => {
//     console.log(news);
//     response.header("Access-Control-Allow-Origin", "*");
//     response.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//   })
//   .catch((error) => {
//     console.log(error);
//   });
