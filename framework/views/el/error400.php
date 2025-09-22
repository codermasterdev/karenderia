<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>ÎÎ±Î½Î¸Î±ÏÎ¼Î­Î½Î· ÎÎ¯ÏÎ·ÏÎ·</title>
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
<h1>ÎÎ±Î½Î¸Î±ÏÎ¼Î­Î½Î· ÎÎ¯ÏÎ·ÏÎ·</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
ÎÏÎ±Î½ Î±Î´ÏÎ½Î±ÏÎ· Î· Î±Î½Î±Î³Î½ÏÏÎ¹ÏÎ· ÏÎ·Ï Î±Î¯ÏÎ·ÏÎ·Ï Î±ÏÏ ÏÎ¿ Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏÏÎ® Î»ÏÎ³Ï Î»Î±Î½Î¸Î±ÏÎ¼Î­Î½Î·Ï ÏÏÎ½ÏÎ±Î¾Î·Ï.
ÎÎ·Î½ ÎµÏÎ±Î½Î±Î»Î¬Î²ÎµÏÎµ ÏÎ·Î½ Î±Î¯ÏÎ·ÏÎ· ÏÏÏÎ¯Ï ÏÏÏÏÎ± Î½Î± ÏÎ·Î½ ÏÏÎ¿ÏÎ¿ÏÎ¿Î¹Î®ÏÎµÏÎµ.
</p>
<p>
ÎÎ½ ÏÎ¹ÏÏÎµÏÎµÏÎµ ÏÏÎ¹ Î±ÏÏÏ ÎµÎ¯Î½Î±Î¹ Î»Î¬Î¸Î¿Ï ÏÎ¿Ï Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏÏÎ®, ÏÎ±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÏÎ¹ÎºÎ¿Î¹Î½ÏÎ½Î®ÏÏÎµ Î¼Îµ <?php echo $data['admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>