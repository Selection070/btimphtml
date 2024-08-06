let tg = window.Telegram.WebApp;
let buyTO = document.getElementById("buyTO");
let buyImporter = document.getElementById("buyImporter");
let buyTransport = document.getElementById("buyTransport");
let buyVED = document.getElementById("buyVED");
let order = document.getElementById("order");

tg.expand();

buyTO.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("appeal").value = "Таможенное оформление";
});
buyImporter.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("appeal").value = "Услуги Импортера";
});
buyTransport.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("appeal").value = "Международние перевозки";
});
buyVED.addEventListener("click", () => {
    document.getElementById("main").style.display = "none";
    document.getElementById("form").style.display = "block";
    document.getElementById("appeal").value = "Юридические услуги";
});

order.addEventListener("click", () => {
    let name = document.getElementById("user_name").value;
    let phone = document.getElementById("user_phone").value;
    let email = document.getElementById("user_email").value;
    let additional_info = document.getElementById("additional_info").value;
    let appeal = document.getElementById("appeal").value;
    let callbacktype = document.getElementById("callbacktype").value;
    document.getElementById("error").InnerText = '';

    if(user_name.length  < 3)  {
        document.getElementById("error").innerText = "Некорректно заполнено Имя";
        return;
    }
    if(email.length  < 3) {
        document.getElementById("error").innerText = "Некорректно заполнена Почта";
        return;
    }

    if(phone.length < 7) {
        document.getElementById("error").innerText = "Некорректно заполнен Телефон";
        return;
    }

    let data = {
        name: name,
        phone: phone,
        email: email,
        additional_info: additional_info,
        appeal: appeal,
        callbacktype: callbacktype
    }

    tg.sendData(JSON.stringify(data));

    tg.close();
})
