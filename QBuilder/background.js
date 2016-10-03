

//chrome.browserAction.onClicked.addListener( function() { console.log("OK"); } );
chrome.tabs.onActivated.addListener(function(activeInfo) {
  //  chrome.browserAction.hide();
    chrome.runtime.getBackgroundPage( function(page) {
       // page.console.dir( chrome.app.window.current() );
            page.console.log('onActivated');
            page.console.dir(page)

        }

    );

    //alert(1);
});

chrome.tabs.onUpdated.addListener(function(activeInfo) {
   // chrome.browserAction.hide();

    chrome.runtime.getBackgroundPage( function(page) {
            page.console.log('onUpdated');
            page.console.dir(page)
          //  page.console.dir( chrome.app.window.current() );

    }

    );
   // alert(2);
});

//window.addEventListener("load", windowLoaded, false);
