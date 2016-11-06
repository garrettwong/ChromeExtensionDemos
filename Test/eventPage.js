chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    
    console.log(request, sender, sendResponse);

    console.log('sending');
    send();

    function send() {
    	try {
			var arr = $('.-cx-PRIVATE-Photo__placeholder img');

		    var srcList = [];
		    $.each(arr, function(index, obj) {

		        srcList.push($(obj).attr('src'));

		    });

		    console.log(srcList);

		    var htmlString = '';
		    for (var i = 0; i < srcList.length; i++) {
		        htmlString += srcList[i] + '<br />';
		    }

		    console.log(htmlString);

		}
		catch (e) {

		}
    }

    if (request.action == "show") {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.pageAction.show(tabs[0].id);
        });
    }
});


