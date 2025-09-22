<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°ÑÐ° Ð½Ðµ Ðµ Ð½Ð°Ð¼ÐµÑÐµÐ½Ð°</title>
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
<h1>Ð¡ÑÑÐ°Ð½Ð¸ÑÐ°ÑÐ° Ð½Ðµ Ðµ Ð½Ð°Ð¼ÐµÑÐµÐ½Ð°</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
ÐÐ¾Ð¸ÑÐºÐ°Ð½Ð°ÑÐ° ÑÑÑÐ°Ð½Ð¸ÑÐ° Ð½Ðµ Ðµ Ð½Ð°Ð¼ÐµÑÐµÐ½Ð° Ð½Ð° ÑÑÑÐ²ÑÑÐ°. ÐÐºÐ¾ ÑÑÐµ Ð²ÑÐ²ÐµÐ»Ð¸ URL ÑÑÑÐ½Ð¾, Ð¿ÑÐ¾Ð²ÐµÑÐµÑÐµ Ð´Ð°Ð»Ð¸ Ðµ Ð²ÑÐ²ÐµÐ´ÐµÐ½ ÐºÐ¾ÑÐµÐºÑÐ½Ð¾ Ð¸ Ð¾Ð¿Ð¸ÑÐ°Ð¹ÑÐµ Ð¾ÑÐ½Ð¾Ð²Ð¾.
</p>
<p>
ÐÐºÐ¾ Ð¼Ð¸ÑÐ»Ð¸ÑÐµ, ÑÐµ ÑÐ¾Ð²Ð° Ðµ Ð³ÑÐµÑÐºÐ° Ð² ÑÑÑÐ²ÑÑÐ°, Ð¼Ð¾Ð»Ñ ÑÐ²ÑÑÐ¶ÐµÑÐµ ÑÐµ Ñ Ð°Ð´Ð¼Ð¸Ð½Ð¸ÑÑÑÐ°ÑÐ¾ÑÐ° <?php echo $data['admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>
