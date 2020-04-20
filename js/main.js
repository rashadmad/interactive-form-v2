"use strict";
 
//I want to encapsulated these diffrent defaults being set
{
    //we need the user to focus on the first input field
    usersName.focus()
    otherJobInputFieldDisplay("none");
    manipulateThemeSelectFieldActive("none")
    hideColorSelectField()
}

const tshirtDesignChange = () => {

    let JsPuns = 0;
    let HeartJs = 3;
    //we will need to remove the default option becasue it will no longer be able to be valid
    if (colorSelectField[0].textContent === "Please select a T-shirt theme") {
        colorSelectField.removeChild(colorSelectField[0])
    }
    if(isThemeSelectedEqualJsPuns()){
        colorSelectField.selectedIndex = 0;
        while (JsPuns < colorSelectField.length) {
            colorSelectField[JsPuns].style.display = "inline";
            JsPuns++;
        }
        while (HeartJs < colorSelectField.length) {
            colorSelectField[HeartJs].style.display = "none";
            HeartJs++;
        }
    }
    if(isThemeSelectedEqualHeartJs()){
        colorSelectField.selectedIndex = 3;
        while (JsPuns < colorSelectField.length) {
            colorSelectField[JsPuns].style.display = "none";
            JsPuns++;
        }
        while (HeartJs < colorSelectField.length) {
            colorSelectField[HeartJs].style.display = "inline";
            HeartJs++;
        }
    }
}

tshirtDesign.addEventListener('change', tshirtDesignChange);

const disableCheckbox = (checkboxToDisable,recentlyCheckedBox) => {
    console.log()
    if(checkboxToDisable !== recentlyCheckedBox && recentlyCheckedBox.checked) {
        checkboxToDisable.disabled = true
        checkboxToDisable.parentNode.classList.add("disabled");
    } else {
        checkboxToDisable.disabled = false
        checkboxToDisable.parentNode.classList.remove("disabled");
    }
}

//I want to have a general eventListener set up for all of the checkbox buttons
document.querySelectorAll("input[type=checkbox]").forEach(item => {
 
    item.addEventListener('click', event => {
        const checkedCheckBox = event.target
        const checkboxDayAndTime = event.target.dataset.dayAndTime
        // const checkboxBoolean = (status) => {
        //     radioButtonsDayAndTime.disabled = status
        // }
        if (checkboxDayAndTime === "Tuesday 9am-12pm") {
            disableCheckbox(javaScriptFrameworksInput,checkedCheckBox);
            disableCheckbox(expressWorkshopInput,checkedCheckBox);
        } else if (checkboxDayAndTime === "Tuesday 1pm-4pm") {
            disableCheckbox(javaScriptLibrariesInput,checkedCheckBox);
            disableCheckbox(nodeWorkshopInput,checkedCheckBox);
        } 
    });
});
//this function brings everything together
const submitButtonClicked = (event) => {
    //at the moment I want to prevent defualt behavior
    event.preventDefault();
    if (isValidUsername(usersName.value)){
        console.log("username is valid")
    } else {
        console.log("username is not valid")
    }
    if (isValidEmail(usersEmail.value)){
        console.log("user email is valid")
    } else {
        console.log("user email is not valid")
    }
    if (isValidCreditCardNumber(userCreditCardNumber.value)){
        console.log("user credit card is valid")
    } else {
        console.log("user credit card is not valid")
    }
    if (isValidZipcode(userZipCode.value)){
        console.log("user zipcode is valid")
    } else {
        console.log("user zipcode is not valid")
    }
    if (isValidCvvCode(cardVerificationValue.value)){
        console.log("user CVV is valid")
    } else {
        console.log("user CVV is not valid")
    }
    if (isThemeSelectedEqualJsPuns()) {
        console.log("Js puns theme selected")
    }
    if (isThemeSelectedEqualHeartJs()) {
        console.log("heart js")
    }
}

submitButton.addEventListener('click', submitButtonClicked);