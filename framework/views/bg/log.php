<!-- start log messages -->
<table width="100%" cellpadding="2" style="border-spacing:1px;font:11px Verdana, Arial, Helvetica, sans-serif;background:#EEEEEE;color:#666666;">
	<tr>
		<th style="background:black;color:white;" colspan="5">
			ÐÐ½ÐµÐ²Ð½Ð¸Ðº Ð½Ð° Ð¿ÑÐ¸Ð»Ð¾Ð¶ÐµÐ½Ð¸ÐµÑÐ¾
		</th>
	</tr>
	<tr style="background-color: #ccc;">
	  <th style="width:120px">ÐÑÐµÐ¼Ðµ</th>
		<th>ÐÐ¸Ð²Ð¾</th>
		<th>ÐÐ°ÑÐµÐ³Ð¾ÑÐ¸Ñ</th>
		<th>Ð¡ÑÐ¾Ð±ÑÐµÐ½Ð¸Ðµ</th>
	</tr>
<?php
foreach($data as $index=>$log)
{
	$color=($index%2)?'#F5F5F5':'#EBF8FE';
	$message='<pre>'.CHtml::encode(wordwrap($log[0])).'</pre>';
	$time=date('H:i:s.',(int)$log[3]).(int)(($log[3]-(int)$log[3])*1000000);

	echo <<<EOD
	<tr style="background:{$color}">
		<td align="center">{$time}</td>
		<td>{$log[1]}</td>
		<td>{$log[2]}</td>
		<td>{$message}</td>
	</tr>
EOD;
}
?>
</table>
<!-- end of log messages -->
