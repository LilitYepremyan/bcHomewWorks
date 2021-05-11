let userName = prompt("Enter your user name");
if (userName === "" || userName === null) {
  console.log("Canceled");
} else if (userName === "Admin") {
  let password = prompt("Enter your password");
  if (password === "" || password === null) {
    console.log("Canceled");
  } else if (password === "TheMaster") {
    console.log("Welcome");
  } else {
    console.log("Wrong Password");
  }
} else {
  console.log("I don’t know you");
}
