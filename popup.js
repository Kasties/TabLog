document.getElementById('markTab').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var activeTab = tabs[0];
      console.log('Marked tab: ', activeTab.title, activeTab.url);
      chrome.runtime.sendMessage({
        message: "mark_tab",
        data: {
          id: activeTab.id,
          title: activeTab.title,
          url: activeTab.url
        }
      });
    });
  });
document.getElementById('enterUrl').addEventListener('click', function() {
  let urlEntry = document.getElementById('urlEntry');
  if (urlEntry.style.display === "none") {
    urlEntry.style.display = "block";
  } else {
    urlEntry.style.display = "none";
  }
});
