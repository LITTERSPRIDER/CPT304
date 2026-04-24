// =======================
// 🌐 多语言配置
// =======================
const translations = {

  en: {
    app: {
      title: "Budget App",
      logo: "Budget<b>App</b>",
      balance: "Balance",
      income: "Income",
      outcome: "Outcome",
      dashboard: "Dashboard",
      expense: "Expenses",
      all: "All",
      titlePlaceholder: "Title"
    },

    cookie: {
      message: "We use cookies to improve your experience. Please read our",
      accept: "Accept All",
      reject: "Reject"
    },

    privacy: {
      title: "Privacy Policy",
      desc: "This is a sample privacy policy page explaining how we handle your data.",
      highlight: "We use cookies to ensure the proper functioning of our website and to enhance your browsing experience.",
      usage: "The cookies we use may include:",
      item1: "Essential cookies for website functionality",
      item2: "Cookies to improve user experience",
      footer: "After returning to the previous page, you can choose to accept or reject cookies.",
      back: "← Go back"
    }
  },


  zh: {
    app: {
      title: "记账应用",
      logo: "记账<b>应用</b>",
      balance: "余额",
      income: "收入",
      outcome: "支出",
      dashboard: "面板",
      expense: "支出",
      all: "全部",
      titlePlaceholder: "标题"
    },

    cookie: {
      message: "我们使用 Cookies 来提升您的体验，请阅读",
      accept: "同意",
      reject: "拒绝"
    },

    privacy: {
      title: "隐私政策",
      desc: "这是一个示例隐私政策页面。",
      highlight: "我们使用 Cookie 来保证网站正常运行并提升您的浏览体验。",
      usage: "我们使用的 Cookie 包括：",
      item1: "网站功能所需 Cookie",
      item2: "用于优化用户体验的 Cookie",
      footer: "返回后，您可以选择同意或拒绝 Cookie。",
      back: "← 返回"
    }
  }

};

// =======================
// 🌍 当前语言
// =======================
let currentLang = localStorage.getItem("lang") || "en";


// =======================
// 🔍 获取翻译
// =======================
function t(path) {
  try {
    return path.split('.').reduce((obj, key) => obj[key], translations[currentLang]);
  } catch (e) {
    console.warn("Missing translation:", path);
    return path;
  }
}


// =======================
// 🔄 切换语言
// =======================
function setLanguage(lang) {
  if (!translations[lang]) return;

  currentLang = lang;
  localStorage.setItem("lang", lang);

  // 简单方案：刷新页面
  location.reload();
}