// ─── 言語設定をページ描画前に適用（フラッシュ防止）───
(function() {
    if (localStorage.getItem("hajimu-lang") === "en") {
        document.documentElement.classList.add("lang-en-early");
    }
})();

// ─── 翻訳辞書 ───
var I18N = {
    ja: {
        "nav.home":       "ホーム",
        "nav.guide":      "始める",
        "nav.reference":  "リファレンス",
        "nav.examples":   "例",
        "nav.packages":   "パッケージ",
        "nav.plugins":    "プラグイン開発",
        "nav.faq":        "FAQ",
        "nav.contribute": "貢献",
        "lang.toggle":    "🇺🇸 English",
        "index.hero.sub":       "シンプルで直感的。日本語の自然な表現でコードを書こう。",
        "index.cta.start":      "今すぐ始める",
        "index.cta.docs":       "ドキュメントを読む",
        "index.s.features":     "特徴",
        "index.s.quickstart":   "クイックスタート",
        "index.s.requirements": "要件",
        "index.s.why":          "なぜはじむ？",
        "index.s.philosophy":   "設計思想",
        "index.s.stats":        "統計",
        "index.s.community":    "コミュニティ",
        "index.stat.builtins":  "組み込み関数",
        "index.stat.tests":     "自動テスト",
        "index.stat.docs":      "ドキュメント行",
        "index.stat.warnings":  "警告レベル",
        "index.community.body": "はじむはオープンソースプロジェクトです。バグ報告・機能提案・コード貢献など、あらゆる形の参加を歓迎します。",
        "guide.title":       "始めるガイド",
        "guide.s1":          "1. インストール",
        "guide.s1.desc":     "GitHubからソースコードをクローンして、ビルドしてください。",
        "guide.req":         "要件",
        "guide.verify":      "検証",
        "guide.verify.desc": "インストール後、以下のコマンドで動作確認してください。",
        "guide.s2":          "2. はじめてのプログラム",
        "guide.s2.desc1":    "テキストエディタで <code>hello.jp</code> というファイルを作成し、以下のコードを入力してください。",
        "guide.s2.desc2":    "次に、コマンドラインで以下を実行します。",
        "guide.s2.congrats": "おめでとうございます！最初のプログラムが完成しました。",
        "guide.s3":          "3. 基本概念",
        "guide.s4":          "4. 制御構造",
        "guide.s5":          "5. 関数",
        "guide.s6":          "6. 配列とリスト内包表記",
        "guide.s7":          "7. クラスとオブジェクト",
        "guide.next":        "次のステップ",
        "ref.title":          "リファレンスマニュアル",
        "ref.toc":            "目次",
        "ref.s.basics":       "基本構文",
        "ref.s.types":        "データ型",
        "ref.s.operators":    "演算子",
        "ref.s.control":      "制御構造",
        "ref.s.functions":    "関数",
        "ref.s.arrays":       "配列",
        "ref.s.strings":      "文字列",
        "ref.s.dicts":        "辞書",
        "ref.s.classes":      "クラス",
        "ref.s.builtins":     "組み込み関数",
        "ref.s.platform":     "プラットフォーム定数",
        "ref.s.plugins":      "C拡張プラグイン",
        "ref.s.packages":     "パッケージ管理",
        "ref.viewfull":       "完全な仕様を見る →",
        "ref.platform.title": "プラットフォーム機能",
        "ref.platform.desc":  "はじむはプラットフォームに応じた拡張機能をパッケージとして提供します。",
        "ref.platform.table": "各パッケージの対応プラットフォーム",
        "ref.platform.usage": "使用例",
        "ref.platform.auto":  "自動検出",
        "pkg.title":        "公式パッケージ一覧",
        "pkg.desc":         "はじむの豊富な公式パッケージを使えば、GUI・ゲーム・Web・音声・物理演算など幅広い分野のアプリを日本語で開発できます。",
        "pkg.install":      "インストール方法",
        "pkg.install.desc": "hajimu パッケージ 追加 コマンドでパッケージを追加します。",
        "pkg.catalog":      "パッケージ一覧",
        "pkg.json.title":   "hajimu.json について",
        "pkg.json.desc":    "パッケージ設定ファイル hajimu.json に依存関係を記述します。",
        "pkg.platforms":    "対応プラットフォーム",
        "pkg.plat.desc":    "各パッケージの対応状況は以下の通りです。",
        "examples.title":   "コード例",
        "gui.title":        "GUIパッケージ",
        "plugins.title":    "プラグイン開発ガイド",
        "faq.title":        "よくある質問 (FAQ)",
        "contribute.title": "貢献する",
        "footer.about":      "はじむについて",
        "footer.resources":  "リソース",
        "footer.community":  "コミュニティ",
        "footer.legal":      "法的情報",
        "footer.copy":       "© 2025 はじむ開発チーム",
        "footer.tutorial":   "チュートリアル",
        "footer.api":        "APIリファレンス",
        "footer.pkglist":    "パッケージ一覧",
        "footer.plugindev":  "プラグイン開発",
        "footer.guidev":     "GUI開発ガイド",
        "footer.codeex":     "コード例",
        "footer.faqlink":    "よくある質問",
        "footer.download":   "ダウンロード",
        "footer.contrib":    "貢献する",
        "footer.buglink":    "バグ報告",
        "footer.discussion": "ディスカッション",
        "footer.license":    "ライセンス",
        "footer.privacy":    "プライバシーポリシー",
        "footer.terms":      "利用規約",
    },
    en: {
        "nav.home":       "Home",
        "nav.guide":      "Get Started",
        "nav.reference":  "Reference",
        "nav.examples":   "Examples",
        "nav.packages":   "Packages",
        "nav.plugins":    "Plugin Dev",
        "nav.faq":        "FAQ",
        "nav.contribute": "Contribute",
        "lang.toggle":    "🇯🇵 日本語",
        "index.hero.sub":       "Simple and intuitive. Write code with natural Japanese expressions.",
        "index.cta.start":      "Get Started",
        "index.cta.docs":       "Read the Docs",
        "index.s.features":     "Features",
        "index.s.quickstart":   "Quick Start",
        "index.s.requirements": "Requirements",
        "index.s.why":          "Why Hajimu?",
        "index.s.philosophy":   "Design Philosophy",
        "index.s.stats":        "Stats",
        "index.s.community":    "Community",
        "index.stat.builtins":  "Built-in Functions",
        "index.stat.tests":     "Automated Tests",
        "index.stat.docs":      "Doc Lines",
        "index.stat.warnings":  "Warning Levels",
        "index.community.body": "Hajimu is an open-source project. We welcome bug reports, feature requests, code contributions, and any form of participation.",
        "guide.title":       "Getting Started",
        "guide.s1":          "1. Installation",
        "guide.s1.desc":     "Clone the repository from GitHub and build it.",
        "guide.req":         "Requirements",
        "guide.verify":      "Verify Installation",
        "guide.verify.desc": "After installation, run the following command to verify.",
        "guide.s2":          "2. Your First Program",
        "guide.s2.desc1":    "Create a file called <code>hello.jp</code> in your text editor and enter the following code.",
        "guide.s2.desc2":    "Then run the following command in your terminal.",
        "guide.s2.congrats": "Congratulations! Your first program is complete.",
        "guide.s3":          "3. Basic Concepts",
        "guide.s4":          "4. Control Flow",
        "guide.s5":          "5. Functions",
        "guide.s6":          "6. Arrays &amp; List Comprehensions",
        "guide.s7":          "7. Classes &amp; Objects",
        "guide.next":        "Next Steps",
        "ref.title":          "Reference Manual",
        "ref.toc":            "Contents",
        "ref.s.basics":       "Basic Syntax",
        "ref.s.types":        "Data Types",
        "ref.s.operators":    "Operators",
        "ref.s.control":      "Control Flow",
        "ref.s.functions":    "Functions",
        "ref.s.arrays":       "Arrays",
        "ref.s.strings":      "Strings",
        "ref.s.dicts":        "Dictionaries",
        "ref.s.classes":      "Classes",
        "ref.s.builtins":     "Built-in Functions",
        "ref.s.platform":     "Platform Constants",
        "ref.s.plugins":      "C Extension Plugins",
        "ref.s.packages":     "Package Management",
        "ref.viewfull":       "View Full Spec →",
        "ref.platform.title": "Platform Features",
        "ref.platform.desc":  "Hajimu provides platform-specific extensions as packages.",
        "ref.platform.table": "Platform support per package",
        "ref.platform.usage": "Usage",
        "ref.platform.auto":  "Auto-detect",
        "pkg.title":        "Official Packages",
        "pkg.desc":         "Hajimu's official packages enable you to build GUI apps, games, web servers, audio tools and more — all in Japanese.",
        "pkg.install":      "How to Install",
        "pkg.install.desc": "Add packages with the hajimu パッケージ 追加 command.",
        "pkg.catalog":      "Package List",
        "pkg.json.title":   "About hajimu.json",
        "pkg.json.desc":    "Describe dependencies in the hajimu.json package config file.",
        "pkg.platforms":    "Supported Platforms",
        "pkg.plat.desc":    "Platform compatibility for each package is shown below.",
        "examples.title":   "Code Examples",
        "gui.title":        "GUI Package",
        "plugins.title":    "Plugin Development Guide",
        "faq.title":        "Frequently Asked Questions (FAQ)",
        "contribute.title": "Contributing",
        "footer.about":      "About Hajimu",
        "footer.resources":  "Resources",
        "footer.community":  "Community",
        "footer.legal":      "Legal",
        "footer.copy":       "© 2025 Hajimu Dev Team",
        "footer.tutorial":   "Tutorial",
        "footer.api":        "API Reference",
        "footer.pkglist":    "Package List",
        "footer.plugindev":  "Plugin Dev",
        "footer.guidev":     "GUI Dev Guide",
        "footer.codeex":     "Code Examples",
        "footer.faqlink":    "FAQ",
        "footer.download":   "Download",
        "footer.contrib":    "Contribute",
        "footer.buglink":    "Report a Bug",
        "footer.discussion": "Discussion",
        "footer.license":    "License",
        "footer.privacy":    "Privacy Policy",
        "footer.terms":      "Terms of Use",
    }
};

// ─── 言語適用関数 ───
function applyLang(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function(el) {
        var val = I18N[lang] && I18N[lang][el.dataset.i18n];
        if (val !== undefined) el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function(el) {
        var key = el.getAttribute("data-i18n-html");
        var val = I18N[lang] && I18N[lang][key];
        if (val !== undefined) el.innerHTML = val;
    });
    document.querySelectorAll(".i18n-ja").forEach(function(el) {
        el.style.display = lang === "en" ? "none" : "";
    });
    document.querySelectorAll(".i18n-en").forEach(function(el) {
        el.style.display = lang === "en" ? (el.tagName === "SPAN" ? "inline" : "block") : "none";
    });
    document.body.classList.toggle("lang-en", lang === "en");
    document.documentElement.lang = lang === "en" ? "en" : "ja";
}

// ─── DOM 準備後 ───
document.addEventListener("DOMContentLoaded", function() {
    var savedLang = localStorage.getItem("hajimu-lang") || "ja";
    document.documentElement.classList.remove("lang-en-early");

    applyLang(savedLang);

    var langToggle = document.getElementById("lang-toggle");
    if (langToggle) {
        langToggle.addEventListener("click", function() {
            var isEn = document.body.classList.contains("lang-en");
            var nextLang = isEn ? "ja" : "en";
            localStorage.setItem("hajimu-lang", nextLang);
            applyLang(nextLang);
        });
    }

    var hamburger = document.querySelector(".hamburger");
    var nav = document.querySelector("nav");
    if (hamburger && nav) {
        hamburger.addEventListener("click", function() {
            nav.classList.toggle("active");
        });
    }

    document.querySelectorAll("nav a").forEach(function(link) {
        link.addEventListener("click", function() {
            if (nav) nav.classList.remove("active");
        });
    });

    var scrollTopBtn = document.getElementById("scrollTop");
    if (scrollTopBtn) {
        window.addEventListener("scroll", function() {
            scrollTopBtn.style.display = window.pageYOffset > 300 ? "block" : "none";
        });
        scrollTopBtn.addEventListener("click", function() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    document.body.classList.remove("page-loading");
});
