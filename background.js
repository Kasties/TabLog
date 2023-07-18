let markedTabId;

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.message === "mark_tab") {
    markedTabId = request.data.id;
    // Get the key of the current tab data
    chrome.storage.sync.get(['currentTabKey'], function(result) {
      var currentTabKey = result.currentTabKey;
      if (currentTabKey) {
        chrome.storage.sync.remove(currentTabKey, function() {
          var error = chrome.runtime.lastError;
          if (error) {
            console.error(error);
          } else {
            chrome.storage.sync.set({
              [request.data.title]: request.data.url,
              currentTabKey: request.data.title
            }, function () {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              }
            });
          }
        });
      } else {
        // If there's no current tab data, just set the new tab data and currentTabKey
        chrome.storage.sync.set({
          [request.data.title]: request.data.url,
          currentTabKey: request.data.title
        }, function () {
          if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError);
          }
        });
      }
    });
  }
});

let lastSongData = null;

setInterval(function () {
  if (markedTabId) {
    chrome.tabs.get(markedTabId, function (tab) {
      let songData = {
        fields: {
          Cursong: {
            stringValue: tab.title, // get the current title of the marked tab
          },
        },
      };

      // Only fetch if songData has changed
      if (JSON.stringify(songData) !== JSON.stringify(lastSongData)) {
          chrome.storage.sync.get(['firebaseUrl'], function(result) {
            let firebaseUrl = result.firebaseUrl;
            // Check if firebaseUrl is defined before attempting the fetch
            if (firebaseUrl) {
              fetch(firebaseUrl, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(songData),
              })
                .then((response) => response.json())
                .then((data) => {
                  console.log('Successfully updated document:', data);
                  // Store the current song data as the last song data for future comparisons
                  lastSongData = songData;
                })
                .catch((error) => {
                  console.error('Error:', error);
                });
            } else {
              console.log('Firestore URL is not set.');
            }
          });
      }
    });
  }
}, 10000); // 10000 milliseconds = 10 seconds

