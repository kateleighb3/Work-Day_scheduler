// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.//


let today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY, hh:mm a"));

$(".saveBtn").click(function(){
    //Get nearby values of the description in jQuery
    let text = $(this).siblings(".description").val(); // retrieves the value of the input element with the class "description" that is a sibling of the button
    let time = $(this).parent().attr("id"); // retrieves the ID of the parent element (time-block/div id=hour-9) that contains the button.

    //Save text in local storage
    localStorage.setItem(time, text);
})

function trackTime(){
  // get current number of hours
  let currentTime = dayjs().hour();

  //loop over time blocks
  $(".time-block").each(function () {
    let timeBlock = parseInt($(this).attr("id").split("hour-")[1]); //.attr("id") retrieves the value of the "id" attribute of the current element. It returns the ID of the time block element.
    // .split("hour") splits the ID string at the string "hour" and returns an array of substrings. For example, if the ID is "hour9", it will split it into ["", "9"].
    // [1] accesses the second element (index 1) of the resulting array. In the example above, it retrieves the "9" substring.
    // parseInt() is a JavaScript function that converts a string to an integer. It parses the retrieved substring and returns the corresponding integer value.
    // The parsed integer value is assigned to the variable timeBlock.
    //this code iterates over each element with the class "time-block", extracts the numerical hour value from its ID (assuming the ID follows the format "hourX"), and assigns the parsed hour value to the variable timeBlock
  
    //To check the time and add the classes for background indicators

    if (timeBlock < currentTime) {
      $(this).removeClass("future"); //removes the CSS class "future" from the current element ($(this) refers to the time block element being evaluated). This class is typically used to style elements that represent future time blocks.
      $(this).removeClass("present");
      $(this).addClass("past");
    }
    else if (timeBlock === currentTime) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })

}

// Get item from storage 
//this code retrieves a stored value from localStorage with the key "hour9" and 
//sets it as the value of the element with the class "description" within the element 
//with the ID "hour-9".
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

  trackTime ();
})
