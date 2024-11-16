/* global chrome */
chrome.runtime.onStartup.addListener(()=>{
    chrome.action.openPopup();
})