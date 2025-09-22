<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>æ æ³æ¾å°ç½é¡µ</title>
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
<h1>æ æ³æ¾å°ç½é¡µ</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
æå¡å¨æ æ³æ¾å°è¯·æ±ç URL æå¯¹åºçç½é¡µ.
å¦ææ¨æ¯æå¨è¾å¥URL, è¯·æ£æ¥æ¯å¦æ¼åæ è¯¯åéè¯.
</p>
<p>
å¦ææ¨è®¤ä¸ºæ­¤éè¯¯æ¯æå¡å¨é æç,è¯·ä¸ç®¡çåèç³» <?php echo $data[ 'admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>