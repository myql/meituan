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
	
	
var $arrowTop=$('.arrow-top');	
$(window).on('scroll',function(){
	var scrollHeight=$(window).scrollTop();
	var arrowHeight=$arrowTop.offset().top;
	var windowHeight=$(window).height();
	if((scrollHeight-windowHeight)>=0)
	{
		$arrowTop.addClass('fix');
	}
	else {
		$arrowTop.removeClass('fix');
	}
})

var $line=$('.footer-version .line'),
$versionWords=$('.footer-version .version-words');
var wordsWidth=$versionWords.width();
var width=wordsWidth+30;
$line.width(($(window).width()-width)/2);
$(window).on('resize',function(){
	$line.width(($(window).width()-width)/2);
})

