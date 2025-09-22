<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Î£ÏÎ¬Î»Î¼Î± <?php echo $data['code']; ?></title>

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
<h1>Î£ÏÎ¬Î»Î¼Î± <?php echo $data['code']; ?></h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
Î¥ÏÎ®ÏÎ¾Îµ ÏÎ¿ ÏÎ±ÏÎ±ÏÎ¬Î½Ï ÏÏÎ¬Î»Î¼Î± ÎºÎ±ÏÎ¬ ÏÎ·Î½ ÎµÏÎµÎ¾ÎµÏÎ³Î±ÏÎ¯Î± ÏÎ·Ï Î±Î¯ÏÎ·ÏÎ®Ï ÏÎ±Ï Î±ÏÏ ÏÎ¿ Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏÏÎ®.
</p>
<p>
ÎÎ½ ÏÎ¹ÏÏÎµÏÎµÏÎµ ÏÏÎ¹ Î±ÏÏÏ ÎµÎ¯Î½Î±Î¹ Î»Î¬Î¸Î¿Ï ÏÎ¿Ï Î´Î¹Î±ÎºÎ¿Î¼Î¹ÏÏÎ®, ÏÎ±ÏÎ±ÎºÎ±Î»Î¿ÏÎ¼Îµ ÎµÏÎ¹ÎºÎ¿Î¹Î½ÏÎ½Î®ÏÏÎµ Î¼Îµ <?php echo $data['admin']; ?>.
</p>
<p>
ÎÏÏÎ±ÏÎ¹ÏÏÎ¿ÏÎ¼Îµ.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>