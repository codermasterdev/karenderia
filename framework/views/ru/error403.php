<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ru" lang="ru">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>ÐÑÐ¸Ð±ÐºÐ° Ð°Ð²ÑÐ¾ÑÐ¸Ð·Ð°ÑÐ¸Ð¸</title>
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
<h1>ÐÑÐ¸Ð±ÐºÐ° Ð°Ð²ÑÐ¾ÑÐ¸Ð·Ð°ÑÐ¸Ð¸</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
Ð£ Ð²Ð°Ñ Ð½ÐµÐ´Ð¾ÑÑÐ°ÑÐ¾ÑÐ½Ð¾ Ð¿ÑÐ°Ð² Ð´Ð»Ñ Ð´Ð¾ÑÑÑÐ¿Ð° Ðº Ð·Ð°Ð¿ÑÐ¾ÑÐµÐ½Ð½Ð¾Ð¹ ÑÑÑÐ°Ð½Ð¸ÑÐµ.
</p>
<p>
ÐÑÐ»Ð¸ Ð²Ñ ÑÑÐ¸ÑÐ°ÐµÑÐµ, ÑÑÐ¾ ÑÑÐ¾ Ð¾ÑÐ¸Ð±ÐºÐ° Ð½Ð°ÑÑÑÐ¾Ð¹ÐºÐ¸ ÑÐµÑÐ²ÐµÑÐ°, Ð¾Ð±ÑÐ°ÑÐ¸ÑÐµÑÑ Ð¿Ð¾ Ð°Ð´ÑÐµÑÑ <?php echo $data['admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>