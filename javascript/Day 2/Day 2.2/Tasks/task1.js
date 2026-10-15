function welcomeUser(name, callback) {
  console.log("Welcome, " + name);
  callback();
}

function showMessage() {
  console.log("Have a nice day!");
}

welcomeUser("Tahir", showMessage);
