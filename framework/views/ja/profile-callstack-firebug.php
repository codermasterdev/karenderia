<script type="text/javascript">
/*<![CDATA[*/
if(typeof(console)=='object')
{
	console.group("ãã­ãã¡ã¤ãªã³ã°ã³ã¼ã«ã¹ã¿ãã¯ã¬ãã¼ã");
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