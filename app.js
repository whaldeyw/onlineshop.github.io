let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "FFFFFF";
tg.MainButton.color = "2cab37";

let item = "";

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn10 = document.getElementById("btn10");

btn1.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Бургер");
        item = "1";
        tg.MainButton.show();
    }
});

btn2.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Картошку");
        item = "2";
        tg.MainButton.show();
    }
});

btn3.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Кофе");
        item = "3";
        tg.MainButton.show();
    }
});

btn4.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Мороженое");
        item = "4";
        tg.MainButton.show();
    }
});

btn5.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Напитки");
        item = "5";
        tg.MainButton.show();
    }
});

btn6.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Пирожное");
        item = "6";
        tg.MainButton.show();
    }
});

btn7.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Пиццу");
        item = "7";
        tg.MainButton.show();
    }
});

btn8.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Пончики");
        item = "8";
        tg.MainButton.show();
    }
});

btn9.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Попкорн");
        item = "9";
        tg.MainButton.show();
    }
});

btn10.addEventListener("click", function(){
    if(tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }
    else{
        tg.MainButton.setText("Вы выбрали Роллы");
        item = "10";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function(){
    tg.sendData(item);
})

let usercard = document.getElementById("usercard");

let p = document.createElement("p");

p.innerText = '${tg.initDataUnsafe.user.first_name}${tg.initDataUnsafe.user.last_name}';

usercard.appendChild(p);