// ナビゲーション
document.addEventListener('DOMContentLoaded', function() {
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

    // ページ読み込み完了時
    document.body.style.opacity = '1';
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
