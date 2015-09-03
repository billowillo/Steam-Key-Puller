document.addEventListener('DOMContentLoaded', function () {
	document.getElementById("btnSearch").addEventListener("click", activateSearch);
})


function activateSearch() 
{
	//steam key match regex [A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+
	
	//get website html to be able to search for keys within
	var siteHTML = document.documentElement.outerHTML;
	//match against regular expression to find keys and load into variable
	var steamKeys = siteHTML.match(/[A-Z0-9]+-[A-Z0-9]+-[A-Z0-9]+/);

}