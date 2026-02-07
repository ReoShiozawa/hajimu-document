# はじむ - 公式ドキュメントサイト

このディレクトリは、はじむの公式ドキュメント兼紹介サイトです。

## サイト構成

```
jp-document/
├── index.html              # トップページ
├── pages/
│   ├── guide.html         # 始めるガイド
│   ├── reference.html     # リファレンスマニュアル
│   └── examples.html      # コード例
├── assets/
│   ├── css/
│   │   └── style.css      # スタイルシート
│   ├── js/
│   │   └── main.js        # JavaScriptスクリプト
│   └── img/               # 画像ディレクトリ
└── README.md              # このファイル
```

## ページ構成

### トップページ（index.html）
- プロジェクトの概要とハイロー
- 主な特徴紹介
- クイックスタート
- システム要件
- プロジェクト統計
- コミュニティ情報

### 始めるガイド（pages/guide.html）
- インストール方法
- 初めてのプログラム
- 基本概念（変数、データ型、演算）
- 制御構造（条件分岐、ループ）
- 関数の定義と使用
- 配列とリスト内包表記
- クラスとオブジェクト

### リファレンスマニュアル（pages/reference.html）
- 基本構文
- データ型
- 演算子（算術、比較、論理）
- 制御構造
- 関数
- 配列とリスト内包表記
- 文字列操作
- 辞書（ハッシュ）
- クラス
- 組み込み関数

### コード例（pages/examples.html）
- Hello World
- 計算例
- FizzBuzz
- 配列操作
- 関数定義
- クラス実装
- 辞書操作
- 文字列処理
- 高階関数とラムダ式
- その他の実用的な例

## 技術構成

### フロントエンド
- **HTML5**: 構造定義
- **CSS3**: スタイリングとレスポンシブデザイン
- **Vanilla JavaScript**: インタラクション（ハンバーガーメニュー、スクロール機能など）

### 特徴
- レスポンシブデザイン（モバイル対応）
- 暗いモード対応（CSSカスタムプロパティ使用）
- スムーズスクロール
- ページトランジション効果
- アクセシビリティ対応

## セットアップ

### ローカルでの実行
1. `index.html`をブラウザで開く
2. または、ローカルウェブサーバーで実行：

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (http-server)
npx http-server
```

その後、`http://localhost:8000`にアクセス

### デプロイ

このサイトは完全にスタティックなHTMLで構成されているため、以下のホスティングサービスに簡単にデプロイできます：

- **GitHub Pages**
  ```bash
  git clone https://github.com/ReoShiozawa/hajimu-document.git
  cd jp-document
  # 設定後、pushで自動デプロイ
  ```

- **Netlify**
  - GitHub連携でワンクリックデプロイ

- **Vercel**
  - GitHub連携対応

- **AWS S3 + CloudFront**
  - 高速CDN配信

## カスタマイズ

### カラースキーム変更
`assets/css/style.css`のCSSカスタムプロパティを編集：

```css
:root {
    --primary-color: #2c3e50;
    --secondary-color: #e74c3c;
    --accent-color: #3498db;
    /* ... */
}
```

### 新しいページ追加
1. `pages/`に新しいHTMLファイルを作成
2. 基本的なテンプレートをコピー
3. ナビゲーションリンクを更新

## ブラウザサポート

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## ライセンス

このドキュメントサイトははじむプロジェクトと同じライセンスの下で公開されています。

## 貢献

このサイトの改善に協力していただけます。以下の方法で貢献できます：

1. **バグ報告**: GitHub Issuesで報告
2. **改善提案**: GitHub Discussions で提案
3. **プルリクエスト**: 直接改善をサブミット

## コンタクト

- **プロジェクト**: https://github.com/ReoShiozawa/hajimu
- **ドキュメント**: https://github.com/ReoShiozawa/hajimu-document

---

*最終更新: 2026年2月*
