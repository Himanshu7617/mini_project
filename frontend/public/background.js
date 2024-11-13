chrome.runtime.onStartup.addListener(() => {
    chrome.windows.create({
        url: 'popup.html',
        type: 'popup',
        width: 300,
        height: 150,
        focused: true,
    });
});

// For the dashboard, use:
chrome.action.onClicked.addListener(() => {
    chrome.tabs.create({ url: 'index.html#/dashboard' });
});
