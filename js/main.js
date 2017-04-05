var $hour=$('.hour'), $minute=$('.minute'), $second=$('.second');
var date=new Date();
var hour=date.getHours(),
minute=date.getMinutes(),
second=date.getSeconds();
var nowTime=(24-hour)*60*60+(00-minute)*60+(00-second);
console.log(nowTime);
$hour.text(parseInt(nowTime/(60*60)));
$minute.text(parseInt(nowTime/60%60));
console.log($minute.text());
setInterval(function(){
	$second.text(parseInt(nowTime%60));
	},1000)