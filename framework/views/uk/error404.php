<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="uk" lang="uk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Ð¡ÑÐ¾ÑÑÐ½ÐºÐ° Ð½Ðµ Ð·Ð½Ð°Ð¹Ð´ÐµÐ½Ð°</title>
<style type="text/css">
/*<![CDATA[*/
body {font-family:"Verdana";font-weight:normal;color:black;background-color:white;}
h1 { font-family:"Verdana";font-weight:normal;font-size:18pt;color:red }
h2 { font-family:"Verdana";font-weight:normal;font-size:14pt;color:maroon }
h3 {font-family:"Verdana";font-weight:bold;font-size:11pt}
p {font-family:"Verdana";font-weight:normal;color:black;font-size:9pt;margin-top: -5px}
.version {color: gray;font-size:8pt;border-top:1px solid #aaaaaa;}
/*]]>*/
</style>
</head>
<body>
<h1>Ð¡ÑÐ¾ÑÑÐ½ÐºÐ° Ð½Ðµ Ð·Ð½Ð°Ð¹Ð´ÐµÐ½Ð°</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
ÐÐ°Ð¿Ð¸ÑÐ°Ð½Ð° Ð²Ð°Ð¼Ð¸ ÑÑÐ¾ÑÑÐ½ÐºÐ° Ð½Ðµ Ð·Ð½Ð°Ð¹Ð´ÐµÐ½Ð° Ð½Ð° ÑÐµÑÐ²ÐµÑÑ.
Ð¯ÐºÑÐ¾ Ð²Ð¸ Ð²Ð²ÐµÐ»Ð¸ Ð°Ð´ÑÐµÑÑ ÑÑÐ¾ÑÑÐ½ÐºÐ¸ Ð²ÑÑÑÐ½Ñ, Ð±ÑÐ´Ñ Ð»Ð°ÑÐºÐ°, Ð¿ÐµÑÐµÐ²ÑÑÑÐµ Ð¿ÑÐ°Ð²Ð¸Ð»ÑÐ½ÑÑÑÑ ÑÑ Ð½Ð°Ð¿Ð¸ÑÐ°Ð½Ð½Ñ Ñ Ð¿Ð¾Ð²ÑÐ¾ÑÑÑÑ ÑÐ¿ÑÐ¾Ð±Ñ.
</p>
<p>
Ð¯ÐºÑÐ¾ Ð²Ð¸ Ð²Ð²Ð°Ð¶Ð°ÑÑÐµ, ÑÐ¾ ÑÐµ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÐ° Ð½Ð°Ð»Ð°ÑÑÑÐ²Ð°Ð½Ð½Ñ ÑÐµÑÐ²ÐµÑÐ°, Ð·Ð²ÐµÑÐ½ÑÑÑÑÑ Ð·Ð° Ð°Ð´ÑÐµÑÐ¾Ñ <?php echo $data['admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>