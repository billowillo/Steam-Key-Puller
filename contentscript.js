
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {

  if (msg.action == 'search') {
    var pageHtml = document.documentElement.outerHTML;
    alert(document.documentElement.outerHTML)
    sendResponse({data: pageHtml.toString()});
  }
});