var $hour=$('.hour'), $minute=$('.minute'), $second=$('.second');
setInterval(function(){
	var date=new Date();
	var hour=date.getHours(),
	minute=date.getMinutes(),
	second=date.getSeconds();
	var nowTime=(24-hour)*60*60-minute*60-second;
	function toTime(time){
		if(time<10){
			time='0'+time;
			
		}else {
			time=time;
		}
		return time;
	}
	var nowHour=parseInt(toTime(nowTime/(60*60))),
	nowMinute=parseInt(toTime(nowTime/60%60)),
	nowSecond=parseInt(toTime(nowTime%60));
	$hour.text(toTime(nowHour));
	$minute.text(toTime(nowMinute));
	$second.text(toTime(nowSecond));
	},1000)
	