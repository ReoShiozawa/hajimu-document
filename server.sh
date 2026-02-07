#!/bin/bash

# はじむドキュメントサイト - ローカルサーバー起動スクリプト

cd "$(dirname "$0")"

echo "========================================="
echo "はじむドキュメントサイト"
echo "========================================="
echo ""
echo "ローカルウェブサーバーを起動します..."
echo ""

# Pythonが利用可能かチェック
if command -v python3 &> /dev/null; then
    echo "Python 3を使用します"
    echo ""
    echo "ブラウザで以下のURLを開いてください:"
    echo "http://localhost:8000"
    echo ""
    echo "終了するには Ctrl+C を押してください"
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    echo "Python 2を使用します"
    echo ""
    echo "ブラウザで以下のURLを開いてください:"
    echo "http://localhost:8000"
    echo ""
    echo "終了するには Ctrl+C を押してください"
    python -m SimpleHTTPServer 8000
elif command -v node &> /dev/null; then
    echo "Node.jsのhttp-serverを使用します"
    npx http-server -p 8000
else
    echo "エラー: PythonまたはNode.jsがインストールされていません"
    echo "以下のいずれかをインストールしてください:"
    echo "- Python: https://www.python.org"
    echo "- Node.js: https://nodejs.org"
    exit 1
fi
