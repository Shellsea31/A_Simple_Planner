$(document).ready(function () {
  $("#currentDay").append(moment().format("MMMM Do YYYY"));

// this is the current time
  let now = moment().hour();
// target all textarea elements by their class
  let textArea = document.querySelectorAll(".col-sm-10");
  // target all buttons that submit text
  let submitBtns = document.querySelectorAll(".saveBtn");
  // console.log(submitBtns)


  // loop through all times
  for (let i = 0; i < textArea.length; i++) {
    // parse each textarea div id into number
    let parsedTimes = parseInt(textArea[i].id);

    // compare parsedTimes to now to change color of textarea
    if (parsedTimes < now) {
      $(textArea[i]).addClass("past");
    } 
    
    if (parsedTimes > now) {
        $(textArea[i]).addClass("future");
    } 

    if (parsedTimes === now) {
        $(textArea[i]).addClass("present");
    } 
  }


  // loop through all buttons
  for (let i = 0; i < submitBtns.length; i++) {

    // when you click the button
    $(submitBtns[i]).on("click", function(){

      // set the text area of each submit button
      let thisTextArea = this.previousElementSibling;
      console.log(thisTextArea);
      thisTextArea.append(thisTextArea.value);

      // create an object for all user entries
      let userNotes = {
        nine: textArea[0].value,
        ten: textArea[1].value,
        eleven: textArea[2].value,
        twelve: textArea[3].value,
        one: textArea[4].value,
        two: textArea[5].value,
        three: textArea[6].value,
        four: textArea[7].value,
        five: textArea[8].value,
      }
    
      console.log(userNotes);


      
      

    })
    
     // create object for all entries
 
  }

  

});
