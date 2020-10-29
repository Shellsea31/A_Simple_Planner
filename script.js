$(document).ready(function () {
  $("#currentDay").append(moment().format("MMMM Do YYYY"));

// this is the current time
  let now = moment().hour();
// target all textarea elements by their class
  let textArea = document.querySelectorAll(".col-sm-10");

  for (let i = 0; i < textArea.length; i++) {
    // parse each textarea id into number
    let parsedTimes = parseInt(textArea[i].id);

    // compare parsedTimes to now to change color of textarea
    if (parsedTimes === now) {
      console.log(parsedTimes);
      console.log(textArea[i]);
      $(textArea[i]).addClass("present");
    }
  }
});
