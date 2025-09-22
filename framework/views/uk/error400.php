<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="uk" lang="uk">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>ÐÐ¾Ð¼Ð¸Ð»ÐºÐ° Ð² Ð·Ð°Ð¿Ð¸ÑÑ</title>
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
<h1>ÐÐ¾Ð¼Ð¸Ð»ÐºÐ° Ð² Ð·Ð°Ð¿Ð¸ÑÑ</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
Ð Ð·Ð°Ð¿Ð¸ÑÑ Ð²Ð¸ÑÐ²Ð»ÐµÐ½Ð° ÑÐ¸Ð½ÑÐ°ÐºÑÐ¸ÑÐ½Ð° Ð¿Ð¾Ð¼Ð¸Ð»ÐºÐ°, ÑÐµÑÐµÐ· ÑÐºÑ ÑÐµÑÐ²ÐµÑ Ð½Ðµ Ð·Ð¼ÑÐ³ Ð¾Ð¿ÑÐ°ÑÑÐ²Ð°ÑÐ¸ Ð·Ð°Ð¿Ð¸Ñ.
Ð¡Ð»ÑÐ´ Ð²Ð¸Ð¿ÑÐ°Ð²Ð¸ÑÐ¸ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÑ, Ð¿ÑÑÐ»Ñ ÑÐ¾Ð³Ð¾ Ð¿Ð¾Ð²ÑÐ¾ÑÐ¸ÑÐ¸ Ð·Ð°Ð¿Ð¸Ñ.
</p>
<p>
Ð¯ÐºÑÐ¾ Ð²Ð¸ Ð²Ð²Ð°Ð¶Ð°ÑÑÐµ, ÑÐ¾ ÑÐµ Ð¿Ð¾Ð¼Ð¸Ð»ÐºÐ° Ð½Ð°Ð»Ð°ÑÑÑÐ²Ð°Ð½Ð½Ñ ÑÐµÑÐ²ÐµÑÐ°, Ð·Ð²ÐµÑÐ½ÑÑÑÑÑ Ð·Ð° Ð°Ð´ÑÐµÑÐ¾Ñ <?php echo $data['admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>