const gifBtn = document.getElementById("new-gif");
const jokeBtn = document.getElementById("joke-button");
// jokeBtn.addEventListener("click", function() {
//   fetch("https://api.chucknorris.io/jokes/random")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data.value);
//       document.getElementById("giphy-area").innerHTML =
//         "<p class='text'> " + data.value + "</p>";
//     });
// });

// gifBtn.addEventListener("click", function() {
//   fetch(
//     "https://api.giphy.com/v1/gifs/random?api_key=PekqXztkMPaeTzEUzFZG8ceSpeA4GRee&tag=cats&rating=G"
//   )
//     .then(function(response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function(data) {
//       console.log(data.data.image_url);
//       document.getElementById("giphy-area").innerHTML =
//         "<img width='800px' src='" + data.data.image_url + "'/>";
//     });
// });

// using ajax
jokeBtn.addEventListener("click", function() {
  $.ajax({
    url: "https://api.chucknorris.io/jokes/random",
    method: "GET",
    success: function(result) {
      console.log(result.value);
      document.getElementById("giphy-area").innerHTML =
        "<p class='text'> " + result.value + "</p>";
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
});

gifBtn.addEventListener("click", function() {
  $.ajax({
    url:
      "https://api.giphy.com/v1/gifs/random?api_key=PekqXztkMPaeTzEUzFZG8ceSpeA4GRee&tag=cats&rating=G",
    method: "GET",
    success: function(data) {
      console.log(data);
      document.getElementById("giphy-area").innerHTML =
        "<img width='600px' src='" + data.data.image_url + "'/>";
    },
    error: function(error) {
      console.log(`Error: ${error}`);
    }
  });
});
