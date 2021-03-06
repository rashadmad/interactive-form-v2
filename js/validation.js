// Can only contain letters a-z in lowercase and can be one or two names **first and last names
const isValidUsername = (userNameValue) => userNameRegex.test(userNameValue)

// Must be a valid email address, too be more specific it has to have a @ symbol a . and either a com,org etc...
const isValidEmail = (userEmailValue) => emailRegex.test(userEmailValue)

// Must be a valid credit card number, digit groups of four
const isValidCreditCardNumber = (userCreditCardNumberValue,type) => {
    let valueToReturn = false
    if(type){
        valueToReturn = creditCardRegex.test(userCreditCardNumberValue) ? true : false
    } else {
        valueToReturn = true
    }
    return valueToReturn
}

// Must be a valid credit card number, digit groups of four
const isValidZipcode = (userZipCode,type) => {
    let valueToReturn = false
    if(type){
        valueToReturn = zipCodeRegex.test(userZipCode) ? true : false
    } else {
        valueToReturn = true
    }
    return valueToReturn
}
// Must be a valid credit card number, digit groups of four
const isValidCvvCode = (cvvCode,type) => {
    let valueToReturn = false
    if(type){
        valueToReturn = cvvCodeRegex.test(cvvCode) ? true : false
    } else {
        valueToReturn = true
    }
    return valueToReturn
}

//I need to set up a system for theam selection 
const isThemeSelectedEqualJsPuns = () => (tshirtDesign.value === "js puns") ? true : false;

const isThemeSelectedEqualHeartJs = () => (tshirtDesign.value === "heart js") ? true : false;

//I need to supply boolean values for the activities section
const isMainConfrenceInputSelected = () => mainConfrenceInput.checked ? true : false; 
const isJavaScriptFrameworksInputSelected = () => javaScriptFrameworksInput.checked ? true : false; 
const isJavaScriptLibrariesInputSelected = () => javaScriptLibrariesInput.checked ? true : false; 
const isExpressWorkshopInputSelected = () => expressWorkshopInput.checked ? true : false; 
const isNodeWorkshopInputSelected = () => nodeWorkshopInput.checked ? true : false; 
const isBuildToolsSelected = () => buildTools.checked ? true : false; 
const isNpmWorkshopSelected = () => npmWorkshop.checked ? true : false; 

const mainConfValue = () => isMainConfrenceInputSelected() ? 200 : 0;
const javaScriptFrameworksValue = () => isJavaScriptFrameworksInputSelected() ? 100 : 0;
const javaScriptLibrarieValue = () => isJavaScriptLibrariesInputSelected() ? 100 : 0;
const expressWorkshopInputValue = () => isExpressWorkshopInputSelected() ? 100 : 0;
const nodeWorkshopInputValue = () => isNodeWorkshopInputSelected() ? 100 : 0;
const buildToolsValue = () => isBuildToolsSelected() ? 100 : 0;
const npmWorkshopValue = () => isNpmWorkshopSelected() ? 100 : 0;


//I want to add an error message for when a user has not selected two activities
const AtLeastOneCheckBoxesSlected = (amountOfCheckBoxesChecked) => {
    returnedValue = false
    if (amountOfCheckBoxesChecked > 0) {
        returnedValue = true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    } else { 
        returnedValue = false     
    }
    return returnedValue 
}

const showNhideCheckBox = (isCheckboxValid) => {
    if(isCheckboxValid === false){
        const theToolTip = document.querySelector('.activitiesToolTip');
        if(activitiesTooltipToggled === false){
            let spanContainer = document.createElement('span');
            spanContainer.innerHTML = "Please select at least one activity";
            spanContainer.classList.add("activitiesToolTip");
            labelList[6].parentNode.insertBefore(spanContainer, labelList[6]);
            activitiesTooltipToggled = true
        }
    } else {
        const theToolTip = document.querySelector('.activitiesToolTip');
        if(theToolTip !== null){
            theToolTip.parentElement.removeChild(theToolTip);
            activitiesTooltipToggled = false
        }
    }
}

const isThisChoiceValid = (choice,inputField,toolTipText) => {

    const itsParent = inputField.previousSibling.parentNode;
    if (choice){
        if(inputField.previousSibling.className === "toolTip"){
            itsParent.removeChild(inputField.previousSibling) 
        };
        inputField.style.borderColor = "#6f9ddc";
    } else {
        //fix issue where tooltips can be recreated over and over agin
        if(inputField.previousSibling.className === "toolTip"){
            itsParent.removeChild(inputField.previousSibling)  
        }
        const toolTip = document.createElement("span");
        toolTip.innerHTML = toolTipText
        toolTip.classList.add("toolTip");
        itsParent.insertBefore(toolTip, inputField)
        inputField.style.borderColor = "red";
    }
}

