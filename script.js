function randomisePos(elements) {
  elements.forEach((element) => {
    const randomLeft = Math.random() * 95;
    element.style.left = `${randomLeft}%`;

    const randomDuration = Math.random() * 4 + 1;
    element.style.animationDuration = `${randomDuration}%`;

    const randomDelay = Math.random() * 4;
    element.style.animationDelay = `${randomDelay}%`;

    element.style.animation = `falling ${randomDuration}s linear ${randomDelay}s infinite`;
  });
}
const redpacket = document.querySelectorAll(".redpacket");
const orange = document.querySelectorAll(".orange");

randomisePos(redpacket);
randomisePos(orange);

const wishesMap = new Map([
  ["新年快乐", "Happy New Year"],
  ["恭喜发财", "A wish for prosperity and wealth"],
  ["身体健康", "May you have good health"],
  ["万事如意", "May you get everything you wish for"],
  ["心想事成", "May all your wishes come true"],
  ["生意兴隆", "May your business flourish"],
  ["学习进步", "May you improve in your studies"],
  ["一帆风顺", "May everything go smoothly"],
]);

function generateWish() {
  const chineseWishes = Array.from(wishesMap.keys());
  const englishWishes = Array.from(wishesMap.values());
  const wishNumber = Math.floor(Math.random() * englishWishes.length);
  const chinese = chineseWishes[wishNumber];
  const english = englishWishes[wishNumber];
  const chineseElement = document.querySelector(".chineseWish");
  chineseElement.textContent = chinese;
  const englishElement = document.querySelector(".englishWish");
  englishElement.textContent = english;
  chineseElement.classList.remove("fade-in");
  englishElement.classList.remove("fade-in");

  // Force reflow
  void chineseElement.offsetHeight;
  void englishElement.offsetHeight;

  // Set content
  chineseElement.textContent = chinese;
  englishElement.textContent = english;

  // Add animation classes
  chineseElement.classList.add("fade-in");
  englishElement.classList.add("fade-in");
  //   console.log(chinese, english);
}

document.querySelector(".wishButton").addEventListener("click", generateWish);

const countDownDate = new Date("Jan 28, 2025 19:15:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.querySelector("#timer").textContent =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#timer").textContent = "ITS TIMEEEEE!";
  }
}, 1000);
