//hide the other input field as stated in the instructions
const otherJobInputFieldDisplay = (displayType) => {
    otherInputField.style.display = displayType;
}

//this function handles the defualt and active settings and act
const manipulateColorSelectFieldActive = (displayType) => {
 //createing a default state for selection field
 const defaultOption = document.createElement("option");
 defaultOption.innerHTML = "Please select a T-shirt theme"
 const firsChild = colorSelectField.childNodes[0];
 let i = 1
    //createing a default state for selection field
    if(displayType === "none"){
    colorSelectField.insertBefore(defaultOption, firsChild);
    } else {
    //I need to hide the first element in the Design selection box
    i = 0

    colorSelectField.removeChild(colorSelectField[0]);
    }
    colorSelectField.selectedIndex = 0;
    //loop through all elements in this select field
    while (i < colorSelectField.length) {
        colorSelectField[i].style.display = displayType;
        i++;
    }
}

//we need to hide the select theme
const manipulateThemeSelectFieldActive = (displayType) => {
    tshirtDesign[0].style.display = displayType
}