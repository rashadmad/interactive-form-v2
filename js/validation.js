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



