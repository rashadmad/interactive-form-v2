"use strict";
 
//I want to encapsulated these diffrent defaults being set
{
    //we need the user to focus on the first input field
    usersName.focus()
    otherJobInputFieldDisplay("none");
    manipulateThemeSelectFieldActive("none")
    hideColorSelectField()
    userPayment[0].style.display = "none"
}

const jobRoleChange = () => {
    if(jobRoleSelect.value === "other"){
        otherJobInputFieldDisplay("inline");
    } else {
        otherJobInputFieldDisplay("none");
    }
}

jobRoleSelect.addEventListener('change', jobRoleChange)

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

//we need to disable a checkbox in cases that there are other events selected at that time
const disableCheckbox = (checkboxToDisable,recentlyCheckedBox) => {
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

        if (checkboxDayAndTime === "Tuesday 9am-12pm") {
            disableCheckbox(javaScriptFrameworksInput,checkedCheckBox);
            disableCheckbox(expressWorkshopInput,checkedCheckBox);
        } else if (checkboxDayAndTime === "Tuesday 1pm-4pm") {
            disableCheckbox(javaScriptLibrariesInput,checkedCheckBox);
            disableCheckbox(nodeWorkshopInput,checkedCheckBox);
        } 
        if(event.target.checked){
            checkBoxesChecked++;
        } else {
            checkBoxesChecked--;
        }
    });
});

//i need to empty out the credit card field. I need to be able to toggle the contents
const showCreditCardFieldContents = (show) => {
    if(show){
        creditCardField.innerHTML = originalCreditCardFieldStat  
    } else {
        creditCardField.innerHTML = ""
    }
}

userPayment.addEventListener('change', event => {
    if (userPayment.value === "credit card"){
        showCreditCardFieldContents(true);
    } else {
        showCreditCardFieldContents(false);
    }
});

//this function brings everything together when the register button is pressed
const submitButtonClicked = (event) => {

    //I want to prevent default behavior when one validation condition is not true
    let shouldWeProceed = isValidUsername(usersName.value) * isValidEmail(usersEmail.value) * isValidCreditCardNumber(userCreditCardNumber.value) * isValidZipcode(userZipCode.value) * isValidCvvCode(cardVerificationValue.value) * AtLeastTwoCheckBoxesSlected(checkBoxesChecked)
    debugger
    if(shouldWeProceed != 1 && checkBoxesChecked < 1){
        event.preventDefault()
    } else {
        isEnoughActivitiesSelected(areAtLeastTwoCheckBoxesSlected(checkBoxesChecked))
        isThisChoiceValid(isValidUsername(usersName.value),usersName,"Can only contain letters a-z in lowercase")
        isThisChoiceValid(isValidEmail(usersEmail.value),usersEmail,"Needs to be a valid email")
        isThisChoiceValid(isValidCreditCardNumber(userCreditCardNumber.value),userCreditCardNumber,"Needs to be a valid credit card number")
        isThisChoiceValid(isValidZipcode(userZipCode.value),userZipCode,"Needs to be a valid zip code")
        isThisChoiceValid(isValidCvvCode(cardVerificationValue.value),cardVerificationValue,"The CVV code is on the back of your credit card, its three digits")    
    }
}

submitButton.addEventListener('click', submitButtonClicked);