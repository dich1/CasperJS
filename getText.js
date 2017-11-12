// webpageのオブジェクトを作成
var casper = require('casper').create();

// userAgentの設定
// ブラウザのコンソールからnavigator.userAgentで出力された値を指定
casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36");

// ファイル入出力用のオブジェクトを生成
var fileStream = require('fs');

// 第64回勝田マラソン大会レポURLを変数に格納
var login_url = "https://runnet.jp/report/race.do?raceId=113732";

// 指定のURLへ遷移する
casper.start(login_url); 

casper.then(function() {
    // DOM操作等を行うためのメソッドにアクセス
    var last_url_text = this.evaluate(function() {
            // テキストを囲むdivタグのクラス要素を指定して取得
            var Node = this.click('#mm004-04 > div.mm009-04 > ul > li:nth-child(5) > a');
            
            // テキストを返す
            return Node.innerText;
    });
    this.echo(last_url_text);

});

// 処理を開始する
casper.run();