const bannerElement = document.querySelector("#banner");
const todayBanner = new Date();
let todayNum = todayBanner.getDay();

if (todayNum == 1 || todayNum == 2 || todayNum == 3) {
    bannerElement.style.display = "block";
}