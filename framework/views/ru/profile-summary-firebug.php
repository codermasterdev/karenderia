<script type="text/javascript">
/*<![CDATA[*/
if(typeof(console)=='object')
{
	console.group("ÐÐ±ÑÐ¸Ð¹ Ð¾ÑÑÐµÑ");
	console.log(" Ð½Ð¾Ð¼ÐµÑ   Ð²ÑÐµÐ³Ð¾   ÑÑÐµÐ´Ð½ÐµÐµ    Ð¼Ð¸Ð½      Ð¼Ð°ÐºÑ  ");
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
