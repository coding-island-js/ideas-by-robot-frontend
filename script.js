const moviePlot = document.getElementById("displayMoviePlot-id");

// call OpenAI API

function getScienceMoviePlot() {
  // const url = "http://localhost:8080/movieplot/";

  const url = "https://ideas-by-robot.up.railway.app/movieplot/";

  fetch(url, {
    method: "GET",
  })
    .then((res) => res.text())
    .then((data) => {
      //   console.log(data);
      const displayMoviePlot = data;
      moviePlot.innerText = displayMoviePlot;
    })
    .catch((error) => console.error(error));
}