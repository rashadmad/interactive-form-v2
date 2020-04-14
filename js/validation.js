// Can only contain letters a-z in lowercase and can be one or two names **first and last names
function isValidUsername(username) {
    return userNameRegex.test(username);
  }

// Must be a valid email address, too be more specific it has to have a @ symbol a . and either a com,org etc...
function isValidEmail(email) {
    return emailRegex;
}

// //this is the function where all of the magic will happen
// const register = () => {
//     //I dont what my sumbit button working normally just yet 
//     event.preventDefault()
//     console.log("your username is: " + usersName.value + "while your email is: " + usersEmail.value);
// }

submitButton.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault()
    console.log(event);
}