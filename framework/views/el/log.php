<!-- start log messages -->
<table class="yiiLog" width="100%" cellpadding="2" style="border-spacing:1px;font:11px Verdana, Arial, Helvetica, sans-serif;background:#EEEEEE;color:#666666;">
	<tr>
		<th style="background:black;color:white;" colspan="5">
			ÎÎ¼ÎµÏÎ¿Î»ÏÎ³Î¹Î¿ ÎµÏÎ±ÏÎ¼Î¿Î³Î®Ï
		</th>
	</tr>
	<tr style="background-color: #ccc;">
	    <th style="width:120px">Î§ÏÎ¿Î½Î¹ÎºÎ® ÎµÏÎ¹ÎºÎ­ÏÎ±</th>
		<th>ÎÏÎ¯ÏÎµÎ´Î¿</th>
		<th>ÎÎ±ÏÎ·Î³Î¿ÏÎ¯Î±</th>
		<th>ÎÎ®Î½ÏÎ¼Î±</th>
	</tr>
<?php
$colors=array(
  CLogger::LEVEL_PROFILE=>'#DFFFE0',
  CLogger::LEVEL_INFO=>'#FFFFDF',
  CLogger::LEVEL_WARNING=>'#FFDFE5',
  CLogger::LEVEL_ERROR=>'#FFC0CB',
);
foreach($data as $index=>$log)
{
  $color=($index%2)?'#F5F5F5':'#FFFFFF';
  if(isset($colors[$log[1]]))
    $color=$colors[$log[1]];
  $message='<pre>'.CHtml::encode(wordwrap($log[0])).'</pre>';
  $time=date('H:i:s.',(int)$log[3]).sprintf('%06d',(int)(($log[3]-(int)$log[3])*1000000));

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