<script type="text/javascript">
/*<![CDATA[*/
if(typeof(console)=='object')
{
	console.group("ÐÑÐ´ÑÑÐ¼ÐºÐ¾Ð²Ð¸Ð¹ Ð·Ð²ÑÑ Ð¿ÑÐ¾ÑÑÐ»ÑÐ²Ð°Ð½Ð½Ñ");
	console.log(" Ð½Ð¾Ð¼ÐµÑ   Ð²ÑÑÐ¾Ð³Ð¾   ÑÐµÑÐµÐ´Ð½Ñ    Ð¼ÑÐ½      Ð¼Ð°ÐºÑ  ");
<?php
foreach($data as $index=>$entry)
{
	$proc=CJavaScript::quote($entry[0]);
	$count=sprintf('%5d',$entry[1]);
	$min=sprintf('%0.5f',$entry[2]);
	$max=sprintf('%0.5f',$entry[3]);
	$total=sprintf('%0.5f',$entry[4]);
	$average=sprintf('%0.5f',$entry[4]/$entry[1]);
	echo "\tconsole.log(\" $count  $total  $average  $min  $max    {$proc}\");\n";
}
?>
	console.groupEnd();
}
/*]]>*/
</script>
