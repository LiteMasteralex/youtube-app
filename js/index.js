//
$("#videoQuery").on("submit", function(event) { 
  event.preventDefault();

  let url = "https://www.googleapis.com/youtube/v3/search";
  let keyWord = $("#keyWord").val();
  let apiKey = "AIzaSyAz4txV5bfaSkaR5Mh947J6O22AfiGPjZ4";

  $.ajax({
    url: url,
    data: {
      part: "snippet",
      q: keyWord,
      key: apiKey,
      maxResults: 10
    },
    method: "GET",
    dataType: "json",
    success: function(response) {
      console.log(response);
      // response.articles.forEach(function(article) {

      //   let title = `<h3>${article.title}</h3>`;
      //   let image = `<image class="newsImage" src="${article.urlToImage}" />`;
      //   let author = `<div class="newsAuthor">${article.author}</div>`;
      //   let description = `<div class="newsDescription">${article.description}</div>`;
      //   let newHTML = `<div class="newsContainer">` + title + image + author + description + `</div>`;
      //   $(".result").append(newHTML);
      // })
    },
    error: function(error) {
      console.log(error)
    }
  })

});

//Second Request
/*
$.ajax({
  url: url,
  data: {
    part: "snippet",
    key: apiKey,
    maxResults: 10,
    pageToken: result
  },
  method: "GET",
  dataType: "json",
  success: function(response) {
    console.log(response);
    // response.articles.forEach(function(article) {

    //   let title = `<h3>${article.title}</h3>`;
    //   let image = `<image class="newsImage" src="${article.urlToImage}" />`;
    //   let author = `<div class="newsAuthor">${article.author}</div>`;
    //   let description = `<div class="newsDescription">${article.description}</div>`;
    //   let newHTML = `<div class="newsContainer">` + title + image + author + description + `</div>`;
    //   $(".result").append(newHTML);
    // })
  },
  error: function(error) {
    console.log(error)
  }
});
*/