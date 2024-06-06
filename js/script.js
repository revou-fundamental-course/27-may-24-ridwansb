document.addEventListener("DOMContentLoaded", () => {
  // Prompt user for their name and set welcome message
  const userName = prompt("Please enter your name:");
  if (userName) {
    document.querySelector(
      ".welcome-section h1"
    ).textContent = `Hi ${userName}, Welcome To Website`;
  }

  // Handle form submission and display submitted data
  const contactForm = document.getElementById("contact-form");
  const infoBox = document.querySelector(".info-box");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    document.getElementById("display-name").textContent = name;
    document.getElementById("display-email").textContent = email;
    document.getElementById("display-phone").textContent = phone;
    document.getElementById("display-message").textContent = message;
    document.getElementById("display-gender").textContent = gender;
    document.getElementById(
      "current-time"
    ).textContent = `Current time: ${new Date().toLocaleString()}`;

    // Reset the form
    contactForm.reset();
  });
});

let indexSlide = 1;
showBanner(indexSlide);

function nextSlide(n) {
  showBanner((indexSlide += n));
}

function showBanner(indexBanner) {
  let listImage = document.getElementsByClassName("banner-img");
  if (indexBanner > listImage.length) indexSlide = 1;
  if (indexBanner < 1) indexSlide = listImage.length;

  for (let i = 0; i < listImage.length; i++) {
    listImage[i].style.display = "none";
  }

  listImage[indexSlide - 1].style.display = "block";
  console.log(
    "Index " + (indexSlide - 1) + " Adalah Index Image Yang di tampilkan"
  );
}

setInterval(() => nextSlide(1), 3000);

// Function to update the current time
function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  });
  document.getElementById("time").textContent = timeString;
}

// Update the time immediately and then every second
updateTime();
setInterval(updateTime, 1000);

// Handling the form submission to display input values
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    document.getElementById("display-name").textContent =
      document.getElementById("name").value;
    document.getElementById("display-email").textContent =
      document.getElementById("email").value;
    document.getElementById("display-phone").textContent =
      document.getElementById("phone").value;
    document.getElementById("display-message").textContent =
      document.getElementById("message").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    document.getElementById("display-gender").textContent = gender;
  });
