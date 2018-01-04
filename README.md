# CasperJS

## 実行環境
- Mac
- JavaScript
- PhantomJS 2.1.1
- CasperJS  1.1.4
- SlimerJS  0.10.3
- Firefox 52.0

## 環境構築
- homebrew入れる
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

- 必要なモジュールを入れる
```
brew doctor
brew install phantomjs casperjs slimerjs
```

- 各々パスの設定

- Firefox 52.0ダウンロード
https://download.mozilla.org/?product=firefox-52.0&os=osx&lang=ja-JP-mac

- 確認
```
phantomjs --version
casperjs --version
slimerjs --version
```

## 勤怠情報1コマンド入力機能
## 使用方法
- 設定情報を入力する
```
var settings = {
	startTime   : '09:00', // 始業時間
	emailAddress: '***.***@ever-rise.co.jp',
	password    : '****'
};
```

- コマンドを実行する
casperjs --engine=slimerjs trInput.js // ファイルを配置したパスを指定

## 問題
- GUI起動しないと上手くいかない
- SlimerJSがFirefoxの最新バージョンで使えない

## 参考URL
https://gigazine.net/news/20170308-firefox-52/
http://kimagureneet.hatenablog.com/?page=1490109108
