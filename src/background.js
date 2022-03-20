'use strict';
chrome.runtime.onStartup.addListener(function () {
    setTimeout(onload, 5000);
});
async function onload() {
    var res = await fetch(
        "https://hk4e-api-os.mihoyo.com/event/sol/sign?lang=vi-vn",
        { method: "POST", body: JSON.stringify({ act_id: "e202102251931481" }) });
    console.log(await res.text());
}
