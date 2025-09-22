<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Arabic Text ArStandard</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />
</head>

<body>

<div class="Paragraph">
<h2>Arabic Text Standardize:</h2>
<p align="justified">Standardize Arabic text just like rules followed in magazines and newspapers like 
spaces before and after punctuations, brackets and units etc ...</p>
</div><br />

<div class="Paragraph" dir="rtl">
<h2 dir="ltr" id="example-1">
<a href="#example-1" class="anchor"><img src="./images/link_icon.png" width="16" border="0"></a>Example Output 1:</h2>
<?php
error_reporting(E_STRICT);

/*
  // Autoload files using Composer autoload
  require_once __DIR__ . '/../vendor/autoload.php';
*/

    require '../src/Arabic.php';
    $Arabic = new \ArPHP\I18N\Arabic();

    $content = <<<END
ÙØ°Ø§ ÙØµ Ø¹Ø±Ø¨Ù Ø Ù ÙÙÙ Ø¹ÙØ§ÙØ§Øª ØªØ±ÙÙÙ Ø¨Ø­Ø§Ø¬Ø© Ø¥ÙÙ Ø¶Ø¨Ø· Ù ÙØ¹Ø§ÙØ±Ø© !Ù ÙØ°ÙÙ ÙØµÙØµ( Ø¨ÙÙ 
Ø£ÙÙØ§Ø³ )Ø£Ù Ø­ØªÙ ÙØ¤Ø·Ø±Ø©"Ø¨Ø¥Ø´Ø§Ø±Ø§Øª Ø¥ÙØªØ¨Ø§Ø³ "Ø£Ù- Ø¹ÙØ§ÙØ§Øª Ø¥Ø¹ØªØ±Ø§Ø¶ -Ø§ÙØ®......
<br>
ÙØ°Ø§ Ø³ØªÙÙÙ ÙØ°Ù Ø§ÙÙÙØªØ¨Ø© Ø£Ø¯Ø§Ø© Ù ÙØ³ÙÙØ© ÙÙØ¹Ø§ÙØ¬Ø© ÙØ«Ù ÙÙØ°Ø§ Ø­Ø§ÙØ§ØªØ Ø¨ÙØ§ ÙÙÙØ§ Ø§ÙÙØ§Ø­Ø¯Ø§Øª 1 
Kg Ø£Ù ÙØ«ÙØ§ MB 16 ÙØ³ÙØ§ÙØ§ Ø­ØªÙ Ø§ÙÙØ³Ø¨ Ø§ÙÙØ¤ÙØ© ÙØ«Ù 20% Ø£Ù %50 ÙÙÙØ°Ø§ ...
END;

    $str = $Arabic->standard($content);

    echo '<b>Origenal:</b>';
    echo '<p dir="rtl" align="justify">';
    echo $content . '</p>';
    
    echo '<b>Standard:</b>';
    echo '<p dir="rtl" align="justify">';
    echo $str . '</p>';
?>

</div><br />
<div class="Paragraph">
<h2>Example Code 1:</h2>
<?php
$code = <<< ENDALL
<?php
	\$Arabic = new \\ArPHP\\I18N\\Arabic();
    
    \$content = <<<END
ÙØ°Ø§ ÙØµ Ø¹Ø±Ø¨Ù Ø Ù ÙÙÙ Ø¹ÙØ§ÙØ§Øª ØªØ±ÙÙÙ Ø¨Ø­Ø§Ø¬Ø© Ø¥ÙÙ Ø¶Ø¨Ø· Ù ÙØ¹Ø§ÙØ±Ø© !Ù ÙØ°ÙÙ ÙØµÙØµ( Ø¨ÙÙ 
Ø£ÙÙØ§Ø³ )Ø£Ù Ø­ØªÙ ÙØ¤Ø·Ø±Ø©"Ø¨Ø¥Ø´Ø§Ø±Ø§Øª Ø¥ÙØªØ¨Ø§Ø³ "Ø£Ù- Ø¹ÙØ§ÙØ§Øª Ø¥Ø¹ØªØ±Ø§Ø¶ -Ø§ÙØ®......
<br>
ÙØ°Ø§ Ø³ØªÙÙÙ ÙØ°Ù Ø§ÙÙÙØªØ¨Ø© Ø£Ø¯Ø§Ø© Ù ÙØ³ÙÙØ© ÙÙØ¹Ø§ÙØ¬Ø© ÙØ«Ù ÙÙØ°Ø§ Ø­Ø§ÙØ§ØªØ Ø¨ÙØ§ ÙÙÙØ§ Ø§ÙÙØ§Ø­Ø¯Ø§Øª 1 
Kg Ø£Ù ÙØ«ÙØ§ MB 16 ÙØ³ÙØ§ÙØ§ Ø­ØªÙ Ø§ÙÙØ³Ø¨ Ø§ÙÙØ¤ÙØ© ÙØ«Ù 20% Ø£Ù %50 ÙÙÙØ°Ø§ ...
END;

    \$str = \$Arabic->standard(\$content);
    
    echo '<b>Origenal:</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$content . '</p>';
    
    echo '<b>Standard:</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$str . '</p>';
ENDALL;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_standard" target="_blank">standard</a>
</i>
</div><br />

<div class="Paragraph" dir="rtl">
<h2 dir="ltr" id="example-2">
<a href="#example-2" class="anchor"><img src="./images/link_icon.png" width="16" border="0"></a>Example Output 2:</h2>
<?php
    $content = <<<END
Ø¥Ø°Ø§ Ø±ÙÙØªÙ Ø£ÙÙ ØªÙØ­ÙØ§ Ø³ÙÙÙÙØ§Ù ÙÙÙ Ø§ÙØ£Ø°Ù
...
ÙÙ Ø¯ÙÙÙÙÙ ÙÙÙÙÙØ±Ù ÙØ¹ÙØ±ÙØ¶ÙÙÙ ØµÙÙÙÙÙÙ
<br />
ÙÙØ³ÙÙÙÙÙÙÙØ§ÙÙÙÙ ÙØ§ ØªÙØ°ÙÙØ±Ù Ø¨ÙÙÙ Ø¹ÙÙØ±ÙØ©Ù Ø§ÙØ±Ø¦Ù
...
ÙÙÙÙÙÙÙÙÙ Ø¹ÙÙØ±Ø§ØªÙ ÙÙÙÙÙØ§Ø³Ù Ø£ÙØ³ÙÙÙ
END;
    
    echo '<b>Origenal</b>';
    echo '<p dir="rtl" align="justify">';
    echo $content . '</p>';

    $str1 = $Arabic->stripHarakat($content);
    
    echo '<hr /><b>Strip All Harakat</b>';
    echo '<p dir="rtl" align="justify">';
    echo $str1 . '</p>';

    $str2 = $Arabic->stripHarakat($content, FALSE, FALSE, FALSE, FALSE);
    
    echo '<hr /><b>Strip Harakat but Tatweel, Tanwen, Shadda, and Last Harakat</b>';
    echo '<p dir="rtl" align="justify">';
    echo $str2 . '</p>';

    $str2 = $Arabic->stripHarakat($content, FALSE, TRUE, FALSE, TRUE, FALSE);
    
    echo '<hr /><b>Strip Last Harakat Only (including Tanwen)</b>';
    echo '<p dir="rtl" align="justify">';
    echo $str2 . '</p>';
?>

</div><br />
<div class="Paragraph">
<h2>Example Code 2:</h2>
<?php
$code = <<< ENDALL
<?php
	\$Arabic = new \\ArPHP\\I18N\\Arabic();
    
    \$content = <<<END
Ø¥Ø°Ø§ Ø±ÙÙØªÙ Ø£ÙÙ ØªÙØ­ÙØ§ Ø³ÙÙÙÙØ§Ù ÙÙÙ Ø§ÙØ£Ø°Ù
...
ÙÙ Ø¯ÙÙÙÙÙ ÙÙÙÙÙØ±Ù ÙØ¹ÙØ±ÙØ¶ÙÙÙ ØµÙÙÙÙÙÙ
<br />
ÙÙØ³ÙÙÙÙÙÙÙØ§ÙÙÙÙ ÙØ§ ØªÙØ°ÙÙØ±Ù Ø¨ÙÙÙ Ø¹ÙÙØ±ÙØ©Ù Ø§ÙØ±Ø¦Ù
...
ÙÙÙÙÙÙÙÙÙ Ø¹ÙÙØ±Ø§ØªÙ ÙÙÙÙÙØ§Ø³Ù Ø£ÙØ³ÙÙÙ
END;
    
    echo '<b>Origenal</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$content . '</p>';

    \$str1 = \$Arabic->stripHarakat(\$content);
    
    echo '<hr /><b>Strip All Harakat</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$str1 . '</p>';

    \$str2 = \$Arabic->stripHarakat(\$content, FALSE, FALSE, FALSE, FALSE);
    
    echo '<hr /><b>Strip Harakat but Tatweel, Tanwen, Shadda, and Last Harakat</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$str2 . '</p>';

    \$str2 = \$Arabic->stripHarakat(\$content, FALSE, TRUE, FALSE, TRUE, FALSE);
    
    echo '<hr /><b>Strip Last Harakat Only (including Tanwen)</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$str2 . '</p>';
ENDALL;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_stripHarakat" target="_blank">stripHarakat</a>
</i>
</div><br />

<div class="Paragraph" dir="rtl">
<h2 dir="ltr" id="example-3">
<a href="#example-3" class="anchor"><img src="./images/link_icon.png" width="16" border="0"></a>Example Output 3:</h2>
<?php
    $content = <<<END
ÙÙ ØªØ¹ÙÙ Ø£Ù Ø§ÙÙÙØ§Ø· ØªÙ Ø¥Ø®ØªØ±Ø§Ø¹ÙØ§ ÙÙØ¹Ø¬Ù ÙÙÙØ³ ÙÙØ¹Ø±Ø¨Ø 
Ø­ØªÙ Ø£Ù Ø§ÙØ¹Ø±Ø¨ ÙØ¯ÙÙØ§ ÙØ§ÙÙØ§ ÙØ§ ÙØ³ØªØ®Ø¯ÙÙÙ Ø§ÙÙÙØ§Ø· 
ÙØ£ÙØª ÙØ°ÙÙ ÙÙÙÙÙ Ø£Ù ØªÙØ±Ø£ ÙÙØ§Ø·Ø¹ ÙØ§ÙÙØ© Ø¨Ø¯ÙÙ ÙÙØ§Ø· ÙÙØ§ ÙØ§Ù ÙÙØ¹Ù Ø§ÙØ£Ø³ÙØ§ÙØ
ÙÙØ§ÙÙØ§ ÙÙÙÙÙÙ Ø§ÙÙÙÙØ§Øª ÙÙ Ø³ÙØ§Ù Ø§ÙØ¬ÙÙØ© 
ÙØ£Ø¨Ø³Ø· ÙØ«Ø§Ù Ø¹ÙÙ Ø°ÙÙ Ø£ÙÙ ØªÙØ±Ø£ ÙØ°Ø§ Ø§ÙÙÙØ·Ø¹ ÙÙ Ø¯ÙÙ ÙØ´Ø§ÙÙ.
END;

    echo '<b>Origenal</b>';
    echo '<p dir="rtl" align="justify">';
    echo $content . '</p>';

    echo '<hr /><b>String With No Dots Nor Hamza</b>';
    echo '<p dir="rtl" align="justify">';
    echo $Arabic->noDots($content) . '</p>';
?>
</div><br />
<div class="Paragraph">
<h2>Example Code 3:</h2>
<?php
$code = <<< ENDALL
<?php
	\$Arabic = new \\ArPHP\\I18N\\Arabic();
    
    \$content = <<<END
ÙÙ ØªØ¹ÙÙ Ø£Ù Ø§ÙÙÙØ§Ø· ØªÙ Ø¥Ø®ØªØ±Ø§Ø¹ÙØ§ ÙÙØ¹Ø¬Ù ÙÙÙØ³ ÙÙØ¹Ø±Ø¨Ø 
Ø­ØªÙ Ø£Ù Ø§ÙØ¹Ø±Ø¨ ÙØ¯ÙÙØ§ ÙØ§ÙÙØ§ ÙØ§ ÙØ³ØªØ®Ø¯ÙÙÙ Ø§ÙÙÙØ§Ø· 
ÙØ£ÙØª ÙØ°ÙÙ ÙÙÙÙÙ Ø£Ù ØªÙØ±Ø£ ÙÙØ§Ø·Ø¹ ÙØ§ÙÙØ© Ø¨Ø¯ÙÙ ÙÙØ§Ø· ÙÙØ§ ÙØ§Ù ÙÙØ¹Ù Ø§ÙØ£Ø³ÙØ§ÙØ
ÙÙØ§ÙÙØ§ ÙÙÙÙÙÙ Ø§ÙÙÙÙØ§Øª ÙÙ Ø³ÙØ§Ù Ø§ÙØ¬ÙÙØ© 
ÙØ£Ø¨Ø³Ø· ÙØ«Ø§Ù Ø¹ÙÙ Ø°ÙÙ Ø£ÙÙ ØªÙØ±Ø£ ÙØ°Ø§ Ø§ÙÙÙØ·Ø¹ ÙÙ Ø¯ÙÙ ÙØ´Ø§ÙÙ.
END;

    echo '<b>Origenal</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$content . '</p>';

    echo '<hr /><b>String With No Dots Nor Hamza</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$Arabic->noDots(\$content) . '</p>';
ENDALL;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_noDots" target="_blank">noDots</a>
</i>
</div><br />

<div class="Paragraph" dir="rtl">
<h2 dir="ltr" id="example-4">
<a href="#example-4" class="anchor"><img src="./images/link_icon.png" width="16" border="0"></a>Example Output 4:</h2>
<?php
    $text = 'Ø¢Ø³ÙÙÙÙÙØ©Ù ÙØ§ ØªÙÙÙØ¨ÙÙØ¤Ù 456';

    $Arabic->setNorm('stripTatweel', true)
           ->setNorm('stripTanween', true)
           ->setNorm('stripShadda', true)
           ->setNorm('stripLastHarakat', true)
           ->setNorm('stripWordHarakat', true)
           ->setNorm('normaliseLamAlef', true)
           ->setNorm('normaliseAlef', true)
           ->setNorm('normaliseHamza', true)
           ->setNorm('normaliseTaa', true);
    
    # you can also use all form like the following example
    # $Arabic->setNorm('all', true)->setNorm('normaliseHamza', false)->setNorm('normaliseTaa', false);

    echo '<b>Origenal Text</b>';
    echo '<p dir="rtl" align="justify">';
    echo $text . '</p>';

    echo '<hr /><b>Normalized Text</b>';
    echo '<p dir="rtl" align="justify">';
    echo $Arabic->arNormalizeText($text) . '<br/>';
    echo $Arabic->arNormalizeText($text, 'Hindu') . '</p>';
?>
</div><br />
<div class="Paragraph">
<h2>Example Code 4:</h2>
<?php
$code = <<< ENDALL
<?php
	\$Arabic = new \\ArPHP\\I18N\\Arabic();
    
    \$text = 'Ø¢Ø³ÙÙÙÙÙØ©Ù ÙØ§ ØªÙÙÙØ¨ÙÙØ¤Ù 456';

    \$Arabic->setNorm('stripTatweel', true)
           ->setNorm('stripTanween', true)
           ->setNorm('stripShadda', true)
           ->setNorm('stripLastHarakat', true)
           ->setNorm('stripWordHarakat', true)
           ->setNorm('normaliseLamAlef', true)
           ->setNorm('normaliseAlef', true)
           ->setNorm('normaliseHamza', true)
           ->setNorm('normaliseTaa', true);

    # you can also use all form like the following example
    # \$Arabic->setNorm('all', true)->setNorm('normaliseHamza', false)->setNorm('normaliseTaa', false);

    echo '<b>Origenal Text</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$text . '</p>';

    echo '<hr /><b>Normalized Text</b>';
    echo '<p dir="rtl" align="justify">';
    echo \$Arabic->arNormalizeText(\$text) . '<br/>';
    echo \$Arabic->arNormalizeText(\$text, 'Hindu') . '</p>';    
ENDALL;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_setNorm" target="_blank">setNorm</a>,
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_arNormalizeText" target="_blank">arNormalizeText</a>
</i>
</div>

<footer><i><a href="https://github.com/khaled-alshamaa/ar-php">Ar-PHP</a>, an open-source library for website developers to process Arabic content</i></footer>
</body>
</html>
