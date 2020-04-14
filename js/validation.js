// Can only contain letters a-z in lowercase and can be one or two names **first and last names
const isValidUsername = (userName) => {
    return userNameRegex.test(userName)
}

// Must be a valid email address, too be more specific it has to have a @ symbol a . and either a com,org etc...
const isValidEmail = (userEmail) => {
    return emailRegex.test(userEmail)
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
}

submitButton.addEventListener('click', submitButtonClicked);