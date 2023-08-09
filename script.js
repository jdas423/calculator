let up = document.querySelector('.upper');
let low = document.querySelector('.lower');
let collection = document.querySelectorAll('.p0');
let btn = [...collection];
let s = 0, num1, num2;
btn.forEach((item) => {
    item.addEventListener('click', function () {
        if (item.innerHTML == "1") low.innerHTML += "1";
        if (item.innerHTML == "2") low.innerHTML += "2";
        if (item.innerHTML == "3") low.innerHTML += "3";
        if (item.innerHTML == "4") low.innerHTML += "4";
        if (item.innerHTML == "5") low.innerHTML += "5";
        if (item.innerHTML == "6") low.innerHTML += "6";
        if (item.innerHTML == "7") low.innerHTML += "7";
        if (item.innerHTML == "8") low.innerHTML += "8";
        if (item.innerHTML == "9") low.innerHTML += "9";
        if (item.innerHTML == "0") low.innerHTML += "0";
        if (item.innerHTML == "CE") low.innerHTML = "";
        if (item.innerHTML == "C") {
            low.innerHTML = "";
            up.innerHTML = "";
        }
        if (item.innerHTML == ".") {
            low.innerHTML += ".";
            s = 1;
        }
        if (item.innerHTML == "+") {
            if (low.innerHTML) {
                if (up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
                    up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
                    up.innerHTML[up.innerHTML.length - 1] == "%") {
                    appendText();
                    up.innerHTML = `${num1}+`;

                }
                else {
                    up.innerHTML = low.innerHTML + "+";
                    app();
                }

            }

        }

        if (item.innerHTML == "-") {
            if (low.innerHTML) {
                if (up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
                    up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
                    up.innerHTML[up.innerHTML.length - 1] == "%") {
                    appendText();
                    up.innerHTML = `${num1}-`;

                }
                else {
                    up.innerHTML = low.innerHTML + "-";
                    app();
                }

            }

        }
        if (item.innerHTML == "*") {
            if (low.innerHTML) {
                if (up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
                    up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
                    up.innerHTML[up.innerHTML.length - 1] == "%") {
                    appendText();
                    up.innerHTML = `${num1}*`;

                }
                else {
                    up.innerHTML = low.innerHTML + "*";
                    app();
                }

            }

        }
        if (item.innerHTML == "/") {
            if (low.innerHTML) {
                if (up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
                    up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
                    up.innerHTML[up.innerHTML.length - 1] == "%") {
                    appendText();
                    up.innerHTML = `${num1}/`;

                }
                else {
                    up.innerHTML = low.innerHTML + "/";
                    app();
                }

            }

        }
        if (item.innerHTML == "%") {
            if (low.innerHTML) {
                if (up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
                    up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
                    up.innerHTML[up.innerHTML.length - 1] == "%") {
                    appendText();
                    up.innerHTML = `${num1}%`;

                }
                else {
                    up.innerHTML = low.innerHTML + "%";
                    app();
                }

            }

        }

        if (item.innerHTML == "=") {
            if (low.innerHTML) {
                if (up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
                    up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
                    up.innerHTML[up.innerHTML.length - 1] == "%") {
                    let sto = low.innerHTML;
                    appendText();
                    low.innerHTML = `${num1}`;
                    up.innerHTML += sto;
                }
            }
        }
    })
})

function appendText() {
    if (s == 1) num2 = parseFloat(low.innerHTML);
    else num2 = parseInt(low.innerHTML);
    s = 0;
    let car = up.innerHTML[up.innerHTML.length - 1];
    if (car == "+") num1 = num1 + num2;
    if (car == "-") num1 = num1 - num2;
    if (car == "*") num1 = num1 * num2;
    if (car == "/") num1 = num1 / num2;
    if (car == "%") num1 = num1 % num2;
    console.log(num1);
    low.innerHTML = "";
}

function app() {
    if (s == 1) num1 = parseFloat(low.innerHTML);
    else num1 = parseInt(low.innerHTML);
    s = 0;
    low.innerHTML = "";
}

let cross = document.querySelector(".cross");
let frac = document.querySelector(".frac");
let squa = document.querySelector(".squa");
let sqrt = document.querySelector(".sqrt");
let opp = document.querySelector(".opp");
let num3,num4;

cross.addEventListener("click", function () {
    if (low.innerHTML) {
        if(!(up.innerHTML[up.innerHTML.length - 1] == "+" || up.innerHTML[up.innerHTML.length - 1] == "-" ||
        up.innerHTML[up.innerHTML.length - 1] == "*" || up.innerHTML[up.innerHTML.length - 1] == "/" ||
        up.innerHTML[up.innerHTML.length - 1] == "%" || up.innerHTML=="")) up.innerHTML="";
        else low.innerHTML = low.innerHTML.slice(0, low.innerHTML.length - 1);
    }
})

frac.addEventListener("click", function () {
    if (low.innerHTML) {
        if (s == 1) num3 = parseFloat(low.innerHTML);
        else num3 = parseInt(low.innerHTML);
        num4=1/num3;
        if(Number.isInteger(num4)) s = 0;
        low.innerHTML = `${num4}`;
        up.innerHTML=`<sup>1</sup>&frasl;<sub>${num3}</sub>`;
    }
})

squa.addEventListener("click", function () {
    if (low.innerHTML) {
        if (s == 1) num3 = parseFloat(low.innerHTML);
        else num3 = parseInt(low.innerHTML);
        num4=num3*num3;
        if(Number.isInteger(num4)) s = 0;
        low.innerHTML = `${num4}`;
        up.innerHTML=`${num3}<sup>2</sup>`;
    }
})

sqrt.addEventListener("click", function () {
    if (low.innerHTML) {
        if (s == 1) num3 = parseFloat(low.innerHTML);
        else num3 = parseInt(low.innerHTML);
        num4=Math.sqrt(num3);
        if(Number.isInteger(num4)) s = 0;
        low.innerHTML = `${num4}`;
        up.innerHTML=`&#8730;${num3}`;
    }
})

opp.addEventListener("click", function () {
    if (low.innerHTML) {
        if (s == 1) num3 = parseFloat(low.innerHTML);
        else num3 = parseInt(low.innerHTML);
        num3=-1*num3;
        if(Number.isInteger(num3)) s = 0;
        low.innerHTML = `${num3}`;
        up.innerHTML="";
    }
})

