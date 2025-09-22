<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="uk" lang="uk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>ÐÐ½ÑÑÑÑÑÐ½Ñ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÐ° ÑÐµÑÐ²ÐµÑÐ°</title>

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
<h1>ÐÐ½ÑÑÑÑÑÐ½Ñ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÐ° ÑÐµÑÐ²ÐµÑÐ°</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
ÐÑÐ¸ Ð¾Ð¿ÑÐ°ÑÑÐ²Ð°Ð½Ð½Ñ Ð²Ð°ÑÐ¾Ð³Ð¾ Ð·Ð°Ð¿Ð¸ÑÐ° Ð²Ð¸Ð½Ð¸ÐºÐ»Ð° Ð²Ð½ÑÑÑÑÑÐ½Ñ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÐ° ÑÐµÑÐ²ÐµÑÐ°.
ÐÐ¸ Ð¼Ð¾Ð¶ÐµÑÐµ Ð¿Ð¾Ð²ÑÐ´Ð¾Ð¼Ð¸ÑÐ¸ Ð¿ÑÐ¾ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÑ Ð·Ð° Ð°Ð´ÑÐµÑÐ¾Ñ <?php echo $data['admin']; ?>.
</p>
<p>
ÐÑÐºÑÑÐ¼Ð¾.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>