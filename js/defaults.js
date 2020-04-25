//hide the other input field as stated in the instructions
const otherJobInputFieldDisplay = (displayType) => {
    otherInputField.style.display = displayType;
}

//this function handles the defualt and active settings and act
const hideColorSelectField = () => {

 //createing a default state for selection field
 const defaultOption = document.createElement("option");
 defaultOption.innerHTML = "Please select a T-shirt theme"
 const firsChild = colorSelectField.childNodes[0];
 let i = 1

 //createing a default state for selection field
 colorSelectField.insertBefore(defaultOption, firsChild);
 colorSelectField.selectedIndex = 0;
    //loop through all elements in this select field
    while (i < colorSelectField.length) {
        colorSelectField[i].style.display = "none";
        i++;
    }
}

//I want to add an error message for when a user has not selected two activities
const areAtLeastTwoCheckBoxesSlected = (amountOfCheckBoxesChecked) => {
    returnedValue = false
    if (amountOfCheckBoxesChecked >= 2) {
        returnedValue = true;
    }    
    return returnedValue
}

//we need to hide the select theme
const manipulateThemeSelectFieldActive = (displayType) => {
    tshirtDesign[0].style.display = displayType
}

const removeAllTooltips = () => {
 let AllToolTips = document.getElementsByClassName('tooltip');
 AllToolTips.style.display = "none"
}