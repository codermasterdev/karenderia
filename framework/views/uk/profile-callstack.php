<!-- start profiling callstack -->
<table class="yiiLog" width="100%" cellpadding="2" style="border-spacing:1px;font:11px Verdana, Arial, Helvetica, sans-serif;background:#EEEEEE;color:#666666;">
	<tr>
		<th style="background:black;color:white;" colspan="2">
			ÐÐ²ÑÑ Ð¿ÑÐ¾ÑÑÐ»ÑÐ²Ð°Ð½Ð½Ñ ÑÑÐµÐºÑ Ð²Ð¸ÐºÐ»Ð¸ÐºÑÐ²
		</th>
	</tr>
	<tr style="background-color: #ccc;">
	    <th>ÐÑÐ¾ÑÐµÐ´ÑÑÐ°</th>
		<th>Ð§Ð°Ñ (Ñ)</th>
	</tr>
<?php
foreach($data as $index=>$entry)
{
	$color=($index%2)?'#F5F5F5':'#FFFFFF';
	list($proc,$time,$level)=$entry;
	$proc=CHtml::encode($proc);
	$time=sprintf('%0.5f',$time);
	$spaces=str_repeat('&nbsp;',$level*8);

	echo <<<EOD
	<tr style="background:{$color}">
		<td>{$spaces}{$proc}</td>
		<td align="center">{$time}</td>
	</tr>
EOD;
}
?>
</table>
<!-- end of profiling callstack -->