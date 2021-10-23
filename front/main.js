// set sfc status
let sfcStatusList = ["B1", "B2", "B3", "B4", "M1", "M2", "D1", "D2", "21年入学"];
let sfcStatusElement = document.getElementById("sfcStatus");
const nowYear = (new Date).getFullYear();
let statusIndex = sfcStatusList.length-1
if ((nowYear - 2021) < sfcStatusList.length) {
    statusIndex = nowYear - 2021;
}
sfcStatusElement.innerText = sfcStatusList[statusIndex];