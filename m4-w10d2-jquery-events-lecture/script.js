﻿// EVENTS

    //1. When the blue box is clicked, toggle the selected class

    //2. When any box is selected, toggle the selected class

    // Don't forget to comment out the .blue event handler

    //3. Wire up 1,2,3,4,5,6 to toggle selected on the divs
    // reference: http://keycode.info/ for keyCodes

    //4. Gradually make the textbox and checkboxes more interactive
        // - Allow the user to press enter in a checkbox and dynamically add a new checkbox below (make sure it works for all boxes)
        // - Change the textbox to a label
        // - Make the lable clickable to go back to a textbox
        // - Make the label have a strikethrough when the checkbox is checked
        

        





//1. Write a function that finds box1
//      and adds the class "grow"
function growBox() {
    //var box1 = $("#box1");
    //box1.addClass("grow");
    $("#box1").addClass("grow");

}

//2. Write a function that finds and
//      shrinks the blue box
function shrinkBlueBox() {
    $(".blue").addClass("shrink");
}


//3. Remove all of the elements inside of a div on the page
function removeAllStuffs() {
    $("div").empty(); 
}

//4. Detach all of the divs on the page
var boxes;
function detachDivs() {
    boxes = $("div").detach();

}

//5. Reattach the divs on the page
function reattachDivs() {
    $("section").append(boxes);
}

//6. Change the text for all of the <p> tags inside boxes
//      to say a message
function changeText(message) {
    $(".box p").text(message);
}

//7. Change the li to have <b>List Item</b> as their text
function makeBold() {
    $("li").text("<b>List Item</b>");
    //$("li").css("font-weight", "bold");
}

//8. Add the .shadow class to the last box
function addShadowToLastBox1() {
    $(".box").last().addClass("shadow");
}

function addShadowToLAstBox2(number) {
    $(`.box:nth-last-of-type(${number})`).addClass("shadow");
}


//9. Toggle the .shadow class on any box passed in
function toggleShadow(selector) {
    $(selector).toggleClass("shadow");
}


//10. Make any input textbox have the .yellow class
//      to give it a yellow background
function makeYellowTextboxes() {
    $("input[type='text']").addClass("yellow");
}


//11. Change the value of the textbox to "Hello World"
function setTextboxValue() {
    $("input[type='text']").val("Hello World!");
}

//12. Now go back and allow a message to be passed in

//13. Append a new list item
function addNewListItem() {
    //Find out how many li we currently have
    var count = $("#box3 ul").children().length;

    //Create a new list item
    var li = $("<li>").text(`Item ${count + 1}`);

    //Find the list (<ul>) that we will add the list item to
    var ul = $("#box3 ul");

    //Append our new list item
    ul.append(li);
}



//14. Add a new checkbox and textbox
//      - make sure to change the id
function addNewItem() {
    //Find the item we want to copy
    var htmlToCopy = $("#templateItem")[0].innerHTML;

    var newDiv = $(htmlToCopy);

    
    //Get the container we want to add to
    var box6 = $("#box6");

    //Append the copied div
    box6.append(newDiv);

    newDiv.children("input[type='text']").focus();
}



//15. Now make it possible to switch a textbox to a label

//16. Make all the boxes fade out
function disappear() {
    $(".box").fadeOut(10000);
}