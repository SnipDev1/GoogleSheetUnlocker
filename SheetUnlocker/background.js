chrome.action.onClicked.addListener((tab) => {
  if (!tab.url || !tab.url.includes('docs.google.com/spreadsheets')) {
    return; // не Google Таблица – ничего не делаем
  }

  // Преобразуем URL из режима редактирования (edit) в htmlview
  const newUrl = tab.url.replace(/\/(edit|preview)([?#]|$)/, '/htmlview$2');
  
  // Открываем новую вкладку с преобразованным URL
  chrome.tabs.create({ url: newUrl });
});