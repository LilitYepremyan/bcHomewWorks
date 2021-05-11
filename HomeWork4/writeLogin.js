let login = "Employee";

login == "Employee"
  ? (message = "Hello")
  : login == "Director"
  ? (message = "Greetings")
  : login == ""
  ? (message = "No login")
  : "";
console.log(message);
