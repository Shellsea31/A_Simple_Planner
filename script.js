$(document).ready(function() {

    $("#currentDay").append(moment().format('MMMM Do YYYY'));

    // this is the current time
    let now = moment().hour();

    let moments = [moment('9', 'h'), moment('10', 'h'), moment('11', 'h'), moment('12', 'h'), 
    moment('13', 'h'), moment('14', 'h'), moment('15', 'h'), moment('16', 'h'), moment('17', 'h')];

    // console.log(now) //current time
    // console.log(moments); //array of possible moments

    // loop through all possible moments
    for (let i = 0; i < moments.length; i++) {
        // make them numbers
        let allMoments = parseInt(moments[i]._i);

        // begin conditionals to change color of input
        if (allMoments < now) {
            console.log(allMoments)
        }
    }
    

    
    

    
    
    

    




})