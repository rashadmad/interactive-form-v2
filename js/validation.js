// Can only contain letters a-z in lowercase and can be one or two names **first and last names
const isValidUsername = (userNameValue) => {
    return userNameRegex.test(userNameValue)
}

// Must be a valid email address, too be more specific it has to have a @ symbol a . and either a com,org etc...
const isValidEmail = (userEmailValue) => {
    return emailRegex.test(userEmailValue)
}

// Must be a valid credit card number, digit groups of four
const isValidCreditCardNumber = (userCreditCardNumberValue) => {
    return creditCardRegex.test(userCreditCardNumberValue)
}

// Must be a valid credit card number, digit groups of four
const isValidZipcode = (userZipCode) => {
    return zipCodeRegex.test(userZipCode)
}

// Must be a valid credit card number, digit groups of four
const isValidCvvCode = (cvvCode) => {
    return cvvCodeRegex.test(cvvCode)
}

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
}

submitButton.addEventListener('click', submitButtonClicked);