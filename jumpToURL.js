// webpageのオブジェクトを作成
var casper = require('casper').create();

// userAgentの設定
// ブラウザのコンソールからnavigator.userAgentで出力された値を指定
casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36");

// ファイル入出力用のオブジェクトを生成
var fileStream = require('fs');

// 第64回勝田マラソン大会レポURLを変数に格納
var login_url = "https://runnet.jp/report/race.do?raceId=113732";

//指定のURLへ遷移する
casper.start(login_url);

// 遷移後に処理を実行する
casper.thenOpen('https://runnet.jp/report/raceDetail.do?command=page&raceId=113732&userNumber=896&pageIndex=&sortIndex=0', function(){
    this.echo('キャプチャ撮る');

    this.capture('after.png');

    this.echo('キャプチャ撮った');
});
 
//処理の実行
casper.run();