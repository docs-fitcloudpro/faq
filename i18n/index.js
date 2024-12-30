// 合并所有语言数据
window.i18n = window.i18nData;

// 清理临时对象
window.i18nData = undefined;

// 标记 i18n 加载完成
if (typeof i18nLoaded !== 'undefined') {
    i18nLoaded = true;
    showContent();
} 
