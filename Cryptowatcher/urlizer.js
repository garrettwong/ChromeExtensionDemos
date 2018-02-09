chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	// Main Entry Point
	switch(request.action) {
		case 'updatePage':
			//console.log($('html').html());

			console.log('hello');
			console.log($('.logo-mini').html());
			$('.logo-mini').html('Hello World');

		break;

		case '':
		break;
		default:
		break;
	}

	// Functions----------------------------------------------------------
	function arrayToHTMLString(srcList) {
		var htmlString = '';
		for (var i = 0; i < srcList.length; i++) {
			htmlString += srcList[i] + '<br />';
		}
		return htmlString;
	}

	function getHtmlStringWithLinkAndImage(srcList) {
		var htmlString = '';
		for (var i = 0; i < srcList.length; i++) {
			htmlString += '<div style="float:left;">' + 
				//getAnchorTag(srcList[i]) +
				getImageTag(srcList[i]) +
				getCopyTextAreaHtml(srcList[i], i) +
				'</div>';
		}
		return htmlString;
	}
	
	function getAnchorTag(src) {
		return '<a target="_blank" style="background: #fff;" href="' + src + '">' + src + '</a>'
	}
	
	function getImageTag(src) {
		return '<img src="' + src + '" style="width:360px;height:360px" />'
	}
    
	// Document, copy to clipboard HTML
	function getCopyTextAreaHtml(text, id) {
		return '<p><textarea style="width:100%" class="js-copytextarea-' + id + '">' + text + '</textarea></p><p><button class="js-textareacopybtn" data-el="js-copytextarea-' + id + '">Copy to Clipboard</button></p>';
	}
	
	// Document, copy to clipboard
	function copyEvents() {
		var copyTextareaBtns = document.querySelectorAll('.js-textareacopybtn');

		for(var c in copyTextareaBtns) {
			var copyTextareaBtn = copyTextareaBtns[c];
			
			copyTextareaBtn.addEventListener('click', function(event) {
				//console.log(this.dataset.el)
			  var copyTextarea = document.querySelector('.' + this.dataset.el);//document.querySelector('.js-copytextarea');
			  copyTextarea.select();

			  try {
				var successful = document.execCommand('copy');
				var msg = successful ? 'successful' : 'unsuccessful';
				console.log('Copying text command was ' + msg);
			  } catch (err) {
				console.log('Oops, unable to copy');
			  }
			});
		}
	}
});

chrome.runtime.sendMessage({ action: "show" });