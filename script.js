// 在文件开头定义全局常量
const SUPPORTED_LANGUAGES = Object.freeze({
    zh: '简体中文',
    'zh-TW': '繁體中文',
    en: 'English',
    ar: 'العربية',
    fa: 'فارسی',
    cs: 'Čeština',
    da: 'Dansk',
    de: 'Deutsch',
    el: 'Ελληνικά',
    es: 'Español',
    fi: 'Suomi',
    fr: 'Français',
    he: 'עברית',
    hi: 'हिन्दी',
    hr: 'Hrvatski',
    hu: 'Magyar',
    id: 'Bahasa Indonesia',
    it: 'Italiano',
    ja: '日本語',
    ko: '한국어',
    nl: 'Nederlands',
    sk: 'Slovenčina',
    sq: 'Shqip',
    sv: 'Svenska',
    th: 'ไทย',
    uk: 'Українська',
    vi: 'Tiếng Việt',
    ru: 'Русский'
});

// 更新注意标题映射，添加更多语言支持
const noteTitle = {
    'zh': '注意：',
    'zh-TW': '注意：',
    'en': 'Note:',
    'ar': 'ملاحظة:',
    'fa': 'توجه:',
    'cs': 'Poznámka:',
    'da': 'Bemærk:',
    'de': 'Hinweis:',
    'el': 'Σημείωση:',
    'es': 'Nota:',
    'fi': 'Huomautus:', 
    'fr': 'Remarque:',
    'he': 'הערה:',
    'hi': 'ध्यान दें:',
    'hr': 'Napomena:',
    'hu': 'Megjegyzés:',
    'id': 'Catatan:',
    'it': 'Nota:',
    'ja': '注意：',
    'ko': '주의:',
    'nl': 'Opmerking:',
    'sk': 'Poznámka:',
    'sq': 'Shënim:',
    'sv': 'Anmärkning:',
    'th': 'หมายเหตุ:',
    'uk': 'Примітка:',
    'vi': 'Lưu ý:',
    'ru': 'Примечание:'
};

let appName = 'FitCloudPro';
let currentLanguage = 'en';
let currentCategory = 'all';
let currentTheme = 'system';
let showTopNav = true;
let pageLoaded = false;
let themeLoaded = false;
let i18nLoaded = false;

// 在文件开头添加平台相关常量和变量
const PLATFORMS = {
    ALL: 'all',
    IOS: 'ios',
    ANDROID: 'android',
    NONE: 'none'
};

let currentPlatform = PLATFORMS.ALL;

// 检测当前设备平台
function detectPlatform() {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
        return PLATFORMS.IOS;
    } else if (/android/.test(userAgent)) {
        return PLATFORMS.ANDROID;
    }
    return PLATFORMS.ALL;
}

function showContent() {
    if (pageLoaded && themeLoaded && i18nLoaded) {
        const loadingWrapper = document.querySelector('.loading-wrapper');
        const pageWrapper = document.querySelector('.page-wrapper');
        
        // 隐藏加载动画
        loadingWrapper.style.opacity = '0';
        setTimeout(() => {
            loadingWrapper.style.display = 'none';
        }, 300);
        
        // 显示内容
        pageWrapper.classList.remove('hidden');
        pageWrapper.classList.add('visible');
    }
}

function initializeApp() {
    if (typeof i18n === 'undefined') {
        console.error('i18n object not loaded');
        return;
    }
    
    initializeTheme();
    setupThemeSwitcher();
    loadLanguage();
    setupCategories();
    createFaqElements();
    setupSearch();
    setupLanguageSwitcher();
}

function initializeTheme() {
    // 获取URL参数中的主题设置
    const urlParams = new URLSearchParams(window.location.search);
    const themeParam = urlParams.get('theme');
    
    if (themeParam) {
        // 如果URL中指定了主题，使用指定的主题
        setTheme(themeParam);
    } else {
        // 否则跟随系统
        setTheme('system');
    }
    
    // 设置主题后标记完成
    themeLoaded = true;
    showContent();
}

function setTheme(theme) {
    currentTheme = theme;
    
    if (theme === 'system') {
        // 跟随系统
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
        }
        
        // 监听系统主题变化
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        });
    } else {
        // 使用指定的主题
        document.documentElement.setAttribute('data-theme', theme);
    }
}

function loadLanguage() {
    // 首先检查 URL 参数
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // 优先使用 URL 参数指定的语言
    if (langParam && langParam in SUPPORTED_LANGUAGES) {
        currentLanguage = langParam;
    } else {
        // 其次使用本地存储的语言偏好
        const storedLang = localStorage.getItem('preferred_language');
        if (storedLang && storedLang in SUPPORTED_LANGUAGES) {
            currentLanguage = storedLang;
        } else {
            // 最后使用浏览器语言
            const bestBrowserLang = navigator.language || navigator.userLanguage;
            if(bestBrowserLang in SUPPORTED_LANGUAGES){
                currentLanguage = bestBrowserLang;
            }else{
                const browserLang = (navigator.language || navigator.userLanguage).toLowerCase().split('-')[0];
                if (browserLang in SUPPORTED_LANGUAGES) {
                    currentLanguage = browserLang;
                } else {
                console.warn(`Language ${browserLang} not supported, falling back to en`);
                    currentLanguage = 'en';
                }
            }
        }
    }

    // 确保i18n中存在对应语言
    if (!i18n[currentLanguage]) {
        console.warn(`Language ${currentLanguage} not found in i18n, falling back to en`);
        currentLanguage = 'en';
    }
    
    // 更新 URL 参数
    const url = new URL(window.location);
    url.searchParams.set('lang', currentLanguage);
    window.history.replaceState({}, '', url);
    
    updateUIText();
}

function updateUIText() {
    try {
        const texts = i18n[currentLanguage];
        
        // 更新页面标题
        document.title = texts.pageTitle;
        
        // 更新主标题和副标题
        document.querySelector('h1').textContent = texts.mainTitle;
        document.querySelector('.subtitle').textContent = texts.subtitle;
        
        // 更新搜索框占位符
        document.getElementById('searchInput').placeholder = texts.searchPlaceholder;
        
        // 更新页脚文本
        document.querySelector('.footer-content p').textContent = texts.footer.copyright;
        
        
        // 更新分类和FAQ内容
        setupCategories();
        createFaqElements();
        
        // 确保至少有一个FAQ项目处于活动状态
        const visibleItems = document.querySelectorAll('.faq-item:not([style*="display: none"])');
        if (visibleItems.length > 0 && !document.querySelector('.faq-item.active')) {
            visibleItems[0].classList.add('active');
        }
    } catch (error) {
        console.error('Error updating UI text:', error);
    }
}

function setupCategories() {
    const categoriesContainer = document.getElementById('categoryTabs');
    categoriesContainer.innerHTML = '';
    
    Object.entries(i18n[currentLanguage].categories).forEach(([key, value]) => {
        const tab = document.createElement('div');
        tab.className = `category-tab ${key === currentCategory ? 'active' : ''}`;
        tab.textContent = value;
        tab.dataset.category = key;
        
        tab.addEventListener('click', () => {
            document.querySelectorAll('.category-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentCategory = key;
            filterFaqsByCategoryAndPlatform();
        });
        
        categoriesContainer.appendChild(tab);
    });
}

function matchPlatform(faqPlatform, currentPlatform) {
    if (faqPlatform === "undefined" || faqPlatform === PLATFORMS.ALL) {
        return currentPlatform !== PLATFORMS.NONE;
    }
    if (currentPlatform === PLATFORMS.ALL && faqPlatform !== PLATFORMS.NONE) {
        return true;
    }
    return faqPlatform === currentPlatform;
}

function filterFaqsByCategoryAndPlatform() {
    const faqItems = document.querySelectorAll('.faq-item');
    let firstVisible = null;
    
    faqItems.forEach(item => {
        if ((currentCategory === 'all' || item.dataset.category === currentCategory)
        && matchPlatform(item.dataset.platform, currentPlatform)) {
            item.style.display = 'block';
            if (!firstVisible) {
                firstVisible = item;
            }
        } else {
            item.style.display = 'none';
            item.classList.remove('active');
        }
    });
    
    if (firstVisible) {
        document.querySelectorAll('.faq-item.active').forEach(item => {
            if (item.style.display === 'none') {
                item.classList.remove('active');
            }
        });
        
        if (!document.querySelector('.faq-item.active')) {
            firstVisible.classList.add('active');
        }
    }
}

function createFaqElements() {
    const faqContainer = document.getElementById('faqContainer');
    faqContainer.innerHTML = '';
    
    i18n[currentLanguage].faqData.forEach((faq, index) => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item animate__animated animate__fadeIn';
        if (index === 0) {
            faqItem.classList.add('active');
        }
        faqItem.dataset.category = faq.category;
        faqItem.dataset.platform = faq.platform;
        
        const formattedAnswer = formatAnswer(faq.answer);
        
        faqItem.innerHTML = `
            <div class="faq-question">
                <div class="faq-question-text">${faq.question}</div>
            </div>
            <div class="faq-answer">${formattedAnswer}</div>
        `;
        
        const questionEl = faqItem.querySelector('.faq-question');
        questionEl.addEventListener('click', (e) => {
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            faqItem.classList.toggle('active');
        });
        
        faqContainer.appendChild(faqItem);
    });
    
    filterFaqsByCategoryAndPlatform();
}

function formatAnswer(answer) {
    
    // 如果当前语言没有对应的注意标题，使用英文
    const currentNoteTitle = noteTitle[currentLanguage] || noteTitle['en'];
    
    // 首先转义 currentNoteTitle 中的特殊字符
    const escapedNoteTitle = currentNoteTitle.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const faqNoteVariable = `{faq_note}`;

    const appNameVariable = `{app_name}`;

    // 修改后的替换代码
    answer = answer.replace(
        new RegExp(`(${faqNoteVariable}.+?)(?=\\n\\n|\\n(?![\\s\\t])|$)`, 'gs'),
        (match) => {
            const content = match.replace(new RegExp(`^${faqNoteVariable}\\s*`), '').trim();
            return `<div class="faq-note">
                <div class="faq-note-title">${currentNoteTitle}</div>
                <div>${content}</div>
            </div>`;
        }
    );

    // 处理编号列表（支持不同语言的数字和括号样式）
    answer = answer.replace(
        /(?:^|\n)(?:\d+[\)）\.]|\d+\s*[\.。]|[①-⑩]|[㈠-㈩])\s*([\s\S]*?)(?=(?:\n(?:\d+[\)）\.]|\d+\s*[\.。]|[①-⑩]|[㈠-㈩])|\n\n|$))/g,
        (match) => {
            const items = match.trim().split(/\n(?:\d+[\)）\.]|\d+\s*[\.。]|[①-⑩]|[㈠-㈩])\s*/).filter(Boolean);
            if (items.length > 0) {
                return `<ul class="faq-answer-list">
                    ${items.map(item => `<li>${item.trim()}</li>`).join('')}
                </ul>`;
            }
            return match;
        }
    );

    // 替换 appNameVariable 为 appName
    answer = answer.replace(new RegExp(appNameVariable, 'g'), appName);

    // 处理段落（排除已处理的列表和注意事项）
    answer = answer.split('\n\n').map(para => {
        if (!para.includes('<ul') && !para.includes('<div class="faq-note"')) {
            // 处理RTL语言的文本方向
            const rtlClass = ['ar', 'fa', 'he'].includes(currentLanguage) ? ' class="rtl"' : '';
            return `<p${rtlClass}>${para.trim()}</p>`;
        }
        return para;
    }).join('');

    return answer;
}

function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    let searchTimeout;

    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const searchText = e.target.value.trim().toLowerCase();
            searchFAQs(searchText);
        }, 300);
    });
}

function searchFAQs(searchText) {
    const faqItems = document.querySelectorAll('.faq-item');
    let hasResults = false;
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question-text').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        
        if (searchText === '') {
            // 如果搜索框为空，恢复原始状态
            (item.style.display = currentCategory === 'all' || 
                item.dataset.category === currentCategory) && matchPlatform(item.dataset.platform, currentPlatform) ? 'block' : 'none';
            item.classList.remove('active');  // 移除展开状态
            clearHighlight(item);
        } else if ((question.includes(searchText) || answer.includes(searchText)) && matchPlatform(item.dataset.platform, currentPlatform)) {
            // 显示匹配的项目
            item.style.display = 'block';
            item.classList.add('active');  // 自动展开含搜索词的项目
            hasResults = true;
            highlightText(item, searchText);
        } else {
            // 隐藏不匹配的项目
            item.style.display = 'none';
            item.classList.remove('active');
            clearHighlight(item);
        }
    });
    
    // 更新分类标签的激活状态
    updateCategoryTabsForSearch(searchText, hasResults);
}

function clearHighlight(element) {
    element.querySelectorAll('.faq-question, .faq-answer').forEach(el => {
        const marks = el.querySelectorAll('mark.highlight');
        marks.forEach(mark => {
            const text = document.createTextNode(mark.textContent);
            mark.parentNode.replaceChild(text, mark);
        });
    });
}

function updateCategoryTabsForSearch(searchText, hasResults) {
    const categoryTabs = document.querySelectorAll('.category-tab');
    
    if (searchText === '') {
        // 恢复原始分类状态
        categoryTabs.forEach(tab => {
            tab.classList.toggle('active', tab.dataset.category === currentCategory);
        });
        filterFaqsByCategoryAndPlatform();
    } else {
        // 在搜索模式下，移除所有分类的激活状态
        categoryTabs.forEach(tab => tab.classList.remove('active'));
    }
}

function highlightText(element, searchText) {
    if (!searchText.trim()) return;
    
    element.querySelectorAll('.faq-question, .faq-answer').forEach(el => {
        const marks = el.querySelectorAll('mark.highlight');
        marks.forEach(mark => {
            const text = document.createTextNode(mark.textContent);
            mark.parentNode.replaceChild(text, mark);
        });
        
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = el.innerHTML;
        
        function highlightTextNodes(node) {
            if (node.nodeType === 3) {
                const text = node.textContent;
                const regex = new RegExp(`(${searchText})`, 'gi');
                if (regex.test(text)) {
                    const fragment = document.createDocumentFragment();
                    let lastIndex = 0;
                    text.replace(regex, (match, p1, offset) => {
                        if (offset > lastIndex) {
                            fragment.appendChild(document.createTextNode(text.slice(lastIndex, offset)));
                        }
                        const mark = document.createElement('mark');
                        mark.className = 'highlight';
                        mark.textContent = match;
                        fragment.appendChild(mark);
                        lastIndex = offset + match.length;
                    });
                    if (lastIndex < text.length) {
                        fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
                    }
                    node.parentNode.replaceChild(fragment, node);
                }
            } else if (node.nodeType === 1 && !node.classList.contains('highlight')) {
                Array.from(node.childNodes).forEach(highlightTextNodes);
            }
        }
        
        Array.from(tempDiv.childNodes).forEach(highlightTextNodes);
        el.innerHTML = tempDiv.innerHTML;
    });
}

// 添加语言切换器设置函数
function setupLanguageSwitcher() {
    const languageBtn = document.getElementById('languageBtn');
    const languageDropdown = document.getElementById('languageDropdown');
    const currentLangSpan = languageBtn.querySelector('.current-lang');
    
    // 更新当前语言显示
    currentLangSpan.textContent = SUPPORTED_LANGUAGES[currentLanguage];
    
    // 清空现有的语言选项
    languageDropdown.innerHTML = '';
    
    // 生成语言选项
    Object.entries(SUPPORTED_LANGUAGES).forEach(([langCode, langName]) => {
        // 检查语言是否在 i18n 中有对应的翻译
        if (i18n[langCode]) {
            const option = document.createElement('div');
            option.className = `language-option ${langCode === currentLanguage ? 'active' : ''}`;
            option.dataset.lang = langCode;
            option.innerHTML = `
                <span class="material-icons">
                    ${langCode === currentLanguage ? 'radio_button_checked' : 'radio_button_unchecked'}
                </span>
                <span>${langName}</span>
            `;
            
            option.addEventListener('click', () => {
                if (langCode !== currentLanguage) {
                    currentLanguage = langCode;
                    currentLangSpan.textContent = langName;
                    updateUIText();
                    document.querySelectorAll('.language-option').forEach(opt => {
                        opt.classList.remove('active');
                        opt.querySelector('.material-icons').textContent = 'radio_button_unchecked';
                    });
                    option.classList.add('active');
                    option.querySelector('.material-icons').textContent = 'radio_button_checked';
                    
                    // 更新 URL 参数
                    const url = new URL(window.location);
                    url.searchParams.set('lang', langCode);
                    window.history.replaceState({}, '', url);
                }
                languageDropdown.classList.remove('show');
            });
            
            languageDropdown.appendChild(option);
        }
    });
    
    // 切换下拉菜单显示
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdown.classList.toggle('show');
    });
    
    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', () => {
        languageDropdown.classList.remove('show');
    });
}

// 添加主题切换函数
function toggleTheme(theme) {
    setTheme(theme);
    
    // 更新URL参数
    const url = new URL(window.location);
    url.searchParams.set('theme', theme);
    window.history.pushState({}, '', url);
}

function setupThemeSwitcher() {
    const themeBtn = document.getElementById('themeBtn');
    const themeIcon = themeBtn.querySelector('.material-icons');
    
    function updateThemeIcon() {
        const currentThemeValue = document.documentElement.getAttribute('data-theme');
        themeIcon.textContent = currentThemeValue === 'dark' ? 'light_mode' : 'dark_mode';
    }
    
    themeBtn.addEventListener('click', () => {
        const currentThemeValue = document.documentElement.getAttribute('data-theme');
        toggleTheme(currentThemeValue === 'dark' ? 'light' : 'dark');
        updateThemeIcon();
    });
    
    // 初始化图标
    updateThemeIcon();
}

function initializeFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    
    // 检查平台参数
    const platformParam = urlParams.get('platform');
    if (platformParam && Object.values(PLATFORMS).includes(platformParam)) {
        currentPlatform = platformParam;
    } else {
        currentPlatform = detectPlatform();
    }
    
    // 更新 URL 参数
    const url = new URL(window.location);
    url.searchParams.set('platform', currentPlatform);
    window.history.replaceState({}, '', url);
    
    // 检查是否需要隐藏顶部导航栏
    const navHidden = urlParams.get('nav-hidden');
    if (navHidden === 'true') {
        showTopNav = false;
        const topNav = document.querySelector('.top-nav');
        const container = document.querySelector('.container');
        
        topNav.classList.add('hidden');
        container.classList.add('no-nav');
    }
    
    // 其他 URL 参数处理...
    const langParam = urlParams.get('lang');
    if (langParam && langParam in SUPPORTED_LANGUAGES) {
        currentLanguage = langParam;
    }
    
    const themeParam = urlParams.get('theme');
    if (themeParam && ['light', 'dark'].includes(themeParam)) {
        currentTheme = themeParam;
    }
}

// 添加滚动到可见区域的函数
function scrollIntoViewWithOffset(element, offset = 100) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });
}

// 修改 setupFAQInteractions 函数
function setupFAQInteractions() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            const wasActive = faqItem.classList.contains('active');
            
            // 关闭其他打开的FAQ
            document.querySelectorAll('.faq-item.active').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });
            
            // 切换当前FAQ的状态
            faqItem.classList.toggle('active');
            
            // 如果是展开操作，滚动到可见区域
            if (!wasActive) {
                // 给一个小延迟以确保展开动画完成
                setTimeout(() => {
                    scrollIntoViewWithOffset(faqItem);
                }, 100);
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 确保页面一开始是隐藏的
    document.querySelector('.page-wrapper').classList.add('hidden');
    
    initializeFromURL();
    initializeApp();
    
    // 标记页面加载完成
    pageLoaded = true;
    showContent();
}); 