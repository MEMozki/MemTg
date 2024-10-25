function removeAds() {
    // К сожалению, доступ к iframe не будет возможен из-за ограничений CORS
    console.warn("Не удалось удалить рекламу из-за CORS ограничений.");
}

// Запускаем функцию при загрузке страницы
window.onload = removeAds;
