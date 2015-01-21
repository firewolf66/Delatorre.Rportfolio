/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

// Color of background and of the bar that is said to be at.
$("document").ready(function() {
    $(".Nike").css("background-color", "Gray");
    $('p:last').css({"background-color": "Red", "color": "white"});
    $('p:first').css({"background-color": "Green", "color": "white"});

    // This is the accordian
    $('#superHumans').accordion({header: "h3"});

    // This lets the acoordian happen when the mouse goes over or off
    $("h1").bind('mouseover', mouseOverMe).bind('mouseout', mouseOutMe);

    /// This lets it happen when the mouse goes over
    $('div').bind('mouseover', mouseOverMe());

    // This lets it happen when the mouse clicks
    $('h1').bind('click', mouseClick);

    // These replace whatever they say it is going to replace or remove 
    $('#replaceWText').bind('click', replaceWText);
    $('#randPara').bind('click', addAPara);
    $('#removePara').bind('click', removeAPara);

    // This hides the image or shows it
    $('#hide').bind('click', hideTheImage);
    $('#show').bind('click', showTheImage);


});

// This make the image explode
function hideTheImage() {
    $('div').hide('explode', {}, 2500);
}
// This makes the image fold
function showTheImage() {
    $('div').show('fold', {}, 2500);
}


// This function removes it
function removeAPara() {
    $('#randPara p:last').remove();
}
// Yhis function adds it
function addAPara() {
    $('#randPara').append('<p>ADDED</p>');
}
// This function Replace the text with replaced when clicked
function replaceWText() {
    $('#replaceWText').text('Replaced!');
}




// When the mouse goes over it will change to a other text
function mouseOverMe() {
    $("h1").html("Ramon De La Torre");
}

// When mouse goes over it will change to another text
function mouseOutMe() {
    $('h1').html('Paris Saint Germain');
}

// When clicked on it will change to this text
function mouseClick() {
    $('p').html('Risk Everything');
}


