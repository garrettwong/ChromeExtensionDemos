chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    send();

    function send() {
    	try {
			
		}
		catch (e) {

		}
    }

    if (request.action == "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {

            console.log(chrome.tabs, chrome.pageAction, tabs);
            
            chrome.pageAction.show(tabs[0].id);
        });
    }
});


