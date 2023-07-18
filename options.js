document.getElementById('saveUrl').addEventListener('click', function() {
    let url = document.getElementById('firebaseUrl').value;
    // Save the URL using the Chrome Storage API
    chrome.storage.sync.set({firebaseUrl: url}, function() {
      console.log('URL is set to ' + url);
    });
  });
document.getElementById('saveUrl').addEventListener('click', function() {
let url = document.getElementById('firebaseUrl').value;
chrome.storage.sync.set({firebaseUrl: url}, function() {
    console.log('URL is set to ' + url);
    // Hide the Firestore URL entry
    document.getElementById('urlEntry').style.display = "none";
});
});
  