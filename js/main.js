var $hour=$('.hour'), $minute=$('.minute'), $second=$('.second');

setInterval(function(){
	var date=new Date();
	var hour=date.getHours(),
	minute=date.getMinutes(),
	second=date.getSeconds();
	var nowTime=(24-hour)*60*60+(00-minute)*60+(00-second);
		$hour.text(parseInt(nowTime/(60*60)));
		$minute.text(parseInt(nowTime/60%60));
	$second.text(parseInt(nowTime%60));
	},1000)
	