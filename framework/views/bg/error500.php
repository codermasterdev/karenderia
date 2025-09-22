<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>ÐÑÑÑÐµÑÐ½Ð° Ð³ÑÐµÑÐºÐ° Ð½Ð° ÑÑÑÐ²ÑÑÐ°</title>

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
<h1>ÐÑÑÑÐµÑÐ½Ð° Ð³ÑÐµÑÐºÐ° Ð½Ð° ÑÑÑÐ²ÑÑÐ°</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
ÐÑÑÑÐµÑÐ½Ð° Ð³ÑÐµÑÐºÐ°, Ð²ÑÐ·Ð½Ð¸ÐºÐ½Ð° Ð½Ð° ÑÑÑÐ²ÑÑÐ°, Ð´Ð¾ÐºÐ°ÑÐ¾ ÑÐµ Ð¾Ð¿Ð¸ÑÐ²Ð°ÑÐµ Ð´Ð° Ð¸Ð·Ð¿ÑÐ»Ð½Ð¸ Ð²Ð°ÑÐ°ÑÐ° Ð·Ð°ÑÐ²ÐºÐ°.
ÐÐ¾Ð»Ñ ÑÐ²ÑÑÐ¶ÐµÑÐµ ÑÐµ Ñ <?php echo $data['admin']; ?>, Ð·Ð° Ð´Ð° Ð´Ð¾ÐºÐ»Ð°Ð´Ð²Ð°ÑÐµ Ð¿ÑÐ¾Ð±Ð»ÐµÐ¼Ð°.
</p>
<p>
ÐÐ»Ð°Ð³Ð¾Ð´Ð°ÑÐ¸Ð¼ Ð²Ð¸.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>
