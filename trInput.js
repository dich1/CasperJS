var casper = require("casper").create();

casper.userAgent("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:57.0) Gecko/20100101 Firefox/57.0");

casper.start();
casper.open("http://tr.ever-rise.co.jp/dailyReportEdit/");

casper.then(function() {
	 this.evaluate(function() {
	    document.getElementsByName("emailAddress")[0].value = "daichi.ito@ever-rise.co.jp";
	    document.getElementsByName("password")[0].value = "everrise";
	    document.getElementsByName("doLogin")[0].click();
	 }, true);
});

casper.then(function() {
	this.evaluate(function() {
		// TODO トークン取得する
		
	    document.getElementsByName("str_start_time")[0].value = "10:00";
	    document.getElementsByName("str_end_time")[0].value = "19:00";
	    document.getElementsByName("db_repose_time")[0].value = "1.00";
	    document.getElementsByClassName("selectedValue")[0].click();
	    document.getElementsByClassName("itm-7")[0].click();
	    document.getElementsByClassName("btn-open")[0].click();
	    document.getElementsByName("reportadd")[0].click();
    }, true);
});

casper.then(function() {
    this.capture('test-finished.png');
});
casper.run();