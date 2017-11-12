//casperオブジェクトを生成
var casper = require('casper').create();

//指定のURLへ遷移
casper.start('https://www.google.co.jp/', function() {
    //タイトルを取得して出力
    this.echo(this.getTitle());
});

//
casper.thenOpen('https://www.google.co.jp/', function() {
    this.echo(this.getTitle());
});

casper.run();
