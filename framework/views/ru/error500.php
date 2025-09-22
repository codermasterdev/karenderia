<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>ÐÐ½ÑÑÑÐµÐ½Ð½ÑÑ Ð¾ÑÐ¸Ð±ÐºÐ° ÑÐµÑÐ²ÐµÑÐ°</title>

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
<h1>ÐÐ½ÑÑÑÐµÐ½Ð½ÑÑ Ð¾ÑÐ¸Ð±ÐºÐ° ÑÐµÑÐ²ÐµÑÐ°</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
Ð ÑÐ¾Ð´Ðµ Ð¾Ð±ÑÐ°Ð±Ð¾ÑÐºÐ¸ Ð²Ð°ÑÐµÐ³Ð¾ Ð·Ð°Ð¿ÑÐ¾ÑÐ° Ð¿ÑÐ¾Ð¸Ð·Ð¾ÑÐ»Ð° Ð²Ð½ÑÑÑÐµÐ½Ð½ÑÑ Ð¾ÑÐ¸Ð±ÐºÐ° ÑÐµÑÐ²ÐµÑÐ°.
ÐÑ Ð¼Ð¾Ð¶ÐµÑÐµ ÑÐ¾Ð¾Ð±ÑÐ¸ÑÑ Ð¾Ð± Ð¾ÑÐ¸Ð±ÐºÐµ Ð¿Ð¾ Ð°Ð´ÑÐµÑÑ <?php echo $data['admin']; ?>.
</p>
<p>
Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>