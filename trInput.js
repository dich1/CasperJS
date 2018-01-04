var settings = {
	startTime   : '09:00', // 始業時間
	emailAddress: '***.***@ever-rise.co.jp',
	password    : '****'
};

var time = new Date();
var hour = time.getHours();
var minute = time.getMinutes();

/**
 * ゼロパディング
 *
 * @param {number} number 取得した時間or分
 * @return {number} 2桁にした数値
 */
function toDoubleDigits(number) {
	// Number -> String
    number += "";
    if (number.length === 1) {
      number = "0" + number;
    }
    return number;     
}

/**
 * 勤怠入力時間を算出
 * 
 * @param {number} hour 時間
 * @param {number} minute 分
 * @return {string} コロン繋ぎにした退勤時間
 */
function checkTime(hour, minute) {
    hour = toDoubleDigits(hour);
    
	if (minute == 0) {
		// 00
        minute = toDoubleDigits(minute);
	} else if (minute < 15) {
		// 01 ~ 14
        minute = '00';
	} else if (minute < 30) {
		// 15 ~ 29
        minute = '15';
	} else if (minute < 45) {
		// 30 ~ 44
        minute = '30';   
	} else if (minute <= 59) {
		// 45 ~ 59
        minute = '45';
    }

 	return hour + ":" + minute;
}

var endTime = checkTime(hour, minute);

var workingHours = {
	start: settings.startTime,
	end  : endTime
};

var casper = require("casper").create({
    verbose : true,
    logLevel: "debug"
});

casper.start();

// デバッグログ設定
casper.on('page.resource.requested', function(requestData, request) {
    require('utils').dump(requestData);
});
casper.on('remote.alert', function(msg) {
    this.echo("REMOTE-ALERT: " + msg);
});
casper.on('remote.message', function(msg) {
    this.echo("REMOTE-MESSAGE: " + msg);
});
casper.on("page.error", function(msg, trace) {
    this.echo("REMOTE-ERROR: " + msg);
    this.echo("TRACE:");
    for (var i = 0; i < trace.length; i++) {
        var trec = trace[i];
        this.echo("file: " + trec.file + " , line: " + trec.line + " , function: " + trec.function);
    }
});

casper.open("http://tr.ever-rise.co.jp/dailyReportEdit/");

/**
 * ログイン
 * 
 * @param {Object} settings 設定情報
 */
casper.then(function() {
	this.evaluate(function(settings) {
	    document.getElementsByName("emailAddress")[0].value = settings.emailAddress;
	    document.getElementsByName("password")[0].value = settings.password;
	    document.getElementsByName("doLogin")[0].click();
	}, settings);
});

/** 
 * 勤怠入力
 *
 * @param {Object} workingHours 勤務時間
 */
casper.then(function() {
	this.evaluate(function(workingHours) {
	    document.getElementsByName("str_start_time")[0].value = workingHours.start;
	    document.getElementsByName("str_end_time")[0].value = workingHours.end;
	    document.getElementsByName("db_repose_time")[0].value = "1.00";
	    document.getElementsByClassName("selectedValue")[0].click();
	    document.getElementsByClassName("itm-7")[0].click();
	    document.getElementsByClassName("btn-open")[0].click();
	    document.getElementsByName("reportadd")[0].click();
    }, workingHours);
});

casper.then(function() {
    this.capture('finished.png');
});

casper.run();