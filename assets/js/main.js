// ─── 言語設定をページ描画前に適用（フラッシュ防止）───
(function() {
    if (localStorage.getItem('hajimu-lang') === 'en') {
        document.documentElement.classList.add('lang-en-early');
    }
})();

// ナビゲーション
document.addEventListener('DOMContentLoaded', function() {
    // ─── 言語設定を body に適用 ───
    const savedLang = localStorage.getItem('hajimu-lang') || 'ja';
    if (savedLang === 'en') {
        document.body.classList.add('lang-en');
    }
    document.documentElement.classList.remove('lang-en-early');

    // 言語トグルボタン
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = savedLang === 'en' ? '🇯🇵 日本語' : '🇺🇸 English';
        langToggle.addEventListener('click', function() {
            const isEn = document.body.classList.toggle('lang-en');
            localStorage.setItem('hajimu-lang', isEn ? 'en' : 'ja');
            langToggle.textContent = isEn ? '🇯🇵 日本語' : '🇺🇸 English';
        });
    }

    // ハンバーガーメニュー
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('nav');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // リンククリック時にメニューを閉じる
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            nav.classList.remove('active');
        });
    });

    // スクロールトップボタン
    const scrollTopBtn = document.getElementById('scrollTop');
    if (scrollTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.style.display = 'block';
            } else {
                scrollTopBtn.style.display = 'none';
            }
        });

        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ページ読み込み完了時 - フェードイン効果
    document.body.classList.remove('page-loading');
});

// ページ遷移関数
function navigateTo(page) {
    const content = document.getElementById('page-content');
    if (content) {
        content.style.opacity = '0';
        setTimeout(() => {
            loadPage(page);
            content.style.opacity = '1';
        }, 300);
    }
}

// ページ読み込み
function loadPage(page) {
    const mainContent = document.getElementById('page-content');
    
    if (!mainContent) return;

    const pages = {
        'home': '<div class="hero"><h1>日本語プログラミング言語へようこそ</h1><p>日本語で自然にコードを書こう</p><div class="cta-buttons"><a href="#" class="btn btn-primary" onclick="navigateTo(\'guide\'); return false;">始める</a><a href="#" class="btn btn-secondary" onclick="navigateTo(\'reference\'); return false;">ドキュメント</a></div></div>',
        'guide': '<h2>使い始めるガイド</h2><h3>インストール</h3><p>nihongo処理系をインストールして、日本語プログラミングを始めましょう。</p>',
        'reference': '<h2>リファレンスマニュアル</h2><p>完全なドキュメントはメインリポジトリを参照してください。</p>',
        'examples': '<h2>コード例</h2><p>様々なサンプルコードを確認できます。</p>'
    };

    if (pages[page]) {
        mainContent.innerHTML = pages[page];
    }
}

// コードハイライト（シンプル版）
function highlightCode(element) {
    const code = element.textContent;
    let highlighted = code;

    // キーワードのハイライト
    const keywords = ['表示', '変数', '関数', '戻す', '終わり', 'もし', '繰り返す'];
    keywords.forEach(keyword => {
        highlighted = highlighted.replace(
            new RegExp(`\\b${keyword}\\b`, 'g'),
            `<span class="highlight-keyword">${keyword}</span>`
        );
    });

    element.innerHTML = highlighted;
}
