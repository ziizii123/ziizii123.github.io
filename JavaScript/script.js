"use strict";

// INPUT GMAIL TO SEE THE INFORMATION
const personalInfo = document.querySelector(".info-content");
const submit = document.getElementById("submit");
const inputForm = document.querySelector(".email");
const errorGmail = document.getElementById("error-email");
const description = document.querySelector(".form-description");
const validateEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function checker() {
  const gmail = document
    .getElementById("input-gmail")
    .value.toLocaleLowerCase();

  if (gmail.match(validateEmail)) {
    inputForm.classList.add("hidden");
    personalInfo.classList.remove("hidden");
    errorGmail.classList.add("hidden");
  } else {
    description.classList.add("hidden");
    errorGmail.classList.remove("hidden");
  }
}

submit.addEventListener("click", checker);

// KEY 'ENTER' EVENT
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !inputForm.classList.contains("hidden")) {
    event.preventDefault();
    checker();
  }
});

// VIEW-MORE BUTTONS
const viewMoreSections = document.querySelectorAll(".card .card-body > div");

viewMoreSections.forEach((section) => {
  const card = section.closest(".card");
  const viewMore = section.querySelector(".view-more");
  const viewLess = section.querySelector(".view-less");
  const content = section.querySelector(
    ".experience-content, .education-content, .activity-content, .hobby-content, .language-content, .skill-content"
  );

  if (viewMore && viewLess && content && card) {
    viewMore.addEventListener("click", () => {
      content.classList.remove("hidden");
      viewMore.style.display = "none";
      viewLess.classList.remove("hidden");
      card.classList.add("expanded");
    });

    viewLess.addEventListener("click", () => {
      content.classList.add("hidden");
      viewMore.style.display = "block";
      viewLess.classList.add("hidden");
      card.classList.remove("expanded");
    });
  } else {
    console.error("One or more elements not found in this section.");
  }
});
