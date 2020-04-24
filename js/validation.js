// Can only contain letters a-z in lowercase and can be one or two names **first and last names
const isValidUsername = (userNameValue) => userNameRegex.test(userNameValue)

// Must be a valid email address, too be more specific it has to have a @ symbol a . and either a com,org etc...
const isValidEmail = (userEmailValue) => emailRegex.test(userEmailValue)

// Must be a valid credit card number, digit groups of four
const isValidCreditCardNumber = (userCreditCardNumberValue) => creditCardRegex.test(userCreditCardNumberValue)

// Must be a valid credit card number, digit groups of four
const isValidZipcode = (userZipCode) => zipCodeRegex.test(userZipCode)

// Must be a valid credit card number, digit groups of four
const isValidCvvCode = (cvvCode) => cvvCodeRegex.test(cvvCode)


//I need to set up a system for theam selection 
const isThemeSelectedEqualJsPuns = () => (tshirtDesign.value === "js puns") ? true : false;

const isThemeSelectedEqualHeartJs = () => (tshirtDesign.value === "heart js") ? true : false;

//I need to supply boolean values for the activities section
const isMainConfrenceInputSelected = () => (mainConfrenceInput.checked) ? true : false; 
const isJavaScriptFrameworksInputSelected = () => (javaScriptFrameworksInput.checked) ? true : false; 
const isJavaScriptLibrariesInputSelected = () => (javaScriptLibrariesInput.checked) ? true : false; 
const isExpressWorkshopInputSelected = () => (expressWorkshopInput.checked) ? true : false; 
const isNodeWorkshopInputSelected = () => (nodeWorkshopInput.checked) ? true : false; 
const isBuildToolsSelected = () => (buildTools.checked) ? true : false; 
const isNpmWorkshopSelected = () => (npmWorkshop.checked) ? true : false; 

const isThisChoiceValid = (choice,inputField,toolTipText) => {

    const itsParent = inputField.previousSibling.parentNode;
    if (choice){
        if(inputField.previousSibling.className === "toolTip"){
            itsParent.removeChild(inputField.previousSibling) 
        };
        usersName.style.borderColor = "#6f9ddc";
    } else {
        //fix issue where tooltips can be recreated over and over agin
        if(inputField.previousSibling.className === "toolTip"){itsParent.removeChild(inputField.previousSibling)  }
        const toolTip = document.createElement("span");
        toolTip.innerHTML = toolTipText
        toolTip.classList.add("toolTip");
        itsParent.insertBefore(toolTip, inputField)
        inputField.style.borderColor = "red";
    }
}