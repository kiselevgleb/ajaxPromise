
let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();
    
    request.addEventListener('readystatechange', function() {
        let promise = new Promise(function(resolve, reject) {
            request.readyState === 4 && request.status == 200 ? resolve(inputUsd.value = inputRub.value / JSON.parse(request.response).usd): reject;
        });
        promise.then(console.log("ok")).catch(function(){
            inputUsd.value = "Что-то пошло не так!"});

    });
    // answ().then(console.log("ok")).catch("error");
});