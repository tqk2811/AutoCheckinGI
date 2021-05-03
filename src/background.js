'use strict';
chrome.runtime.onStartup.addListener(function(){
    setTimeout(onload,10000);
});
function onload(){
    let request = new XMLHttpRequest();
    request.open("POST","https://hk4e-api-os.mihoyo.com/event/sol/sign?lang=vi-vn", true);
    request.setRequestHeader("Content-Type","application/json;charset=UTF-8");
    request.setRequestHeader("Accept","application/json, text/plain, */*");
    request.setRequestHeader("Accept-Language", "vi,en;q=0.9,ja;q=0.8,ht;q=0.7");
    request.onload = function(){
        console.log("Status: " + this.status + ", Response: " + this.responseText);
    }
    request.send("{\"act_id\":\"e202102251931481\"}");
}
