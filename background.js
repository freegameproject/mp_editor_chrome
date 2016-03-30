chrome.browserAction.onClicked.addListener(function (tab) {
    //console.dir(tab);
    chrome.tabs.create({url: "http://www.kunchongzhi.com/index.html", selected: true})
});
chrome.tabs.onUpdated.addListener(function (tab_id) {
    chrome.tabs.get(tab_id, function (tab) {
        var url = tab.url;
        if (url.indexOf("media/appmsg_edit") != -1) {
            chrome.browserAction.setIcon({tabId: tab_id, path:"icons/logoedit.png"});
            chrome.tabs.executeScript(tab.id, {file: "edit.js"});
        }
        if (url.indexOf("xixi") != -1) {
            chrome.tabs.executeScript(tab.id, {file: "about.js"});
        }
        //console.log(tab);
        //chrome.browserAction.setIcon({tabId: tab_id, path:"icons/wall_red.png"});
        //chrome.browserAction.setTitle({tabId: tab_id, title:"walled"});

    });
});
