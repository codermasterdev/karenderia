<script type="text/javascript">
/*<![CDATA[*/
if(typeof(console)=='object')
{
	console.group("ÙÙØ®Øµ ØªÙØ±ÙØ± Ø§ÙØªÙÙÙØ·");
	console.log(" Ø¹Ø¯Ø¯   ÙØ¬ÙÙØ¹   ÙØ¹Ø¯Ù    Ø£Ø¯ÙÙ      Ø£Ø¹ÙÙ   ");
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
