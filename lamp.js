const turnOn = document.getElementById("turnOn")
const turnOff = document.getElementById("turnOff")
const lamp = document.getElementById("lamp")


function isLampBroken() {
    return lamp.src.indexOf("lamp_broken") > -1
}

function lampOn() {
    if (!isLampBroken()) {
        lamp.src = "./img/lamp_on.png"
    }
}

function lampOff() {
    if (!isLampBroken()) {
        lamp.src = ("./img/lamp_off1.png")
    }
}

function lampBroken() {
    lamp.src = "./img/lamp_broken.jpeg"
}



turnOn.addEventListener("click", lampOn)
turnOff.addEventListener("click", lampOff)
lamp.addEventListener("mouseover", lampOn)
lamp.addEventListener("mouseleave", lampOff)
lamp.addEventListener("dblclick", lampBroken)