chrome.runtime.onMessage.addListener(
	function (request, sender){
		if (request.line=='countparas'){ /* If we get the request from the Background script */
			var paras = document.body.querySelectorAll('p'); /* Select all `<p>` elements in the document body */
			if (paras.length > 0){ /* If the number of `<p>` elements is greater than zero */
			var theCount = paras.length+''; /* Assigning that number to a variable called 'theCount' and convert it to a string format */
			chrome.runtime.sendMessage({count:theCount}); /* Send the count back to the background script */
			} else {
				alert('There does not seem to be any `<p>` elements in this page!');
			}
		}
});