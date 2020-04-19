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





