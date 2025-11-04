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


function displayLocalDateTime() {
  const now = new Date();
  const formatted = now.toLocaleString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

    const infoEl = document.getElementById("userInfo");

    const existingLocation = infoEl.dataset.location || "";
    infoEl.innerHTML = `Your current date and time: ${formatted}${existingLocation}`;
}

setInterval(displayLocalDateTime, 1000);
displayLocalDateTime();


if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch("https://nominatim.openstreetmap.org/reverse?lat=" + latitude + "&lon=" + longitude + "&format=json")
      .then(function(response) {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(function(data) {
        const city = data.address.city || data.address.town || data.address.village || "";
        const country = data.address.country || "";

        const infoEl = document.getElementById("userInfo");
        const locationText = "<br>Location: " + (city ? city + ", " : "") + country;
        infoEl.dataset.location = locationText;
        infoEl.innerHTML += locationText;
      })
      .catch(function(error) {
        console.error("Error fetching location:", error);
      });

  }, function() {
    const infoEl = document.getElementById("userInfo");
    infoEl.dataset.location = "<br>Location: (Permission denied)";
    infoEl.innerHTML += infoEl.dataset.location;
  });
} else {
  const infoEl = document.getElementById("userInfo");
  infoEl.dataset.location = "<br>Location: (Not supported)";
  infoEl.innerHTML += infoEl.dataset.location;
}




document.addEventListener("DOMContentLoaded", function() {
  const typedElement = document.querySelector("#typed-tagline");
  if (typedElement) {
    setTimeout(() => {
      new Typed("#typed-tagline", {
        strings: ["Web Developer | Artist | Creator"],
        typeSpeed: 50,
        backSpeed: 0,
        loop: false,
        showCursor: true,
        cursorChar: "|",
        onComplete: function() {
          setTimeout(() => {
            const cursor = document.querySelector(".typed-cursor");
            cursor.style.transition = "opacity 1s ease";
            cursor.style.opacity = "0";
            cursor.style.visibility = "hidden";
          }, 2500);
        }
      });
    }, 2200);
  }
});



window.addEventListener("load", function() {
  document.body.classList.add("loaded");

  const fadeElements = document.querySelectorAll(
    ".site-header, #about, #projects, #contact, footer"
  );

  fadeElements.forEach(el => el.classList.add("fade-in"));
});