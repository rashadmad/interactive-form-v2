// Can only contain letters a-z in lowercase and can be one or two names **first and last names
function isValidUsername(username) {
    return userNameRegex.test(username);
  }

// Must be a valid email address, too be more specific it has to have a @ symbol a . and either a com,org etc...
function isValidEmail(email) {
    return emailRegex;
}

const submitButtonClicked = () => {
    console.log("submitbutton clicked");
}