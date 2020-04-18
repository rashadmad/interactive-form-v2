"use strict";
 
//I want to encapsulated these diffrent defaults being set
const setDefaults = () => {
    //we need the user to focus on the first input field
    usersName.focus()
    otherJobInputFieldDisplay("none");
    manipulateColorSelectFieldActive("none")
    manipulateColorSelectFieldActive("inline")
}

setDefaults();



