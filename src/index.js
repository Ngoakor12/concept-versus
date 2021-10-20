const menuIcon = document.querySelector(".menu-icon");
const contentNav = document.querySelector("#content-nav");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const languages = document.querySelectorAll(".language");
const topics = document.querySelectorAll(".topic");

menuIcon.addEventListener("click", toggleNav);

languages.forEach((lang) => {
  lang.addEventListener("click", () => {
    contentNav.classList.toggle("closeNav");
  });
});
topics.forEach((topic) => {
  topic.addEventListener("click", () => {
    contentNav.classList.toggle("closeNav");
  });
});

function toggleNav() {
  contentNav.classList.toggle("closeNav");
  //   if (menuOpen.style.display == "block") {
  //     console.log("open");
  //     menuOpen.style.display = "none";
  //     menuClose.style.display = "block";
  //   } else {
  //     console.log("closed");
  //     menuOpen.style.display = "block";
  //     menuClose.style.display = "none";
  //   }
}

function closeNav() {
  contentNav.style.display = "none";
}
