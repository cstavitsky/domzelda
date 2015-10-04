// Checking page title

chrome.browserAction.onClicked.addListener(function (tab) { //Fired when User Clicks ICON
        chrome.tabs.executeScript(null, {
            "file": "contentscript.js"
        }, function () { // Execute your code
            console.log("Script Executed .. "); // Notification on Completion
        });
});