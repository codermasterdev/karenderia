ï»¿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Identify Arabic Text Segments</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
</head>

<body>

<div class="Paragraph">
<h2>Arabic Segments Identifier:</h2>
<p align="justified">This method will identify Arabic text in a given UTF-8 multi-language document 
and return an array of start and end positions for Arabic text segments. Understanding the language 
and encoding of a given document is an essential step in working with unstructured multilingual text. 
Without this basic knowledge, applications such as information retrieval and text mining cannot 
accurately process data, and important information may be completely missed or misrouted.</p>

<p align="justified">Any application that works with Arabic in multiple languages documents can 
benefit from this functionality. Applications can use it to take a fully automated approach to 
process Arabic text by quickly and accurately determining Arabic text segments within multiple 
languages document.</p>
</div><br />

<div class="Paragraph">
<h2 dir="ltr" id="example-1">
<a href="#example-1" class="anchor"><img src="./images/link_icon.png" width="16" border="0"></a>Example Output 1:</h2>
<?php

error_reporting(E_STRICT);

$html = <<< END
<p> <big><big><b> Peace &nbsp; <big>Ø³ÙØ§Ù</big> &nbsp; ×©××× &nbsp; HasÃ®tÃ® &nbsp;
à¤¶à¤¾à¤¨à¥à¤¤à¤¿&nbsp; BarÄ±Å &nbsp; åå¹³&nbsp; ÐÐ¸Ñ </b></big></big> </p><dl>
<dt><b>English:</b>

</dt><dd><big><i>Say <i>Peace</i> in all languages!</i></big>

The people of the world prefer peace to war and they deserve to have it.
Bombs are not needed to solve international problems when they can be solved
just as well with respect and communication.  The Internet Internationalization
(I18N) community, which values diversity and human life everywhere, offers
"Peace" in many languages as a small step in this direction.

<p>

</p></dd><dt><b>Arabic: ÙØµ Ø¹Ø±Ø¨Ù</b>

</dt><dd dir="rtl" align="right" lang="ar"><big>Ø£ÙØ·ÙÙØ§ Ø³ÙØ§Ù Ø¨ÙÙ
Ø§ÙÙØºØ§Øª!</big>
ÙÙ Ø´Ø¹ÙØ¨ Ø§ÙØ¹Ø§ÙÙ ØªÙØ¶Ù Ø§ÙØ³ÙØ§Ù Ø¹ÙÙ Ø§ÙØ­Ø±Ø¨ ÙÙÙÙØ§ ØªØ³ØªØ­Ù Ø£Ù ØªÙØ¹Ù Ø¨Ù.
Ø¥Ù Ø§ÙÙÙØ§Ø¨Ù ÙØ§ ØªØ­Ù ÙØ´Ø§ÙÙ Ø§ÙØ¹Ø§ÙÙ ÙÙØªÙ ØªØ­ÙÙÙ Ø°ÙÙ ÙÙØ· Ø¨Ø§ÙØ§Ø­ØªØ±Ø§Ù
ÙØ§ÙØªÙØ§ØµÙ.
ÙØ¬ÙÙØ¹Ø© ØªØ¯ÙÙÙ Ø§ÙØ¥ÙØªØ±ÙØª <span dir="ltr">(I18N)</span> Ø ÙØ§ÙØªÙ ØªØ£Ø®Ø° Ø¨Ø¹ÙÙ
Ø§ÙØªÙØ¯ÙØ± Ø§ÙØ§Ø®ØªÙØ§ÙØ§Øª Ø§ÙØ«ÙØ§ÙÙØ© ÙØ§ÙØ¹Ø§Ø¯Ø§Øª Ø§ÙØ­ÙØ§ØªÙØ© 
Ø¨ÙÙ Ø§ÙØ´Ø¹ÙØ¨Ø ÙØ¥ÙÙØ§ ØªÙØ¯Ù "Ø§ÙØ³ÙØ§Ù" Ø¨ÙØºØ§Øª ÙØ«ÙØ±Ø©Ø ÙØ®Ø·ÙØ© ÙØªÙØ§Ø¶Ø¹Ø© ÙÙ ÙØ°Ø§
Ø§ÙØ§ØªØ¬Ø§Ù.</dd>    

<p>

</p><dt><b>Hebrew:</b>

</dt><dd dir="rtl" align="right" lang="he"><big>×××¨× "×©×××" ××× ××©×¤××ª!</big> ×× ×©× ××¢××× ××¢×××¤×× ××ª ××©××× ×¢×-×¤× × ×××××× ×××
×¨××××× ××. ××× ×¦××¨× ××¤×¦×¦××ª ××× ××¤×ª××¨ ××¢×××ª ×××-×××××××ª, ×¨×§ ×××××
×××××××¨××ª. ×§××××ª ××× ××× ×××× ××¨× × <span dir="ltr">(I18N)</span>, ××©×¨ ×××§××¨× ×¨×-××× ×××ª ×××× ×××
××× ××§××, ×××©××× ×× ×"×©×××" ××©×¤××ª ×¨×××ª ××¦×¢× ×§×× ×××××× ××.</dd>
</dl>

<hr>
<p> <b>Some Authors</b><b>:</b> </p>
<dl>
  <ul>
    <li>Frank da&nbsp;Cruz, New York City (USA) </li>
    <li>Marco Cimarosti, Milano (Italy) </li>
    <li>Michael Everson, Dublin (Ireland) </li>
    <li><span dir="rtl">ÙØ±ÙØ¯ Ø¹Ø¯ÙÙ</span> / Farid Adly,<br>
      Editor in Chief, Italian-Arab News Agency ANBAMED<br>
      (Notizie dal Mediterraneo - <span dir="rtl">Ø£ÙØ¨Ø§Ø¡ Ø§ÙØ¨Ø­Ø± Ø§ÙÙØªÙØ³Ø·</span>), 
      Acquedolci (Italy) </li>
  </ul>
  <p></p>
</dl>
END;

require '../src/Arabic.php';
$Arabic = new \ArPHP\I18N\Arabic();

$p = $Arabic->arIdentify($html);

for ($i = count($p)-1; $i >= 0; $i-=2) {
    $arStr   = substr($html, $p[$i-1], $p[$i] - $p[$i-1]);
    $replace = '<mark>' . $arStr . '</mark>';
    $html    = substr_replace($html, $replace, $p[$i-1], $p[$i] - $p[$i-1]);
}

echo $html;

?>
</div><br />
<div class="Paragraph" dir="ltr">
<h2>Example Code 1:</h2>
<?php
$code = <<< END
<?php
    require '../src/arabic.php';
    \$Arabic = new \ArPHP\I18N\Arabic();

    \$p = \$Arabic->arIdentify(\$html);

    for (\$i = count(\$p)-1; \$i >= 0; \$i-=2) {
        \$arStr   = substr(\$html, \$p[\$i-1], \$p[\$i] - \$p[\$i-1]);
        \$replace = '<mark>' . \$arStr . '</mark>';
        \$html    = substr_replace(\$html, \$replace, \$p[\$i-1], \$p[\$i] - \$p[\$i-1]);
    }

    echo \$html;
END;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_arIdentify" target="_blank">arIdentify</a>
</i>
</div>
<footer><i><a href="https://github.com/khaled-alshamaa/ar-php">Ar-PHP</a>, an open-source library for website developers to process Arabic content</i></footer>
</body>
</html>
