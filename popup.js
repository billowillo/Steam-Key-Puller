document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("btnSearch").addEventListener("click", activateSearch);

})


function activateSearch() {

	chrome.tabs.query({currentWindow: true, active: true}, function(tab) { /*Select active tab of the current window*/
       chrome.tabs.sendMessage(tabs[0].id, {line: 'countparas'}); /*Send a message to the content script*/
    });
	//steam key match regex [A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+
	
	//get website html to be able to search for keys within
	var siteHTML = document.documentElement.outerHTML;
	//match against regular expression to find keys and load into variable


}