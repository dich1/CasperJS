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

- Firefox 52.0ダウンロード、展開  
https://download.mozilla.org/?product=firefox-52.0&os=osx&lang=ja-JP-mac

- パスの設定
```
vim ~/.bash_profile

///// 以下を追加
export SLIMERJSLAUNCHER=/Applications/Firefox.app/Contents/MacOS/firefox
/////

source ~/.bash_profile
```

- 確認
```
/Applications/Firefox.app/Contents/MacOS/firefox-bin -v
phantomjs --version
casperjs --version
slimerjs --version
```

## 勤怠情報1コマンド入力機能
## 使用方法
- 設定情報を入力する
```
var settings = {
	emailAddress : '***.***@ever-rise.co.jp',
	password     : '****',
	startTime    : '09:00', // 始業時間
	projectNumber: '7' // PJ選択の上から何番目か指定(ex:本社行事 -> '1')
};
```

- コマンドを実行する
casperjs --engine=slimerjs trInput.js // ファイルを配置したパスを指定

## 現状
- GUI起動しないと上手くいかない
- SlimerJSがFirefoxの最新バージョンで使えない
- 複数PJ未対応

## 参考URL
https://gigazine.net/news/20170308-firefox-52/  
http://itsukara.hateblo.jp/entry/2016/04/09/233805  
https://docs.slimerjs.org/current/installation.html  
https://stackoverflow.com/questions/36040830/  casperjs-why-does-my-url-change-to-aboutblank-when-my-page-is-loaded  
http://kimagureneet.hatenablog.com/?page=1490109108
