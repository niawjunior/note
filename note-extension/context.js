var contextMenu = {
  "id": "note",
  "title": "save note",
  "contexts": ["selection", "link"]
}
chrome.contextMenus.create(contextMenu)

chrome.contextMenus.onClicked.addListener(function(click) {
  if (click.menuItemId == 'note') {
    localStorage.setItem('note_url', JSON.stringify(click.linkUrl).toString().split('"').join(''))
    chrome.browserAction.openPopup();
  }
})