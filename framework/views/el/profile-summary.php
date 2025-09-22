<!-- start profiling summary -->
<table class="yiiLog" width="100%" cellpadding="2" style="border-spacing:1px;font:11px Verdana, Arial, Helvetica, sans-serif;background:#EEEEEE;color:#666666;">
	<tr>
		<th style="background:black;color:white;" colspan="6">
			ÎÎ½Î±ÏÎ¿ÏÎ¬ Î ÎµÏÎ¯Î»Î·ÏÎ·Ï Î ÏÎ¿ÏÎ¯Î»
			(Î§ÏÏÎ½Î¿Ï: <?php echo sprintf('%0.5f',Yii::getLogger()->getExecutionTime()); ?>s,
			ÎÎ½Î®Î¼Î·: <?php echo number_format(Yii::getLogger()->getMemoryUsage()/1024); ?>KB)
		</th>
	</tr>
	<tr style="background-color: #ccc;">
	    <th>ÎÎ¹Î±Î´Î¹ÎºÎ±ÏÎ¯Î±</th>
		<th>ÎÏÎ¹Î¸Î¼ÏÏ</th>
		<th>Î£ÏÎ½Î¿Î»Î¿ (Î´ÎµÏÏ.)</th>
		<th>ÎÎ­ÏÎ· ÏÎ¹Î¼Î® (Î´ÎµÏÏ.)</th>
		<th>ÎÎ»Î¬Ï. (Î´ÎµÏÏ.)</th>
		<th>ÎÎ­Î³. (Î´ÎµÏÏ.)</th>
	</tr>
<?php
foreach($data as $index=>$entry)
{
	$color=($index%2)?'#F5F5F5':'#EBF8FE';
	$proc=CHtml::encode($entry[0]);
	$min=sprintf('%0.5f',$entry[2]);
	$max=sprintf('%0.5f',$entry[3]);
	$total=sprintf('%0.5f',$entry[4]);
	$average=sprintf('%0.5f',$entry[4]/$entry[1]);

	echo <<<EOD
	<tr style="background:{$color}">
		<td>{$proc}</td>
		<td align="center">{$entry[1]}</td>
		<td align="center">{$total}</td>
		<td align="center">{$average}</td>
		<td align="center">{$min}</td>
		<td align="center">{$max}</td>
	</tr>
EOD;
}
?>
</table>
<!-- end of profiling summary -->