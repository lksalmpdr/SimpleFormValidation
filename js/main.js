let fcnId = (id) => document.getElementById(id);
let fcnClasses = (classes) => document.getElementsByClassName(classes);
let fcnEngine = (id, serial, message) =>{
  if(id.value.trim() === ""){
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";

    //icones
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }else{
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green";

    //icones
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}

let username = fcnId("username"),
email= fcnId("email"),
password= fcnId("password"),
form= fcnId("myForm"),

errorMsg=fcnClasses("error"),
successIcon=fcnClasses("success-icon"),
failureIcon=fcnClasses("failure-icon");

form.addEventListener("submit", (event)=>{
  event.preventDefault();

  fcnEngine(username, 0, "Username can't be blank");
  fcnEngine(email, 1, "Email can't be blank");
  fcnEngine(password, 2, "Password can't be blank");
});
