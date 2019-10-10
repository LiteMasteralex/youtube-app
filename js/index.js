//GlobaL variable for future calls
let nextPage;
let keyWord;
let url = "https://www.googleapis.com/youtube/v3/search";
let apiKey = "AIzaSyAz4txV5bfaSkaR5Mh947J6O22AfiGPjZ4";

// Listener for the search query
$("#videoQuery").on("submit", function(event) { 
  event.preventDefault();
  $(".result").empty();
  $(".moreButton").remove();
   keyWord= $("#keyWord").val();
   $("#keyWord").val("");

  $.ajax({
    url: url,
    data: {
      part: "snippet",
      q: keyWord,
      key: apiKey,
      maxResults: 10,
      type: "video"
    },
    method: "GET",
    dataType: "json",
    success: function(response) {
      nextPage = response.nextPageToken;
      response.items.forEach(function(video) {
        let imageUrl = video.snippet.thumbnails.medium.url;
        let videoUrl = 'https://www.youtube.com/watch?v=' + video.id.videoId;
        let image = `<image class="thumbnail" src="${imageUrl}" />`;
        let title = `<div class="title">${video.snippet.title}</div>`;
        let description = `<div class="videoDescription">${video.snippet.description}</div>`;
        let container = `<span class="thumbContainer">${image}</span>` + `<span class="infoContainer">${title}${description}</span>`
        let newHTML = `<div onclick="window.open('${videoUrl}', 'mywindow');" class="videoContainer">${container}</div>`;
        $(".result").append(newHTML);
      });
      $("body").append(`<button class="moreButton">More</button>`)
    },
    error: function(error) {
      console.log(error)
    }
  });
 

});

//Get more videos request
$("body").on("click", "button.moreButton", function() {
  $.ajax({
    url: url,
    data: {
      part: "snippet",
      q: keyWord,
      key: apiKey,
      maxResults: 10,
      type: "video",
      pageToken: nextPage
    },
    method: "GET",
    dataType: "json",
    success: function(response) {
      nextPage = response.nextPageToken;
      response.items.forEach(function(video) {
        let imageUrl = video.snippet.thumbnails.medium.url;
        let videoUrl = 'https://www.youtube.com/watch?v=' + video.id.videoId;
        let image = `<image class="thumbnail" src="${imageUrl}" />`;
        let title = `<div class="title">${video.snippet.title}</div>`;
        let description = `<div class="videoDescription">${video.snippet.description}</div>`;
        let container = `<span class="thumbContainer">${image}</span>` + `<span class="infoContainer">${title}${description}</span>`
        let newHTML = `<div onclick="window.open('${videoUrl}', 'mywindow');" class="videoContainer">${container}</div>`;
        $(".result").append(newHTML);
      });
    },
    error: function(error) {
      console.log(error)
    }
  });
});