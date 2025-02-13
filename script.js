"use strict";

const tontonGifs = [
  "https://media.tenor.com/ivKWdfdbV3EAAAAi/goma-goma-cat.gif",
  "https://media1.tenor.com/m/gZU3n_9Nv2EAAAAC/cat-cat-stare.gif",
  "https://media.tenor.com/ag4FIgkgekYAAAAm/ami-fat-cat-please.webp",
  "https://media.tenor.com/pFz1Q12_hXEAAAAM/cat-holding-head-cat.gif",
  "https://media.tenor.com/bm3mVmevxLcAAAAM/upset-cat.gif",
  "https://media.tenor.com/yN3qbd-TXDkAAAAM/sad-hamster-with-bow-violin-hamster-girl.gif",
];

const title = document.querySelector(".title");
const btnContainer = document.querySelector(".buttons");
const yesBtn = document.querySelector(".btn-yes");
const noBtn = document.querySelector(".btn-no");
const img = document.querySelector(".img");

const MAX_IMAGES = 5;
let play = true;
let noCount = 0;
let noButtonSize = 1;
let yesButtonSize = 1;

yesBtn.addEventListener("click", () => {
  title.innerHTML = "Yay! I Love You!! 💗";
  btnContainer.classList.add("hidden");
  changeImage("yes");
});

noBtn.addEventListener("click", () => {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    shrinkNoButton();
    updateNoButtonText();
    if (noCount === MAX_IMAGES) play = false;
  }
});

function resizeYesButton() {
  yesButtonSize *= 1.2;
  yesBtn.style.transform = `scale(${yesButtonSize})`;
}

function shrinkNoButton() {
  noButtonSize *= 0.9;
  noBtn.style.transform = `scale(${noButtonSize})`;
}

function generateMessage(noCount) {
  const messages = [
    "No 😔",
    "Are you sure? 🥺",
    "Please lablab🥹",
    "ihhhh 😭",
    "mag yes kana💔",
    "di mo na ako love... 😭💔",
  ];
  return messages[Math.min(noCount, messages.length - 1)];
}

function changeImage(image) {
  img.src =
    image === "yes"
      ? "https://media.tenor.com/6oVpxIFwAAoAAAAM/cat-kiss.gif"
      : tontonGifs[image];
}

function updateNoButtonText() {
  noBtn.innerHTML = generateMessage(noCount);
}
