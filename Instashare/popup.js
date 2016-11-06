$(function () {
    $('#courseCounts').click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "courseCounts" });
        });
    });
	
	
    $('#allHyperlinks').click(function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { action: "allHyperlinks" });
        });
    });
    
});