const copyButton = document.querySelector(".copy-button");
const buttonIcon = document.querySelector(".button-icon");
const copyProgress = document.querySelector(".copy-progress");
const copiedIcon = document.querySelector(".copied-icon");
const doneText = document.querySelector(".done-text");
copyButton.addEventListener("click", function () {
  copyButton.style.width = "150px";
  buttonIcon.style.transform = "translateY(-100%)";
  setTimeout(function () {
    buttonIcon.style.transform = "translateY(-100%)";
  }, 150);
  copyProgress.classList.add("copied");
  setTimeout(function () {
    buttonIcon.style.transform = "translateY(-20%)";
    copiedIcon.style.transform = "translateY(20%)";
  }, 500);
  setTimeout(function () {
    buttonIcon.style.transform = "translateY(0)";
    copiedIcon.style.transform = "translateY(0)";
  }, 1500);
  setTimeout(function () {
    buttonIcon.style.opacity = "0";
    copiedIcon.style.opacity = "0";
  }, 2500);
  setTimeout(function () {
    copyProgress.style.opacity='0';
    copyButton.style.width = "50px";
  }, 2600);
  setTimeout(function () {
    doneText.style.opacity = "1";
  },2700);
});
