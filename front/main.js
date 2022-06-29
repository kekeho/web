// set sfc status


const sfcStatusList = ["B1", "B2", "B3", "B4", "M1", "M2", "D1", "D2", "2021年入学"];

function getStatus() {
    let now = new Date;
    let enterYear = 2021;
    let enterMonth = 4;
    const nowYear = now.getFullYear();
    const nowMonth = now.getMonth();

    let idx;
    if (nowMonth < enterMonth) {
        idx = nowYear-1 - 2021;
    } else {
        idx = nowYear - 2021;
    }
    if (idx >= sfcStatusList.length) {
        return sfcStatusList[sfcStatusList.length-1];
    }
    return sfcStatusList[idx];
}


let sfcStatusElement = document.getElementById("sfcStatus");
sfcStatusElement.innerText = getStatus();
