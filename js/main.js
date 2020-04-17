"use strict";
    //createing a default state for selection field
    const defaultOption = document.createElement("option");
    defaultOption.innerHTML = "Please select a T-shirt theme"
    const firsChild = colorSelectField.childNodes[0]
    
    //hide the other input field as stated in the instructions

    
const colorSelectFieldDefaults = () => {
    //we need the user to focus on the first input field
    usersName.focus()
    //I need to hide the first element in the Design selection box
    tshirtDesign.removeChild(tshirtDesign[0]);
    colorSelectField.insertBefore(defaultOption, firsChild);
    colorSelectField.selectedIndex = 0;
    let i = 1;
    //loop through all elements in this select field
    while (i < colorSelectField.length) {
        colorSelectField[i].style.display = "none";
        i++;
      }
}    

//I want to encapsulated these diffrent defaults being set
const setDefaults = () => {
    colorSelectFieldDefaults();
}
setDefaults();

