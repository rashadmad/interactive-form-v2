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


//I need to set up a system for them selection 
const isThemeSelectedEqualJsPuns = () => (tshirtDesign.value === "js puns") ? true : false;
const isThemeSelectedEqualHeartJs = () => (tshirtDesign.value === "heart js") ? true : false;

const tshirtDesignChange = () => {
    //we will need to remove the default option becasue it will no longer be able to be valid
    if (colorSelectField[0].textContent === "Please select a T-shirt theme") {
        colorSelectField.removeChild(colorSelectField[0])
    }
    if(isThemeSelectedEqualJsPuns()){
        colorSelectField.selectedIndex = 0;
        colorSelectField[0].style.display = "inline";
        colorSelectField[1].style.display = "inline";
        colorSelectField[2].style.display = "inline";
        colorSelectField[3].style.display = "none";
        colorSelectField[4].style.display = "none";
        colorSelectField[5].style.display = "none";  
    }
    if(isThemeSelectedEqualHeartJs()){
        colorSelectField.selectedIndex = 3;
        colorSelectField[0].style.display = "none";
        colorSelectField[1].style.display = "none";
        colorSelectField[2].style.display = "none";
        colorSelectField[3].style.display = "inline";
        colorSelectField[4].style.display = "inline";
        colorSelectField[5].style.display = "inline";
    }
}

tshirtDesign.addEventListener('change', tshirtDesignChange);



