<script type="text/javascript">
/*<![CDATA[*/
if(typeof(console)=='object')
{
	console.group("ç¨åºæ¦è¦åæ - æ¥åæ¦è¿°");
	console.log("  æ°é    æ»è®¡     å¹³å    æå°     æå¤§   ");
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
