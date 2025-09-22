<!DOCTYPE html PUBLIC
	"-//W3C//DTD XHTML 1.0 Transitional//EN"
	"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ja" lang="ja">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<title>403 ç¦æ­¢</title>
<style type="text/css">
/*<![CDATA[*/
body {font-family:Verdana, 'ã¡ã¤ãªãª', Meiryo, 'ï¼­ï¼³ ï¼°ã´ã·ãã¯', 'ãã©ã®ãè§ã´ Pro W3', 'Hiragino Kaku Gothic ProN', sans-serif; font-weight:normal; color:black; background-color:white;}
h1 {font-weight:normal;font-size:18pt;color:red }
h2 {font-weight:normal;font-size:14pt;color:maroon }
h3 {font-weight:bold;font-size:11pt}
p {font-weight:normal;color:black;font-size:9pt;margin-top: -5px}
.version {color: gray;font-size:8pt;border-top:1px solid #aaaaaa;}
/*]]>*/
</style>
</head>
<body>
<h1>403 ç¦æ­¢</h1>
<h2><?php echo nl2br(CHtml::encode($data['message'])); ?></h2>
<p>
ããªãã¯ãã®ãã¼ã¸ãã¢ã¯ã»ã¹ããæ­£å½ãªè¨±å¯ãå¾ã¦ãã¾ããã
</p>
<p>
ããããµã¼ãã®ä¸å·åã§ããã¨æãããå ´åã¯ã<?php echo $data['admin']; ?>ã«ãé£çµ¡ãã ããã
</p>
<div class="version">
<?php echo date('Y-m-d H:i:s',$data['time']) .' '. $data['version']; ?>
</div>
</body>
</html>