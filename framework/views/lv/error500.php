<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="lv" lang="lv">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>Servera iekÅ¡Äja kÄ¼Å«da</title>

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
<h1>Servera iekÅ¡Äja kÄ¼Å«da</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
Izpildot JÅ«su pieprasÄ«jumu, serverim radÄs iekÅ¡Äja kÄ¼Å«da.
LÅ«dzu, sazinieties ar <?php echo $data['admin']; ?> un ziÅojiet par Å¡o problÄmu.
</p>
<p>
Paldies!
</p>
<div class="version">
<?php echo date('d.m.Y H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>