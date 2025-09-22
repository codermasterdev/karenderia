<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ar" lang="ar">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Ø·ÙØ¨ ØºÙØ± ØµØ§ÙØ­</title>
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
<h1>Ø·ÙØ¨ ØºÙØ± ØµØ§ÙØ­</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
Ø§ÙØ·ÙØ¨ ØºÙØ± ÙÙÙÙÙ ÙÙ ÙØ¨Ù Ø§ÙÙÙÙÙ Ø¨Ø³Ø¨Ø¨ ØªØ´ÙÙØ© ÙÙ Ø§ÙØµÙØºØ©.
Ø§ÙØ±Ø¬Ø§Ø¡ Ø¹Ø¯Ù Ø¥Ø¹Ø§Ø¯Ø© Ø§ÙØ·ÙØ¨ Ø¥ÙØ§ Ø¨Ø¹Ø¯ ØªØµØ­ÙØ­Ø©.
</p>
<p>
Ø§Ø°Ø§ ÙÙØª ØªØ¹ØªÙØ¯ Ø§Ù ÙØ°Ø§ Ø§ÙØ®Ø·Ø£ Ø­Ø¯Ø« ÙÙ ÙÙÙÙ Ø§ÙÙÙØ¨Ø Ø§ÙØ±Ø¬Ø§Ø¡ Ø§ÙØ§ØªØµØ§Ù <?php echo $data['admin']; ?>.
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>