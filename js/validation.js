// Can only contain letters a-z in lowercase and be one or two names
function isValidUsername(username) {
    return userNameRegex.test(username);
  }

// Must be a valid email address, too be more specific it has to have
function isValidEmail(email) {
    return emailRegex;
}