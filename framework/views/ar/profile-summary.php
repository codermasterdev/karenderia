<!-- start profiling summary -->
<table class="yiiLog" width="100%" cellpadding="2" style="border-spacing:1px;font:11px Verdana, Arial, Helvetica, sans-serif;background:#EEEEEE;color:#666666;">
	<tr>
		<th style="background:black;color:white;" colspan="6">
			ÙÙØ®Øµ ØªÙØ±ÙØ± Ø§ÙØªÙÙÙØ·
			(Ø§ÙØ²ÙÙ: <?php echo sprintf('%0.5f',Yii::getLogger()->getExecutionTime()); ?>s,
			Ø§ÙØ°Ø§ÙØ±Ø©: <?php echo number_format(Yii::getLogger()->getMemoryUsage()/1024); ?>KB)
		</th>
	</tr>
	<tr style="background-color: #ccc;">
	    <th>Ø§ÙØ¥Ø¬Ø±Ø§Ø¡</th>
		<th>Ø§ÙØ¹Ø¯Ø¯</th>
		<th>Ø§ÙÙØ¬ÙÙØ¹ (Ø«)</th>
		<th>Ø§ÙÙØ¹Ø¯Ù (Ø«)</th>
		<th>Ø§ÙØ£Ø¯ÙÙ (Ø«)</th>
		<th>Ø§ÙØ£Ø¹ÙÙ (Ø«)</th>
	</tr>
<?php
foreach($data as $index=>$entry)
{
	$color=($index%2)?'#F5F5F5':'#FFFFFF';
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