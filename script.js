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
fetch("https://script.google.com/macros/s/AKfycbyQKI2QOm9DD5hLDnqat5-ZT3HtSAVEaAJgFvjS1bkjrOVPDeUEkmM9nDn7Xp_27iOu/exec", {
  method: "POST",
  body: formData
})
SpreadsheetApp.openById("1H3Lfya8qPI5z2qkEc0CMKME8LAj9DvNOkIujlY-Y8fA/edit?gid=0#gid=0")
getSheetByName("safa3");