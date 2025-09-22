<script type="text/javascript">
/*<![CDATA[*/
if(typeof(console)=='object')
{
	console.group("ÐÐ±Ð¾Ð±ÑÐµÐ½ Ð´Ð¾ÐºÐ»Ð°Ð´ Ð¾Ñ Ð¿ÑÐ¾ÑÐ¸Ð»Ð¸ÑÐ°Ð½ÐµÑÐ¾");
<?php
foreach($data as $index=>$entry)
{
	list($proc,$time,$level)=$entry;
	$proc=CJavaScript::quote($proc);
	$time=sprintf('%0.5f',$time);
	$spaces=str_repeat(' ',$level*8);
	echo "\tconsole.log(\"[$time]{$spaces}{$proc}\");\n";
}
?>
	console.groupEnd();
}
/*]]>*/
</script>
