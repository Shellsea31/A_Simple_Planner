$(document).ready(function () {
  $("#currentDay").append(moment().format("MMMM Do YYYY"));

  // this is the current time
  let now = moment().hour();
  // this is the times on the schedule
  let times = [9, 10, 11, 12, 13, 14, 15, 16, 17];

  // loop through all times
  times.forEach((thisTime) => {
    let getTime = window.localStorage.getItem(thisTime);

    // compare thisTime to now to change color of textarea
    // with $(`#${thisTime}`) you are targeting the element with the id corresponding
    // to that specific number in the array
    if (thisTime < now) {
      $(`#${thisTime}`).addClass("past");
      $(`#${thisTime}`).attr("disabled", true);
    }

    if (thisTime > now) {
      $(`#${thisTime}`).addClass("future");
    }

    if (thisTime === now) {
      $(`#${thisTime}`).addClass("present");
    }

    // if the value of keyword this time is null
    if (getTime === null) {
      // set value to empty string
      window.localStorage.setItem(thisTime, "");
      // if something is written / the length is higher than 0
    } else if (getTime.length > 0) {
      $(`#${thisTime}`).val(getTime);
    }
  });

  // when you click the submit form
  $("form").on("submit", function (e) {
    e.preventDefault();
    // let time equal the id (num) corresponding to the button you clicked
    let time = e.target.previousElementSibling.getAttribute("id");
    // let text equal the words typed into the textarea corresponding to the button you clicked
    let text = e.target.previousElementSibling.value;
    // set values to local storage
    localStorage.setItem(time, text);
  });
});
