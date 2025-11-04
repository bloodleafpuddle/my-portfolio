document.querySelectorAll('.project-card').forEach(card => {
  const show = card.querySelector('.show');
  const hide = card.querySelector('.hide');

  show.addEventListener('click', e => {
    e.preventDefault();
    card.classList.add('flipped');
  });

  hide.addEventListener('click', e => {
    e.preventDefault();
    card.classList.remove('flipped');
  });
});

function validateForm() {
  let name = document.forms["myForm"]["name"].value.trim();
  let email = document.forms["myForm"]["email"].value.trim();
  let message = document.forms["myForm"]["message"].value.trim();

  if (name === "") {
    alert("Please enter your name!");
    return false;
  }

  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    alert("Please enter a valid email address!");
    return false;
  }

  if (message.length < 10) {
    alert("Your message must be at least 10 characters long :)");
    return false;
  }

  alert("Message sent successfully!");
  return true;
}