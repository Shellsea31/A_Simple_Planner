$(document).ready(function () {
  $("#currentDay").append(moment().format("MMMM Do YYYY"));

// this is the current time
  let now = moment().hour();
// get all headers
  let headers = document.getElementsByTagName("h4");

  for (let i = 0; i < headers.length; i++) {
    //   set each header id to allTimes
    let allTimes = headers[i].id;
    // make them numbers
    let parsedTimes = parseInt(allTimes);

    // begin conditionals to change color
    if (parsedTimes === now) {
      console.log(parsedTimes);
    }
  }
});
