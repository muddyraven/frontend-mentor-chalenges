const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailVal = email.Value;

  // Check if it is a valid email (found code on stackoverflow). This JS is beyond me - not fun! =/
  if (!validateEmail(emailVal)) {
    form.classList.add("error");
  } else {
    form.classList.remove("error");
  }
});

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
