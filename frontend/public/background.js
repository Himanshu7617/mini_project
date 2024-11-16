chrome.runtime.onStartup.addListener(() => {
    chrome.windows.create({
        url: 'index.html#/dashboard',
        type: 'popup',
        width: 300,
        height: 150,
        focused: true,
    });
});
