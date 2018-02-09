$(function () {
    console.log('initializing the popdown');



    $('#courseCounts').click(function () {
        console.log('hay');
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "courseCounts" });
        });
    });


    $('#updatePage').click(function () {
        console.log('say');
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "allHyperlinks" });
        });
    });
});