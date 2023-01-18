'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    try {
        let res = await fetch(
            "https://sg-hk4e-api.hoyolab.com/event/sol/sign?lang=vi-vn",
            { method: "POST", body: JSON.stringify({ act_id: "e202102251931481" }) });
        let text = await res.text();
        console.log(text);
    }
    catch (e) {
        console.log(e);
        setTimeout(onload, 5000);
    }
}
