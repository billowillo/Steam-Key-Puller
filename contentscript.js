
console.log("where do i go");
chrome.extension.onMessage.addListener(function(msg, sender, sendResponse) {
  console.log("Messsage"+ " " +msg+ " From"+sender);
  if (msg.action == 'search') {
    var pageHtml = document.documentElement.outerHTML;
    sendResponse({data: "Wowzers"});
  }
});