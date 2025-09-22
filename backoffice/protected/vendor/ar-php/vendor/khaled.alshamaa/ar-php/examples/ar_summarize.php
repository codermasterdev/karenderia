<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<title>Arabic Auto Summarize Class</title>
<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
<link rel="stylesheet" type="text/css" href="css/style.css" media="all" />

<style type="text/css">
.summary { background-color:#eeee80; }
</style>

</head>

<body>

<div class="Paragraph">
<h2>Arabic Auto Summarize:</h2>
<p align="justified">Determines key points by analyzing Arabic document and assigning a score to each sentence. 
Sentences that contain words used frequently in the document are given a higher score. You can then choose a 
percentage of the highest-scoring sentences to display in the summary. It works best on well-structured 
documents such as reports, articles, and scientific papers.</p>

<p align="justified">It cuts wordy copy to the bone by counting words and ranking sentences. First, it 
identifies the most common words in the document and assigns a "score" to each word, the more frequently 
a word is used, the higher the score. Then, it "averages" each sentence by adding the scores of its words 
and dividing the sum by the number of words in the sentence, the higher the average, the higher the rank 
of the sentence. It can summarize texts to specific number of sentences or percentage of the original copy.</p>

<p align="justified">We use statistical approach, with some attention apparently paid to:
<ul>
<li>Location: leading sentences of paragraph, title, introduction, and conclusion.</li>
<li>Fixed phrases: in-text summaries.</li>
<li>Frequencies of words, phrases, proper names.</li>
<li>Contextual material: query, title, headline, initial paragraph.</li>
</ul>
</p>

<p align="justified">The motivation for this class is the range of applications for key phrases:
<ul>
<li>Mini-summary: Automatic key phrase extraction can provide a quick mini-summary for a long document. 
For example, it could be a feature in a web sites; just click the summarize button when browsing a long web page.</li>
<li>Highlights: It can highlight key phrases in a long document, to facilitate skimming the document.</li>
<li>Author Assistance: Automatic key phrase extraction can help an author or editor who wants to supply a list 
of key phrases for a document. For example, the administrator of a web site might want to have a key phrase list 
at the top of each web page. The automatically extracted phrases can be a starting point for further manual 
refinement by the author or editor.</li>
<li>Text Compression: On a device with limited display capacity or limited bandwidth, key phrases can 
be a substitute for the full text. For example, a web page could be reduced for display on a Twitter post.</li>
</ul>
</p>
</div><br />

<?php
$title    = 'Ø£Ø¶Ø®Ù ØªØ¬Ø±Ø¨Ø© Ø¹ÙÙÙØ© ÙØ¯Ø±Ø§Ø³Ø© Ø¨ÙÙØ© Ø§ÙÙØ§Ø¯Ø© Ø§ÙÙØ¹ØªÙØ© Ø¨ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ±';
$contents = <<<END
ÙØ§Ù Ø¹ÙÙØ§Ø¡ ÙÙ ÙØ±ÙØ² Ø£Ø¨Ø­Ø§Ø« Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØªØ§Ø¨Ø¹ ÙÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ§Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙ Ø§ÙØ¬ÙØ¹Ø©
Ø£ÙÙÙ Ø­ÙÙÙØ§ ØªØµØ§Ø¯ÙØ§ Ø¨ÙÙ Ø¬Ø³ÙÙØ§Øª Ø¨ÙØ«Ø§ÙØ© ÙÙØ§Ø³ÙØ© ÙÙ Ø¥ÙØ¬Ø§Ø² ÙÙÙ ÙÙ Ø¨Ø±ÙØ§ÙØ¬ÙÙ ÙÙØ´Ù Ø£Ø³Ø±Ø§Ø± Ø§ÙÙÙÙ. 
ÙØ¬Ø§Ø¡ Ø§ÙØªØ·ÙØ± ÙÙ Ø§ÙØ³Ø§Ø¹Ø§Øª Ø§ÙØ£ÙÙÙ Ø¨Ø¹Ø¯ ØªØºØ°ÙØ© ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± Ø¨Ø­Ø²ÙØ© Ø£Ø´Ø¹Ø© Ø¨ÙØ§ 
Ø¬Ø³ÙÙØ§Øª Ø£ÙØ«Ø± Ø¨Ø­ÙØ§ÙÙ Ø³ØªØ© ÙÙ Ø§ÙÙØ¦Ø© ÙÙÙ ÙØ­Ø¯Ø© Ø¨Ø§ÙÙÙØ§Ø±ÙØ© ÙØ¹ Ø§ÙÙØ³ØªÙÙ Ø§ÙÙÙØ§Ø³Ù Ø§ÙØ³Ø§Ø¨Ù 
Ø§ÙØ°Ù Ø³Ø¬ÙÙ ÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ Ø§ÙØªØ§Ø¨Ø¹ ÙÙØ®ØªØ¨Ø± ÙØ±ÙÙÙØ§Ø¨ Ø§ÙØ£ÙØ±ÙÙÙ Ø§ÙØ¹Ø§Ù Ø§ÙÙØ§Ø¶Ù. 
ÙÙÙ ØªØµØ§Ø¯Ù ÙÙ Ø§ÙÙÙÙ Ø§ÙØ¯Ø§Ø¦Ø±Ù ÙÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙØ¨Ø§ÙØº Ø·ÙÙÙ 27 ÙÙÙÙÙØªØ±Ø§ ØªØ­Øª Ø§ÙØ£Ø±Ø¶ 
Ø¨Ø³Ø±Ø¹Ø© Ø£ÙÙ ÙÙ Ø³Ø±Ø¹Ø© Ø§ÙØ¶ÙØ¡ ÙØ­Ø¯Ø« ÙØ­Ø§ÙØ§Ø© ÙÙØ§ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ Ø§ÙØ°Ù ÙÙØ³Ø± Ø¨Ù Ø¹ÙÙØ§Ø¡ ÙØ´ÙØ¡ Ø§ÙÙÙÙ 
ÙØ¨Ù 13.7 ÙÙÙØ§Ø± Ø³ÙØ©. ÙÙÙÙØ§ Ø²Ø§Ø¯Øª "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ©" Ø£Ù Ø§Ø±ØªÙØ¹ Ø¹Ø¯Ø¯ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙÙØ§ Ø²Ø§Ø¯ 
Ø¹Ø¯Ø¯ Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø§ÙØªÙ ØªØ­Ø¯Ø« ÙØ²Ø§Ø¯Øª Ø£ÙØ¶Ø§ Ø§ÙÙØ§Ø¯Ø© Ø§ÙØªÙ ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ ØªØ­ÙÙÙÙØ§. 
ÙÙØ¬Ø±Ù ÙØ¹ÙÙØ§ Ø§ÙØªØ§Ø¬ ÙÙØ§ÙÙÙ ÙØ«ÙØ±Ø© ÙÙ ÙØ°Ù "Ø§ÙØ§ÙÙØ¬Ø§Ø±Ø§Øª Ø§ÙØ¹Ø¸ÙÙØ© Ø§ÙÙØµØºØ±Ø©" ÙÙÙÙØ§. 
ÙÙØ§Ù Ø±ÙÙÙ ÙÙÙØ± Ø§ÙÙØ¯ÙØ± Ø§ÙØ¹Ø§Ù ÙÙÙÙØ¸ÙØ© Ø§ÙØ§ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙØ±ÙØ§ Ø¹ÙÙ Ø§ÙØ­Ø¯ÙØ¯ 
Ø§ÙÙØ±ÙØ³ÙØ© Ø§ÙØ³ÙÙØ³Ø±ÙØ© ÙØ±Ø¨ Ø¬ÙÙÙ Ø£Ù "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ© ÙÙ Ø§ÙØ£Ø³Ø§Ø³ ÙÙØ¬Ø§Ø­ ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± 
ÙÙØ°Ø§ ÙÙØ°Ù Ø®Ø·ÙØ© ÙÙÙØ© Ø¬Ø¯Ø§"Ø ÙØ£Ø¶Ø§Ù "Ø§ÙÙØ«Ø§ÙØ© Ø§ÙØ£Ø¹ÙÙ ØªØ¹ÙÙ ÙØ²ÙØ¯Ø§ ÙÙ Ø§ÙØ¨ÙØ§ÙØ§ØªØ ÙÙØ²ÙØ¯ 
ÙÙ Ø§ÙØ¨ÙØ§ÙØ§Øª ÙØ¹ÙÙ Ø¥ÙÙØ§ÙÙØ© Ø£ÙØ¨Ø± ÙÙÙØ´Ù." ÙÙØ§Ù Ø³ÙØ±Ø¬ÙÙ Ø¨Ø±ØªÙÙÙØªØ´Ù ÙØ¯ÙØ± Ø§ÙØ£Ø¨Ø­Ø§Ø« ÙÙ Ø§ÙÙÙØ¸ÙØ© 
"ÙÙØ¬Ø¯ Ø¥Ø­Ø³Ø§Ø³ ÙÙÙÙØ³ Ø¨Ø£ÙÙØ§ Ø¹ÙÙ Ø£Ø¹ØªØ§Ø¨ ÙØ´Ù Ø¬Ø¯ÙØ¯". ÙÙÙ Ø­ÙÙ Ø²Ø§Ø¯ Ø§ÙÙÙØ²ÙØ§Ø¦ÙÙÙ ÙØ§ÙÙÙÙØ¯Ø³ÙÙ 
ÙÙ Ø§ÙÙÙØ¸ÙØ© ÙØ«Ø§ÙØ© Ø­Ø²Ù Ø§ÙØ£Ø´Ø¹Ø© Ø¹ÙÙ ÙØ¯Ù Ø§ÙØ£Ø³Ø¨ÙØ¹ Ø§ÙÙÙØµØ±Ù ÙØ§Ù Ø¬ÙÙØ³ Ø¬ÙÙÙÙ Ø§ÙÙØªØ­Ø¯Ø« Ø¨Ø§Ø³Ù Ø§ÙÙÙØ¸ÙØ© 
Ø£ÙÙÙ Ø¬ÙØ¹ÙØ§ ÙØ¹ÙÙÙØ§Øª ØªØ²ÙØ¯ Ø¹ÙÙ ÙØ§ Ø¬ÙØ¹ÙÙ Ø¹ÙÙ ÙØ¯Ù ØªØ³Ø¹Ø© Ø£Ø´ÙØ± ÙÙ Ø¹ÙÙ ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª ÙÙ 2010. 
ÙØªØ®Ø²Ù ØªÙÙ Ø§ÙÙØ¹ÙÙÙØ§Øª Ø¹ÙÙ Ø¢ÙØ§Ù ÙÙ Ø£ÙØ±Ø§Øµ Ø§ÙÙÙØ¨ÙÙØªØ±. ÙÙÙØ«Ù Ø§ÙÙØµØ§Ø¯Ù Ø§ÙØ¨Ø§ÙØºØ© ØªÙÙÙØªÙ 
Ø¹Ø´Ø±Ø© ÙÙÙØ§Ø±Ø§Øª Ø¯ÙÙØ§Ø± Ø£ÙØ¨Ø± ØªØ¬Ø±Ø¨Ø© Ø¹ÙÙÙØ© ÙÙÙØ±Ø¯Ø© ÙÙ Ø§ÙØ¹Ø§ÙÙ ÙÙØ¯ Ø¨Ø¯Ø£ ØªØ´ØºÙÙÙ ÙÙ ÙÙØ§ÙØ© 
ÙØ§Ø±Ø³ Ø¢Ø°Ø§Ø± 2010. ÙØ¨Ø¹Ø¯ Ø§ÙØ¥ØºÙØ§Ù Ø§ÙØ¯Ø§Ø¦Ù ÙÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ ÙÙ Ø§ÙØ®Ø±ÙÙ Ø§ÙÙØ§Ø¯Ù Ø³ÙØµØ¨Ø­ 
ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØµØ§Ø¯Ù Ø§ÙÙØ¨ÙØ± Ø§ÙÙØ­ÙØ¯ Ø§ÙÙÙØ¬ÙØ¯ ÙÙ Ø§ÙØ¹Ø§ÙÙ. ÙÙÙ Ø¨ÙÙ Ø£ÙØ¯Ø§Ù 
ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± ÙØ¹Ø±ÙØ© ÙØ§ Ø¥Ø°Ø§ ÙØ§Ù Ø§ÙØ¬Ø³ÙÙ Ø§ÙØ¨Ø³ÙØ· Ø§ÙÙØ¹Ø±ÙÙ Ø¨Ø¥Ø³Ù Ø¬Ø³ÙÙ ÙÙØ¬Ø² 
Ø£Ù Ø¨ÙØ²ÙÙ ÙÙØ¬Ø² ÙÙØ¬ÙØ¯ ÙØ¹ÙÙØ§. ÙÙØ­ÙÙ Ø§ÙØ¬Ø³ÙÙ Ø¥Ø³Ù Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±ÙØ·Ø§ÙÙ Ø¨ÙØªØ± ÙÙØ¬Ø² 
Ø§ÙØ°Ù ÙØ§Ù Ø£ÙÙ ÙÙ Ø§ÙØªØ±Ø¶ ÙØ¬ÙØ¯Ù ÙØ¹Ø§ÙÙ Ø£Ø¹Ø·Ù Ø§ÙÙØªÙØ© ÙÙØ¬Ø³ÙÙØ§Øª Ø¨Ø¹Ø¯ Ø§ÙØ¥ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ. 
ÙÙÙ Ø®ÙØ§Ù ÙØªØ§Ø¨Ø¹Ø© Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø¹ÙÙ Ø£Ø¬ÙØ²Ø© Ø§ÙÙÙØ¨ÙÙØªØ± ÙÙ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© 
ÙÙÙ ÙØ¹Ø§ÙÙ ÙÙ Ø£ÙØ­Ø§Ø¡ Ø§ÙØ¹Ø§ÙÙ ÙØ±ØªØ¨Ø·Ø© Ø¨ÙØ§ ÙØ£ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ Ø£ÙØ¶Ø§ Ø£Ù ÙØ¬Ø¯ÙØ§ Ø¯ÙÙÙØ§ ÙÙÙØ§ Ø¹ÙÙ 
ÙØ¬ÙØ¯ Ø§ÙÙØ§Ø¯Ø© Ø§ÙÙØ¹ØªÙØ© Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªØ´ÙÙ Ø­ÙØ§ÙÙ Ø±Ø¨Ø¹ Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙØ±Ø¨ÙØ§ Ø§ÙØ·Ø§ÙØ© Ø§ÙÙØ¹ØªÙØ© 
Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªÙØ«Ù Ø­ÙØ§ÙÙ 70 ÙÙ Ø§ÙÙØ¦Ø© ÙÙ Ø§ÙÙÙÙ. ÙÙÙÙÙ Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙÙ Ø£Ù ØªØ¬Ø§Ø±Ø¨ 
Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙØ¯ ØªÙÙÙ Ø§ÙØ¶ÙØ¡ Ø£ÙØ¶Ø§ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© Ø¨Ø§Ø²ØºØ© 
ØªØ´ÙØ± Ø¥ÙÙ Ø£Ù Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙÙ ÙØ¬Ø±Ø¯ Ø¬Ø²Ø¡ ÙÙ ÙØ¸Ø§Ù ÙØ£ÙÙØ§Ù ÙØ«ÙØ±Ø© ØºÙØ± ÙØ±Ø¦ÙØ© ÙØ¨Ø¹Ø¶ÙØ§ Ø§ÙØ¨Ø¹Ø¶ 
ÙÙØ§ ØªÙØ¬Ø¯ ÙØ³Ø§Ø¦Ù ÙÙØªÙØ§ØµÙ Ø¨ÙÙÙØ§. ÙÙØ£ÙÙÙÙ Ø£ÙØ¶Ø§ Ø£Ù ÙÙØ¯Ù ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± 
Ø§ÙØ°Ù Ø³ÙØ¨ÙÙ ÙØ¹ÙÙ Ø¹ÙÙ ÙØ¯Ù Ø¹ÙØ¯ Ø¨Ø¹Ø¯ ØªÙÙÙ ÙÙÙ ÙÙØ¯Ø© Ø¹Ø§Ù ÙÙ 2013 Ø¨Ø¹Ø¶ Ø§ÙØ¯Ø¹Ù 
ÙØ¯ÙØ§Ø¦Ù ÙØªØ¹ÙØ¨ÙØ§ Ø¨Ø§Ø­Ø«ÙÙ Ø¢Ø®Ø±ÙÙ Ø¹ÙÙ Ø£Ù Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ Ø³Ø¨ÙÙ ÙÙÙ Ø¢Ø®Ø± ÙØ¨Ù Ø§ÙØ§ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ. 
ÙØ¨Ø¹Ø¯ Ø§ÙØªÙÙÙ Ø¹Ø§Ù 2013 ÙÙØ¯Ù Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© Ø¥ÙÙ Ø²ÙØ§Ø¯Ø© 
Ø§ÙØ·Ø§ÙØ© Ø§ÙÙÙÙØ© ÙÙÙ ØªØµØ§Ø¯Ù Ø¨ÙÙ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙ Ø§ÙØ­Ø¯ Ø§ÙØ§ÙØµÙ Ø§ÙØ­Ø§ÙÙ Ø§ÙØ¨Ø§ÙØº 7 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª 
Ø¥ÙÙ 14 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª. ÙØ³ÙØ²ÙØ¯ Ø°ÙÙ Ø£ÙØ¶Ø§ ÙÙ ÙØ±ØµØ© Ø§ÙØªÙØµÙ ÙØ§ÙØªØ´Ø§ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© ÙÙÙØ§ ØªØµÙÙ 
Ø§ÙÙÙØ¸ÙØ© Ø¨Ø£ÙÙ "Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØ¬Ø¯ÙØ¯Ø©" Ø¨ÙØ§ ÙØ¯ÙØ¹ Ø§ÙÙØ¹Ø±ÙØ© ÙØªØ¬Ø§ÙØ² ÙØ§ ÙØ³ÙÙ Ø§ÙÙÙÙØ°Ø¬ Ø§ÙÙØ¹ÙØ§Ø±Ù 
Ø§ÙÙØ¹ØªÙØ¯ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±Øª Ø§ÙÙØ´ØªØ§ÙÙ ÙÙ Ø§ÙØ§Ø¦Ù Ø§ÙÙØ±Ù Ø§ÙØ¹Ø´Ø±ÙÙ.
END;

$contents = str_replace("\n", ' ', $contents);
?>

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

    $rate        = 25;
    $summary     = $Arabic->arSummary($contents, '', $rate, 1, 1);
    $highlighted = $Arabic->arSummary($contents, '', $rate, 1, 2);
    $keywords    = $Arabic->arSummaryKeywords($contents, 5);

    echo "<h3>$title:</h3>";
    echo "<h4>Ø§ÙÙÙÙØ§Øª Ø§ÙÙÙØªØ§Ø­ÙØ©</h4>$keywords";
    echo "<h4>Ø§ÙÙÙØ®Øµ</h4>$summary";
    echo "<h4>Ø§ÙÙØµ Ø§ÙÙØ§ÙÙ</h4>$highlighted";
?>
</div><br />
<div class="Paragraph">
<h2>Example Code 1:</h2>
<?php
$code = <<< ENDALL
<?php
    \$Arabic = new \\ArPHP\\I18N\\Arabic();
    
    \$rate        = 25;
    \$summary     = \$Arabic->arSummary(\$contents, '', \$rate, 1, 1);
    \$highlighted = \$Arabic->arSummary(\$contents, '', \$rate, 1, 2);
    \$keywords    = \$Arabic->arSummaryKeywords(\$contents, 5);

    echo "<h3>\$title:</h3>";
    echo "<h4>Ø§ÙÙÙÙØ§Øª Ø§ÙÙÙØªØ§Ø­ÙØ©</h4>\$keywords";
    echo "<h4>Ø§ÙÙÙØ®Øµ</h4>\$summary";
    echo "<h4>Ø§ÙÙØµ Ø§ÙÙØ§ÙÙ</h4>\$highlighted";
ENDALL;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_arSummary" target="_blank">arSummary</a>
</i>
</div><br />

<div class="Paragraph" dir="rtl">
<h2 dir="ltr" id="example-2">
<a href="#example-2" class="anchor"><img src="./images/link_icon.png" width="16" border="0"></a>Example Output 2:</h2>
<?php
    $summary     = $Arabic->arSummary($contents, 'ÙÙØ¬ÙØ²', $rate, 1, 1);
    $highlighted = $Arabic->arSummary($contents, 'ÙÙØ¬ÙØ²', $rate, 1, 2);
    
    echo "<h4>Ø§ÙÙÙØ®Øµ ÙÙ ÙÙØª ØªØ¨Ø­Ø« Ø¹Ù ÙÙÙØ© ÙÙØ¬ÙØ²</h4>$summary";
    echo "<h4>Ø§ÙÙØµ Ø§ÙÙØ§ÙÙ</h4>$highlighted";
?>
</div><br />
<div class="Paragraph">
<h2>Example Code 2:</h2>
<?php
$code = <<< ENDALL
<?php
    \$Arabic = new \\ArPHP\\I18N\\Arabic();
    
    \$rate = 25;
    \$summary = \$Arabic->arSummary(\$contents, 'ÙÙØ¬ÙØ²', \$rate, 1, 1);
    \$highlighted = \$Arabic->arSummary(\$contents, 'ÙÙØ¬ÙØ²', \$rate, 1, 2);

    echo "<h4>Ø§ÙÙÙØ®Øµ ÙÙ ÙÙØª ØªØ¨Ø­Ø« Ø¹Ù ÙÙÙØ© ÙÙØ¬ÙØ²</h4>\$summary";
    echo "<h4>Ø§ÙÙØµ Ø§ÙÙØ§ÙÙ</h4>\$highlighted";
ENDALL;

highlight_string($code);
?>
<hr/><i>Related Documentation: 
<a href="https://khaled-alshamaa.github.io/ar-php/classes/ArPHP-I18N-Arabic.html#method_arSummary" target="_blank">arSummary</a>
</i>
</div>

<footer><i><a href="https://github.com/khaled-alshamaa/ar-php">Ar-PHP</a>, an open-source library for website developers to process Arabic content</i></footer>
</body>
</html>
