const form = document.getElementById("myForm");

function toggleTeam(hasExperience) {
  const experience = document.getElementById("experienceBox");
  const motivation = document.getElementById("motivationBox");

  if (hasExperience) {
    experience.style.display = "block";
    motivation.style.display = "none";
  } else {
    experience.style.display = "none";
    motivation.style.display = "block";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault(); // ⛔ stop normal submit

  const formData = new FormData(form);

  fetch("https://script.google.com/macros/s/AKfycbyQKI2QOm9DD5hLDnqat5-ZT3HtSAVEaAJgFvjS1bkjrOVPDeUEkmM9nDn7Xp_27iOu/exec", {
    method: "POST",
    body: formData
  })
  .then(res => res.text())
  .then(data => {
    alert("✅ Form sent successfully!");
    form.reset();
    document.getElementById("experienceBox").style.display = "none";
    document.getElementById("motivationBox").style.display = "none";
  })
  .catch(err => {
    alert("❌ Error sending form");
    console.error(err);
  });
});
