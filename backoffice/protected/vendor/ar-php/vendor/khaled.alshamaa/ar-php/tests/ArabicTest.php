<?php

namespace ArPHP\I18N\Test;

use PHPUnit\Framework\TestCase;

final class ArabicTest extends TestCase
{  
    public function testTheInternalInitializedProperties(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $status = array();
        $status[] = $Arabic->getDateMode();
        $status[] = $Arabic->getNumberFeminine();
        $status[] = $Arabic->getNumberFormat();
        $status[] = $Arabic->getNumberOrder();
        $status[] = $Arabic->getSoundexLen();
        $status[] = $Arabic->getSoundexLang();
        $status[] = $Arabic->getSoundexCode();
        $status[] = $Arabic->getQueryMode();
        
        $Arabic->setQueryStrFields('abc,xyz');
        $status[] = $Arabic->getQueryArrFields();
        
        $Arabic->setQueryArrFields(['foo','bar']);
        $status[] = $Arabic->getQueryStrFields();

        $this->assertEquals(
            [1, 1, 1, 1, 4, 'en', 'soundex', 0, ['abc','xyz'], 'foo,bar'],
            $status
        );
    }

    public function testSpellNumbersInTheArabicIdiom(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();

        $Arabic->setNumberFeminine(1);
        $Arabic->setNumberFormat(1);

        $expected[] = 'ÙØ¦Ø© ÙÙØ§Ø­Ø¯ ÙØ£Ø±Ø¨Ø¹ÙÙ ÙÙÙØ§Ø± ÙØ®ÙØ³ÙØ¦Ø© ÙØ§Ø«ÙØ§Ù ÙØªØ³Ø¹ÙÙ ÙÙÙÙÙ ÙØ³ØªÙØ¦Ø© ÙØ«ÙØ§Ø«Ø© ÙØ®ÙØ³ÙÙ Ø£ÙÙ ÙØ®ÙØ³ÙØ¦Ø© ÙØªØ³Ø¹Ø© ÙØ«ÙØ§ÙÙÙ';
        $actual[]   = $Arabic->int2str(141592653589);

        $expected[] = 'ØµÙØ± ØµÙØ± ØªØ³Ø¹ÙØ¦Ø© ÙØ«ÙØ§Ø«Ø© ÙØ³ØªÙÙ ÙØ§ØµÙØ© ØµÙØ± ÙØ§Ø­Ø¯ ÙØ«ÙØ§Ø«ÙÙ';
        $actual[]   = $Arabic->int2str('00963.031');

        $expected[] = 'ØµÙØ±';
        $actual[]   = $Arabic->int2str(0);

        $expected[] = 'ÙÙÙÙÙ ÙØ£Ø±Ø¨Ø¹Ø© Ø¢ÙØ§Ù ÙØ«ÙØ§Ø«ÙØ¦Ø© ÙÙØ§Ø­Ø¯ ÙØ¹Ø´Ø±ÙÙ';
        $actual[]   = $Arabic->int2str(1004321);

        $Arabic->setNumberFeminine(2);
        $Arabic->setNumberFormat(2);

        $expected[] = 'ÙØ¦Ø© ÙÙØ§Ø­Ø¯Ø© ÙØ£Ø±Ø¨Ø¹ÙÙ ÙÙÙØ§Ø± ÙØ®ÙØ³ÙØ¦Ø© ÙØ§Ø«ÙØªÙÙ ÙØªØ³Ø¹ÙÙ ÙÙÙÙÙ ÙØ³ØªÙØ¦Ø© ÙØ«ÙØ§Ø« ÙØ®ÙØ³ÙÙ Ø£ÙÙ ÙØ®ÙØ³ÙØ¦Ø© ÙØªØ³Ø¹ ÙØ«ÙØ§ÙÙÙ';
        $actual[]   = $Arabic->int2str(141592653589);

        $Arabic->setNumberFeminine(2);
        $Arabic->setNumberFormat(2);
        
        $expected[] = 'Ø³Ø§ÙØ¨ Ø£ÙÙÙÙ ÙØ³Ø¨Ø¹ÙØ¦Ø© ÙØªØ³Ø¹ ÙØ£Ø±Ø¨Ø¹ÙÙ ÙØ§ØµÙØ© Ø«ÙØ§Ø«ÙØ¦Ø© ÙØ³Ø¨Ø¹ Ø¹Ø´Ø±Ø©';
        $actual[]   = $Arabic->int2str('-2749.317');

        $Arabic->setNumberFeminine(1);
        $Arabic->setNumberFormat(1);
        
        $expected[] = 'Ø³Ø¨Ø¹Ø© Ø¯ÙØ§ÙÙØ± ÙÙØ¦ØªØ§Ù ÙØ®ÙØ³ÙÙ ÙÙØ³Ø§';
        $actual[]   = $Arabic->money2str(7.25, 'KWD', 'ar');
        
        $expected[] = '7 Dinar and 250 Fils';
        $actual[]   = $Arabic->money2str(7.25, 'KWD', 'en');
        
        $expected[] = '&#1633;&#1641;&#1639;&#1637;/&#1640;/&#1634; &#1641;:&#1636;&#1635; ØµØ¨Ø§Ø­Ø§';
        $actual[]   = $Arabic->int2indic('1975/8/2 9:43 ØµØ¨Ø§Ø­Ø§');

        $Arabic->setNumberFeminine(2);
        $Arabic->setNumberFormat(2);
        $Arabic->setNumberOrder(2);
        
        $expected[] = 'Ø§ÙØ³Ø§Ø¨Ø¹Ø© Ø¹Ø´Ø±Ø©';
        $actual[]   = $Arabic->int2str(17);
        
        $expected[] = 'Ø§ÙØ«Ø§ÙØ«Ø© ÙØ§ÙØ¹Ø´Ø±ÙÙ';
        $actual[]   = $Arabic->int2str(23);
        
        $expected[] = 'Ø§ÙØ£ÙÙÙ';
        $actual[]   = $Arabic->int2str(1);

        $Arabic->setNumberFeminine(1);
        $Arabic->setNumberFormat(1);
        $Arabic->setNumberOrder(2);

        $expected[] = 'Ø§ÙØ£ÙÙ';
        $actual[]   = $Arabic->int2str(1);
        
        $expected[] = 'Ø§ÙØ³Ø§Ø¨Ø¹';
        $actual[]   = $Arabic->int2str(7);
        
        $expected[] = 'Ø§ÙÙØ¦Ø© ÙØ§ÙØ³Ø§Ø¨Ø¹ Ø¹Ø´Ø±';
        $actual[]   = $Arabic->int2str(117);

        $expected[] = 1265358979;
        $actual[]   = $Arabic->str2int('ÙÙÙØ§Ø± ÙÙØ¦ØªÙÙ ÙØ®ÙØ³Ø© ÙØ³ØªÙÙ ÙÙÙÙÙ ÙØ«ÙØ§Ø«ÙØ¦Ø© ÙØ«ÙØ§ÙÙØ© ÙØ®ÙØ³ÙÙ Ø£ÙÙ ÙØªØ³Ø¹ÙØ¦Ø© ÙØªØ³Ø¹Ø© ÙØ³Ø¨Ø¹ÙÙ');

        $expected[] = -52;
        $actual[]   = $Arabic->str2int('Ø³Ø§ÙØ¨ Ø§Ø«ÙØ§Ù ÙØ®ÙØ³ÙÙ');

        $expected[] = 6000;
        $actual[]   = $Arabic->str2int('Ø³ØªØ© Ø¢ÙØ§Ù');

        $expected[] = 2000;
        $actual[]   = $Arabic->str2int('Ø£ÙÙØ§Ù');

        $expected[] = 2000;
        $actual[]   = $Arabic->str2int('Ø£ÙÙÙÙ');

        $this->assertEquals($expected, $actual);
    }

    public function testDateOfHijriFormatInIslamicCalendar(): void
    {
        date_default_timezone_set('GMT');
        
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();

        $time = 1502656150;
        
        $correction = $Arabic->dateCorrection ($time);
        $date = $Arabic->date('l j F Y h:i:s A', $time, $correction);
        
        $expected[] = 'Ø§ÙØ£Ø­Ø¯ 20 Ø°Ù Ø§ÙÙØ¹Ø¯Ø© 1438 08:29:10 ÙØ³Ø§Ø¡Ù';
        $actual[]   = $date;
        
        $expected[] = 'Ø§ÙØ£Ø±Ø¨Ø¹Ø§Ø¡ 29 Ø´ÙØ§Ù 1443';
        $actual[]   = $Arabic->date('l j F Y', strtotime('2022-06-01'), -2);
        
        $expected[] = 'Ø§ÙØ«ÙØ§Ø«Ø§Ø¡ 1 Ø°Ù Ø§ÙÙØ¹Ø¯Ø© 1443';
        $actual[]   = $Arabic->date('l j F Y', strtotime('2022-05-31'), 2);
    
        $this->assertEquals($expected, $actual);
    }

    public function testDateOfHijriFormatInIslamicCalendarInEnglish(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();
        $Arabic->setDateMode(8);
        
        $correction = $Arabic->dateCorrection ($time);
        $date = $Arabic->date('l j F Y h:i:s A', $time, $correction);
    
        $this->assertEquals(
            "Sunday 20 Dhu al-Qi'dah 1438 08:29:10 PM",
            $date
        );
    }

    public function testDateOfArabicMonthNamesUsedInMiddleEastCountries(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();

        $Arabic->setDateMode(2);
        
        $date = $Arabic->date('l j F Y h:i:s A', $time);
    
        $this->assertEquals(
            'Ø§ÙØ£Ø­Ø¯ 13 Ø¢Ø¨ 2017 08:29:10 ÙØ³Ø§Ø¡Ù',
            $date
        );
    }

    public function testDateOfArabicTransliterationOfGregorianMonthNames(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();

        $Arabic->setDateMode(3);
        
        $date = $Arabic->date('l j F Y h:i:s A', $time);
    
        $this->assertEquals(
            'Ø§ÙØ£Ø­Ø¯ 13 Ø£ØºØ³Ø·Ø³ 2017 08:29:10 ÙØ³Ø§Ø¡Ù',
            $date
        );
    }

    public function testDateOfArabicMonthNamesAndGregorianTransliterationTogether(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();

        $Arabic->setDateMode(4);
        
        $date = $Arabic->date('l j F Y h:i:s A', $time);
    
        $this->assertEquals(
            'Ø§ÙØ£Ø­Ø¯ 13 Ø¢Ø¨/Ø£ØºØ³Ø·Ø³ 2017 08:29:10 ÙØ³Ø§Ø¡Ù',
            $date
        );
    }

    public function testDateOfLibyanWay(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();

        $Arabic->setDateMode(5);
        
        $date = $Arabic->date('l j F Y h:i:s A', $time);
    
        $this->assertEquals(
            'Ø§ÙØ£Ø­Ø¯ 13 ÙØ§ÙÙØ¨Ø§Ù 1385 08:29:10 ÙØ³Ø§Ø¡Ù',
            $date
        );
    }

    public function testDateOfAlgeriaAndTunisStyle(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();

        $Arabic->setDateMode(6);
        
        $date = $Arabic->date('l j F Y h:i:s A', $time);
    
        $this->assertEquals(
            'Ø§ÙØ£Ø­Ø¯ 13 Ø£ÙØª 2017 08:29:10 ÙØ³Ø§Ø¡Ù',
            $date
        );
    }

    public function testDateOfMoroccoStyle(): void
    {
        date_default_timezone_set('GMT');
        $time = 1502656150;
        
        $Arabic = new \ArPHP\I18N\Arabic();

        $Arabic->setDateMode(7);
        
        $date = $Arabic->date('l j F Y h:i:s A', $time);
    
        $this->assertEquals(
            'Ø§ÙØ£Ø­Ø¯ 13 ØºØ´Øª 2017 08:29:10 ÙØ³Ø§Ø¡Ù',
            $date
        );
    }

    public function testEnglishToArabicTransliteration15Cases(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $en_terms = array('George Bush', 'Paul Wolfowitz', 'Silvio Berlusconi?', 'Guantanamo', 
                          'Arizona', 'Maryland', 'Oracle', 'Yahoo', 'Google', 'Formula1', 
                          'Boeing', 'Caviar', 'Telephone', 'Internet', "CÃ´te d'Ivoire", 
                          'ana raye7 el jam3a el sa3a 3 el 39r', 'Al-Ahli');
        
        $ar_terms = array();
        
        foreach ($en_terms as $term){
            array_push($ar_terms, $Arabic->en2ar($term));
        }
    
        $this->assertEquals(
            ['Ø¬ÙØ±Ø¬ Ø¨ÙØ´','Ø¨Ø§ÙÙ ÙÙÙÙÙÙÙØªØ²','Ø³ÙÙÙÙÙ Ø¨Ø±ÙÙØ³ÙÙÙÙ','ØºÙØ§ÙØªØ§ÙØ§ÙÙ','Ø§Ø±ÙØ²ÙÙÙ','ÙØ§Ø±ÙÙØ§ÙØ¯','Ø§ÙØ±Ø§ÙÙ','ÙØ§ÙÙ','ØºÙØºÙ','ÙÙØ±ÙÙÙØ§1','Ø¨ÙÙÙØº','ÙØ§ÙÙØ§Ø±','ØªÙÙÙÙ','Ø§ÙØªØ±ÙØª','ÙÙØª Ø¯ÙÙÙÙØ±',
            'Ø§ÙÙ Ø±Ø§ÙØ­ Ø§ÙØ¬Ø§ÙØ¹Ù Ø§ÙØ³Ø§Ø¹Ù 3 Ø§ÙØ¹ØµØ±', 'Ø§ÙØ§ÙÙÙ'],
            $ar_terms
        );
    }

    public function testArabicToEnglishTransliteration19Cases(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $ar_terms = array('Ø®Ø§ÙÙØ¯ Ø§ÙØ´ÙÙØ¹ÙØ©', 'Ø¬ÙØ¨Ø±Ø§Ù Ø®ÙÙÙÙ Ø¬ÙØ¨Ø±Ø§Ù', 'ÙØ§Ø¸ÙÙ Ø§ÙØ³Ø§ÙÙØ±',
            'ÙØ§Ø¬ÙØ¯ÙØ© Ø§ÙØ±ÙÙÙÙÙ', 'ÙÙØ²Ø§Ø± ÙÙØ¨ÙÙØ§ÙÙÙ', 'Ø³ÙÙÙ Ø§ÙØ­ÙÙÙÙØ¯ÙÙÙÙØ©Ø', 'ÙÙØºØ§Ø±ÙØ© Ø¬ÙØ¹ÙÙØªÙØ§', 
            'ØºÙÙØ·ÙØ© Ø¯ÙÙÙØ´Ù', 'Ø­ÙÙÙØ¨ Ø§ÙØ´ÙÙØ¨ÙØ§Ø¡', 'Ø¬ÙØ²ÙØ±ÙØ© Ø£ÙØ±ÙØ§Ø¯', 'Ø¨ÙÙØ§Ø¯ Ø§ÙØ±Ø§ÙÙØ¯ÙÙÙ',
            'Ø£ÙØ±Ø§ÙØ§Øª Ø§ÙØ¬ÙÙØ²ÙØ©', 'Ø¯ÙØ±ÙØ¹', 'Ø¹ÙÙØ¯', 'Ø¹ÙÙØ¯', 'Ø±ÙØ¯ÙØ¡', 'Ø¥ÙÙØ¯ÙØ§Ø¡', 'ÙÙØ¨ÙØ© Ø§ÙÙÙ', 'ÙØ§Ø¶Ù');
            
        $en_terms = array();
        
        foreach ($ar_terms as $term){
            array_push($en_terms, $Arabic->ar2en($term));
        }
    
        $this->assertEquals(
            ["Khalid Ash-Sham'ah","Jubran Khalyl Jubran","Kazim As-Sahir","Majidat Ar-Roumi","Nizar Qab'bani","Souq Al-Hameidei'iah?","Magharat Ja'eita","Ghoutat Dimashq","Halab Ash-Shahba'a","Jazyrat Aarwad","Bilad Ar-Rafidan","Ahramat Al-Jeizah","Dira","Eid","Oud","Rid'a","Eida'a","Hibat Al-Lh","Qadin"],
            $en_terms
        );
    }

    public function testArabicToEnglishTransliterationDifferentStandards(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $text = 'ÙØºØ© Ø§ÙØ¶Ø§Ø¯';

        $expected[] = 'Lght Al-á¸ad';
        $actual[]   = $Arabic->ar2en($text, 'UNGEGN+');
        
        $expected[] = 'Lght Al-á¸ad';
        $actual[]   = $Arabic->ar2en($text, 'RJGC');
        
        $expected[] = 'Lght Al-á¸ad';
        $actual[]   = $Arabic->ar2en($text, 'SES');
        
        $expected[] = 'LÄ¡t Al-á¸ad';
        $actual[]   = $Arabic->ar2en($text, 'ISO233');

        $this->assertEquals($expected, $actual);
    }

    public function testGenderGuessForArabicNames36Cases(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $names = array('Ø£Ø­ÙØ¯ Ø¨Ø´ØªÙ','Ø£Ø­ÙØ¯ ÙÙØµÙØ±','Ø§ÙØ­Ø¨ÙØ¨ Ø§ÙØºØ±ÙØ¨Ù','Ø§ÙÙØ¹Ø² Ø¨Ù ÙØ­ÙØ©',
                          'ØªÙÙÙÙ Ø·Ù','Ø¬ÙÙØ§Ø± ÙÙØ³Ù','Ø¬ÙØ§Ù  Ø±ÙØ§Ù','Ø¬ÙØ§ÙØ© ÙÙÙØ±',
                          'Ø¬ÙÙÙ Ø¹Ø§Ø²Ø±','Ø­Ø³Ù Ø¬ÙÙÙ','Ø­ÙØ¯Ø± Ø¹Ø¨Ø¯ Ø§ÙØ­Ù','Ø®Ø§ÙØ¯ ØµØ§ÙØ­',
                          'Ø®Ø¯ÙØ¬Ø© Ø¨Ù ÙÙØ©','Ø±Ø¨Ù Ø®ÙÙÙ','Ø±Ø´Ø§ Ø¹Ø§Ø±Ù','Ø±ÙØ²Ù Ø¹Ø¨Ø¯Ù',
                          'Ø³ÙÙØ± Ø³ÙØ±ÙÙ','ØµÙÙØ¨ Ø§ÙÙÙÙØ§ÙÙ','Ø¹Ø¨Ø¯ Ø§ÙØµÙØ¯ ÙØ§ØµØ±','Ø¹ÙÙ Ø§ÙØ¸ÙÙØ±Ù',
                          'ÙØ±Ø­ Ø§ÙØ¨Ø±ÙØ§ÙÙ','ÙÙØ±ÙØ² Ø²ÙØ§ÙÙ','ÙÙØµÙ Ø§ÙÙØ§Ø³Ù','ÙÙÙØ© Ø§ÙØ´Ø¨Ù',
                          'ÙÙÙÙ Ø§ÙØ´Ø§ÙØ¨','ÙÙÙØ§ Ø²ÙØ± Ø§ÙØ¯ÙÙ','ÙØ­ÙØ¯ Ø§ÙØ¨ÙØ¹ÙÙ',
                          'ÙØ­ÙØ¯ Ø§ÙÙÙØ§Ø±Ù','ÙØ­ÙØ¯ Ø®ÙØ± Ø§ÙØ¨ÙØ±ÙÙÙ','ÙØ­ÙØ¯ ÙØ±ÙØ´Ø§Ù',
                          'ÙÙÙØ° Ø§ÙØ¹ÙÙ','ÙÙÙ Ø³ÙÙØ§Ù','ÙØ§Ø¬Ù Ø³ÙÙÙØ§Ù','ÙØ¯ÙÙ Ø§ÙÙÙØ§Ø­',
                          'ÙÙÙØ¨Ø© Ø¨ÙØ­ÙØ§ÙØ³');
        
        // to improve the code coverage of this unit test
        $names[] = 'Ø¥Ø³Ø¹Ø§Ø¯ ÙÙÙØ³';

        $gender = array();
        
        foreach ($names as $name){
            array_push($gender, $Arabic->isFemale($name));
        }
    
        $this->assertEquals(
            [false,false,false,false,false,true,false,true,false,false,false,false,true,true,true,false,false,false,false,false,true,true,false,true,true,true,false,false,false,false,false,true,false,false,true,true],
            $gender
        );
    }

    public function testSwapEnglishKeyboardToArabic(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $str = "Hpf lk hgkhs hglj'vtdkK Hpf hg`dk dldg,k f;gdjil Ygn ,p]hkdm hgHl,v tb drt,k ljv]]dk fdk krdqdk>";
    
        $this->assertEquals(
            $Arabic->swapEa($str),
            'Ø£Ø­Ø¨ ÙÙ Ø§ÙÙØ§Ø³ Ø§ÙÙØªØ·Ø±ÙÙÙØ Ø£Ø­Ø¨ Ø§ÙØ°ÙÙ ÙÙÙÙÙÙ Ø¨ÙÙÙØªÙÙ Ø¥ÙÙ ÙØ­Ø¯Ø§ÙÙØ© Ø§ÙØ£ÙÙØ± ÙÙØ§ ÙÙÙÙÙ ÙØªØ±Ø¯Ø¯ÙÙ Ø¨ÙÙ ÙÙÙØ¶ÙÙ.'
        );
    }

    public function testSwapFrenchKeyboardToArabic(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $str = 'Hpf lk hgkhs hgljÃ¹vtdkK Hpf hgÂ²dk dldg;k fmgdjil Ygn ;p$hkd, hgHl;v tb drt;k ljv$$dk fdk krdadk/';
    
        $this->assertEquals(
            $Arabic->swapFa($str),
            'Ø£Ø­Ø¨ ÙÙ Ø§ÙÙØ§Ø³ Ø§ÙÙØªØ·Ø±ÙÙÙØ Ø£Ø­Ø¨ Ø§ÙØ°ÙÙ ÙÙÙÙÙÙ Ø¨ÙÙÙØªÙÙ Ø¥ÙÙ ÙØ­Ø¯Ø§ÙÙØ© Ø§ÙØ£ÙÙØ± ÙÙØ§ ÙÙÙÙÙ ÙØªØ±Ø¯Ø¯ÙÙ Ø¨ÙÙ ÙÙÙØ¶ÙÙ.'
        );
    }

    public function testSwapArabicKeyboardToEnglish(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $str = "ÙÙØº ÙÙÙØ«ÙÙÙÙØ«ÙÙ Ø¨Ø®Ø®Ù Ø¤Ø´Ù Ø©Ø´ÙØ« ÙØ§ÙÙÙØ³ ÙØ§ÙÙÙØ«Ù Ø©Ø®ÙØ« Ø¤Ø®Ø©Ø­ÙØ«Ø¡ Ø´ÙÙ Ø©Ø®ÙØ« Ø±ÙØ®ÙØ«ÙÙØ² Ã·Ù ÙØ´ÙØ«Ø³ Ø´ ÙØ®Ø¹Ø¤Ø§ Ø®Ø¨ ÙØ«ÙÙØ¹Ø³ Ø´ÙÙ Ø´ ÙØ®Ù Ø®Ø¨ Ø¤Ø®Ø¹ÙØ´ÙØ« ÙØ® Ø©Ø®Ø±Ø« ÙÙ ÙØ§Ø« Ø®Ø­Ø­Ø®Ø³ÙÙØ« ÙÙÙØ«Ø¤ÙÙØ®ÙØ²";
    
        $this->assertEquals(
            $Arabic->swapAe($str),
            'Any intelligent fool can make things ghigger more complex and more violent. It takes a touch of genius and a lot of courage to move in the opposite direction.'
        );
    }
    
    public function testSwapArabicKeyboardToFrench(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $str = "}Ø« Ø´Ø¹Ù ÙØ¹ÙÙ Ø¶ Ù'Ø¹Ù ÙØ¹ÙÙ Ø¶ Ù'Ø¶Ø¹ÙÙØ«";
        
        $this->assertEquals(
            $Arabic->swapAf($str),
            "Ce qui nuit a l'un duit a l'autre"
        );
    }
        

    public function testAutoDetectAndFixKeyboardLanguage4Cases(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $examples = array("ff'z g;k fefhj", "FF'Z G;K FEFHJ", 'ÙÙØ®ØµÙØº ÙØ§Ø¹Ù Ø³Ø¹ÙØ«ÙØº', 'sLOWLY BUT SURELY', 'Ø£Ø«ÙÙØ§Ù');

        $fixed = array();
        
        foreach ($examples as $example){
            array_push($fixed, $Arabic->fixKeyboardLang($example));
        }
    
        $this->assertEquals(
            $fixed,
            ['Ø¨Ø¨Ø·Ø¦ ÙÙÙ Ø¨Ø«Ø¨Ø§Øª', 'Ø¨Ø¨Ø·Ø¦ ÙÙÙ Ø¨Ø«Ø¨Ø§Øª', 'Slowly but surely', 'Slowly but surely', 'Height']
        );
    }

    public function testArabicGlyphs(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $expected[] = 'ï»¢ï»´ïº£ïº®ï»Ø§ ï»¦ï»¤ïº£ïº®ï»Ø§ ï»ªï» ï»Ø§ ï»¢ïº´ïº';
        $actual[]   = $Arabic->utf8Glyphs('Ø¨Ø³Ù Ø§ÙÙÙ Ø§ÙØ±Ø­ÙÙ Ø§ÙØ±Ø­ÙÙ');

        $expected[] = 'Ù¢Ù Ù Ù¦ Ùïºï»ï»Ø§ ïº¬ï»¨ï»£ Ø£ïºªïº ïºÙï»´ïºïº®ï»ï»Ø§ ïºï»ï» ï»Ø§Ù PHP Ø¹Ùïº®ïº¸ï»£
ÙØ§ïº®ï»¤ïºïº´ï»£ ÙØ§ïº°ï»³ï»»Ù';
        $actual[]   = $Arabic->utf8Glyphs('ÙØ´Ø±ÙØ¹ PHP ÙØ§ÙÙØºØ© Ø§ÙØ¹Ø±Ø¨ÙÙØ© Ø¨Ø¯Ø£ ÙÙØ° Ø§ÙØ¹Ø§Ù 2006 ÙÙØ§ÙØ²Ø§Ù ÙØ³ØªÙØ±Ø§Ù');

        $expected[] = 'ï±ï»¦ïº´ï»£ Ùï»ïºØ± Ø§ÙÙïºªïº Ùïºï»Ùï»£ Ùïºï³²ï»ï±¢ïº®ï»Ø§ ï»°Ùï»¬ÙïºÙï»¨Ùï»£';
        $actual[]   = $Arabic->utf8Glyphs('ÙÙÙÙØªÙÙÙÙ Ø§ÙØ±ÙÙÙÙÙØ©Ù ÙÙØ¹Ø§Ù Ø¬Ø¯ÙÙØ§ Ø±Ø¬ÙÙ ÙØ³ÙÙÙ');

        // #29 test case 1 (ascii + arabic)
        $expected[] = 'aØ¨ ïºïºïº'; // a \u0628 sp \uFE90 \uFE92 \uFE91
        $actual[]   = $Arabic->utf8Glyphs('aØ¨Ø¨Ø¨ Ø¨'); // a \u0628 \u0628 \u0628 sp \u0628

        // #29 test case 2 (multibyte char + arabic)
        $expected[] = 'ãØ¨'; //
        $actual[]   = $Arabic->utf8Glyphs('ãØ¨');

        $Arabic->addGlyphs('Ù±', 'FB50FB51FB50FB51', false, true);

        // #29 test case 3
        $expected[] = 'Ø¨ï­'; // \u0628 \u0671
        $actual[]   = $Arabic->utf8Glyphs('Ù±Ø¨'); // \u0671 \u0628

        $this->assertEquals($expected, $actual);
    }

    public function testHijriDateMakeTime(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $expected = array();
        $actual   = array();
        
        $correction = $Arabic->mktimeCorrection(9, 1429);
        
        $actual[]   = $Arabic->mktime(0, 0, 0, 9, 1, 1429, $correction);
        $expected[] = 1220227200;

        $actual[]   = $Arabic->mktimeCorrection(9, 1400);
        $expected[] = 0;
    
        $this->assertEquals($expected, $actual);
    }

    public function testDaysCountOfHijriMonth(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $expected = array();
        $actual   = array();
        
        $expected[] = 30;
        $actual[]   = $Arabic->hijriMonthDays(9, 1429);
        
        $expected[] = 30;
        $actual[]   = $Arabic->hijriMonthDays(12, 1442, false);
        
        $expected[] = false;
        $actual[]   = $Arabic->hijriMonthDays(1, 1500, false);
        
        $this->assertEquals($expected, $actual);
    }

    public function testDecimalDegreeAndDegreeMinuteSecondConversion(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $expected = array();
        $actual   = array();
        
        $expected[] = '-12Â°34\'55.92"';
        $actual[]   = $Arabic->dd2dms(-12.5822);
        
        $expected[] = '12Â°04\'04.8"';
        $actual[]   = $Arabic->dd2dms('12.068');
        
        $expected[] = -12.575;
        $actual[]   = $Arabic->dms2dd('12Â°34\'30"S');

        $this->assertEquals($expected, $actual);
    }

    public function testGetQiblaDirection(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $Arabic->setSalatLocation(33.52, 36.31);
        $direction = $Arabic->getQibla();
    
        $this->assertEquals(
            $direction,
            164.70473621919
        );
    }

    public function testMuslimPrayerTimes(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $expected = array();
        $actual   = array();
        
        $Arabic->setSalatLocation(33.52, 36.31, 3, 691);
        $Arabic->setSalatDate(11, 19, 2020);
        $Arabic->setSalatConf('Shafi', -0.833333, -17.5, -19.5, 'Sunni');

        $expected[] = ["5:36","7:05","12:20","15:10","17:37","18:54","17:35","0:20","5:26",
                      [1605764160.0,1605769500.0,1605788400.0,1605798600.0,1605807420.0,1605812040.0,1605807300.0,1605831600.0,1605763560.0]];
        $actual[]   = $Arabic->getPrayTime();
        
        $Arabic->setSalatLocation(36.22, 37.13, 2, 380);
        $Arabic->setSalatDate(1, 25, 2021);
        $Arabic->setSalatConf('Hanafi', -0.833333, -17.5, -19.5, 'Shia');

        $expected[] = ["5:01","6:34","11:44","15:11","17:07","18:17","16:54","22:57","4:51",
                      [1611550860.0,1611556440.0,1611575040.0,1611587460.0,1611594420.0,1611598620.0,1611593640.0,1611615420.0,1611550260.0]];
        $actual[]   = $Arabic->getPrayTime();
    
        $this->assertEquals($expected, $actual);
    }

    public function testArabicTextStandardize(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
$content = <<<END
ÙØ°Ø§ ÙØµ Ø¹Ø±Ø¨Ù Ø Ù ÙÙÙ Ø¹ÙØ§ÙØ§Øª ØªØ±ÙÙÙ Ø¨Ø­Ø§Ø¬Ø© Ø¥ÙÙ Ø¶Ø¨Ø· Ù ÙØ¹Ø§ÙØ±Ø© !Ù ÙØ°ÙÙ ÙØµÙØµ( Ø¨ÙÙ 
Ø£ÙÙØ§Ø³ )Ø£Ù Ø­ØªÙ ÙØ¤Ø·Ø±Ø©"Ø¨Ø¥Ø´Ø§Ø±Ø§Øª Ø¥ÙØªØ¨Ø§Ø³ "Ø£Ù- Ø¹ÙØ§ÙØ§Øª Ø¥Ø¹ØªØ±Ø§Ø¶ -Ø§ÙØ®......
<br>
ÙØ°Ø§ Ø³ØªÙÙÙ ÙØ°Ù Ø§ÙÙÙØªØ¨Ø© Ø£Ø¯Ø§Ø© Ù ÙØ³ÙÙØ© ÙÙØ¹Ø§ÙØ¬Ø© ÙØ«Ù ÙÙØ°Ø§ Ø­Ø§ÙØ§ØªØ Ø¨ÙØ§ ÙÙÙØ§ Ø§ÙÙØ§Ø­Ø¯Ø§Øª 1 
Kg Ø£Ù ÙØ«ÙØ§ MB 16 ÙØ³ÙØ§ÙØ§ Ø­ØªÙ Ø§ÙÙØ³Ø¨ Ø§ÙÙØ¤ÙØ© ÙØ«Ù 20% Ø£Ù %50 ÙÙÙØ°Ø§ ...
END;

$check = <<<END
ÙØ°Ø§ ÙØµ Ø¹Ø±Ø¨ÙØ ÙÙÙÙ Ø¹ÙØ§ÙØ§Øª ØªØ±ÙÙÙ Ø¨Ø­Ø§Ø¬Ø© Ø¥ÙÙ Ø¶Ø¨Ø· ÙÙØ¹Ø§ÙØ±Ø©! ÙÙØ°ÙÙ ÙØµÙØµ (Ø¨ÙÙ 
Ø£ÙÙØ§Ø³) Ø£Ù Ø­ØªÙ ÙØ¤Ø·Ø±Ø© "Ø¨Ø¥Ø´Ø§Ø±Ø§Øª Ø¥ÙØªØ¨Ø§Ø³" Ø£Ù -Ø¹ÙØ§ÙØ§Øª Ø¥Ø¹ØªØ±Ø§Ø¶- Ø§ÙØ®...
<br>
ÙØ°Ø§ Ø³ØªÙÙÙ ÙØ°Ù Ø§ÙÙÙØªØ¨Ø© Ø£Ø¯Ø§Ø© Ù ÙØ³ÙÙØ© ÙÙØ¹Ø§ÙØ¬Ø© ÙØ«Ù ÙÙØ°Ø§ Ø­Ø§ÙØ§ØªØ Ø¨ÙØ§ ÙÙÙØ§ Ø§ÙÙØ§Ø­Ø¯Ø§Øª 1 
Kg Ø£Ù ÙØ«ÙØ§ <span dir="ltr">16 MB</span> ÙØ³ÙØ§ÙØ§ Ø­ØªÙ Ø§ÙÙØ³Ø¨ Ø§ÙÙØ¤ÙØ© ÙØ«Ù %20 Ø£Ù %50 ÙÙÙØ°Ø§...
END;

        $this->assertEquals(
            $Arabic->standard($content),
            $check
        );
    }

    public function testArabicStringToTime7Cases(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $time  = 1605793969;
        $dates = array('Ø§ÙØ®ÙÙØ³ Ø§ÙÙØ§Ø¯Ù', 'Ø§ÙØ£Ø­Ø¯ Ø§ÙÙØ§Ø¶Ù', 'Ø¨Ø¹Ø¯ Ø£Ø³Ø¨ÙØ¹ Ù Ø«ÙØ§Ø«Ø© Ø£ÙØ§Ù', 'ÙÙØ° ØªØ³Ø¹Ø© Ø£ÙØ§Ù', 
                          'ÙØ¨Ù Ø¥Ø³Ø¨ÙØ¹ÙÙ', '2 Ø¢Ø¨ 1975', '1 Ø±ÙØ¶Ø§Ù 1429');
        
        $timestamp = array();
        
        foreach ($dates as $date){
            array_push($timestamp, $Arabic->strtotime($date, $time));
        }
    
        $this->assertEquals(
            [1606348800,1605398400,1606657969,1605016369,1604584369,176169600,1220227200],
            $timestamp
        );
    }

    public function testArabicSoundex14Cases(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $words = array('ÙÙÙÙØªÙÙ', 'ÙÙÙÙØªÙ', 'ÙÙÙÙØ·ÙÙ', 'ÙÙÙØªÙ', 'ÙÙÙØªÙÙ', 'ÙÙØ§ÙÙØªÙÙ', 'ÙÙÙÙØ²ÙØ§Ù',
                       'ÙÙÙÙØ³ÙÙÙØªØ´', 'ÙÙÙÙØ³ÙÙØªØ´', 'ÙÙÙÙØ²ÙÙØªØ´', 'ÙÙÙÙØ²ÙÙÙØªØ´', 'ÙÙÙØ³ÙÙÙØªØ´', 'ÙÙÙÙØ³ÙÙØªØ´', 'ÙÙÙÙÙÙÙÙ', 'ÙØ¤Ø±Ø®');
        
        $indices = array();
        
        foreach ($words as $word){
            array_push($indices, $Arabic->soundex($word));
        }
        
        // to improve the code coverage of this unit test
        $Arabic->setSoundexCode('phonix');
        $indices[] = $Arabic->soundex('ÙÙÙÙØ²ÙØ§Ù');

        $Arabic->setSoundexCode('soundex');
        $indices[] = $Arabic->soundex('ÙÙÙÙØ²ÙØ§Ù');
    
        $this->assertEquals(
            ['K453','K453','K453','K453','K453','K453','K452','M421','M421','M421','M421','M421','M421','M455', 'M620', 'K458','K452'],
            $indices
        );
    }

    public function testArabicSoundexInArabicLength5(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $Arabic->setSoundexLen(5);
        $Arabic->setSoundexLang('ar');
    
        $this->assertEquals(
            $Arabic->soundex('ÙÙÙÙØ³ÙÙÙØªØ´'),
            'Ù4213'
        );
    }

    public function testArabicSegmentsIdentifierOneWordCase(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $text = 'Peace Ø³ÙØ§Ù ×©××× HasÃ®tÃ® à¤¶à¤¾à¤¨à¥à¤¤à¤¿ BarÄ±Å åå¹³ ÐÐ¸Ñ';
        $mark = $Arabic->arIdentify($text);
        
        $word = substr($text, $mark[0], $mark[1]-$mark[0]);

        $this->assertEquals(
            $mark,
            [6, 14]
        );
    }

    public function testArabicSegmentsIdentifierMultiWordsCase(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $text = 'ÙØ±ÙØ¯ Ø¹Ø¯ÙÙ Farid Adly, Editor in Chief, Italian-Arab News Agency ANBAMED (Notizie dal Mediterraneo - Ø£ÙØ¨Ø§Ø¡ Ø§ÙØ¨Ø­Ø± Ø§ÙÙØªÙØ³Ø·), Acquedolci (Italy)';
        $mark = $Arabic->arIdentify($text);
        
        $word1 = substr($text, $mark[0], $mark[1]-$mark[0]);
        $word2 = substr($text, $mark[2], $mark[3]-$mark[2]);
    
        $this->assertEquals(
            $mark,
            [0, 17, 108, 146]
        );
    }

    public function testArabicSegmentsIdentifierHTML(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $text = '<abbr title="Ø±Ø³Ø§ÙØ© ØªØ±Ø­ÙØ¨">ÙØ±Ø­Ø¨Ø§ Ø¨Ø§ÙØ¹Ø§ÙÙ</abbr>';
        $mark = $Arabic->arIdentify($text);
        
        $word = substr($text, $mark[0], $mark[1]-$mark[0]);

        $this->assertEquals(
            $mark,
            [36, 61]
        );
    }

    public function testArabicQuearyGetAllWordForms(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $expected = array();
        $actual   = array();
        
        $expected[] = 'Ø¹Ø±Ø¨ ÙÙØ³Ø·ÙÙÙÙÙ ÙÙØ³Ø·ÙÙÙ ÙÙØ³Ø·ÙÙÙØ© ÙÙØ³Ø·ÙÙÙØªÙÙ ÙÙØ³Ø·ÙÙÙÙÙ ÙÙØ³Ø·ÙÙÙØ§Ù ÙÙØ³Ø·ÙÙÙØ§Øª ÙÙØ³Ø·ÙÙÙÙØ§';
        $actual[]   = $Arabic->arQueryAllForms('Ø¹Ø±Ø¨ ÙÙØ³Ø·ÙÙÙÙÙ');
        
        $expected[] = 'Ø§ÙØ³Ø¹ÙØ¯ÙØ© Ø³Ø¹ÙØ¯ÙØ© Ø³Ø¹ÙØ¯Ù Ø³Ø¹ÙØ¯ Ø³Ø¹ÙØ¯ÙÙ Ø³Ø¹ÙØ¯ÙØª Ø³Ø¹ÙØ¯ÙØ§Øª';
        $actual[]   = $Arabic->arQueryAllForms('Ø§ÙØ³Ø¹ÙØ¯ÙØ©');
        
        $expected[] = 'Ø¯ÙØ§Ø±ÙØ§ Ø¯ÙØ§Ø± Ø¯ÙØ§Ø±Ù Ø¯ÙØ§Ø±Ù Ø¯ÙØ§Ø±ÙÙØ§ Ø¯ÙØ§Ø±ÙÙØ§ Ø¯ÙØ§Ø±ÙÙ Ø¯ÙØ§Ø±ÙÙ Ø¯ÙØ§Ø±ÙØ§ Ø¯ÙØ§Ø±ÙÙ Ø¯ÙØ§Ø±ÙÙ ÙØ³ØªÙÙØ© ÙØ³ØªÙÙ ÙØ³ØªÙÙÙ ÙØ³ØªÙÙØª ÙØ³ØªÙÙØ§Øª';
        $actual[]   = $Arabic->arQueryAllForms('Ø¯ÙØ§Ø±ÙØ§ ÙØ³ØªÙÙØ©');
        
        $expected[] = 'ÙØ±Ø­Ù ÙØ±Ø­Ø§ ØªØ¹ÙÙÙÙÙØ§ ØªØ¹ÙÙÙ ØªØ¹ÙÙÙÙÙØ§';
        $actual[]   = $Arabic->arQueryAllForms('ÙØ±Ø­Ù ØªØ¹ÙÙÙÙÙØ§');

        $expected[] = 'Ø¹Ø§Ø¦Ø´Ø© Ø¹Ø§Ø¦Ø´ Ø¹Ø§Ø¦Ø´Ù Ø¹Ø§Ø¦Ø´Øª Ø¹Ø§Ø¦Ø´Ø§Øª Ø¹Ø§ÙØ´Ø© Ø¹Ø§ÙØ´ Ø¹Ø§ÙØ´Ù Ø¹Ø§ÙØ´Øª Ø¹Ø§ÙØ´Ø§Øª';
        $actual[]   = $Arabic->arQueryAllForms('Ø¹Ø§Ø¦Ø´Ø©');

        $expected[] = 'Ø¹ØµØ§ØªÙÙ Ø¹ØµØ§ Ø¹ØµØ§Ø© Ø¹ØµØ§ØªÙÙØ© Ø¹ØµØ§Øª Ø¹ØµØ§ØªØ© Ø¹ØµØ§ØªØªÙÙ Ø¹ØµØ§ØªÙÙ Ø¹ØµØ§ØªØ§Ù Ø¹ØµØ§ØªØ§Øª Ø¹ØµØ§ØªÙØ§';
        $actual[]   = $Arabic->arQueryAllForms('Ø¹ØµØ§ØªÙÙ');
        
        $this->assertEquals($expected, $actual);
    }

    public function testArabicQuearyGetSqlStatementByFieldsStr(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $keyword = 'ÙÙØ³Ø·ÙÙÙÙÙ "Ø£ØµÙÙÙÙ"';

        $Arabic->setQueryStrFields('field');
        $Arabic->setQueryMode(0);

        $strCondition = $Arabic->arQueryWhereCondition($keyword);
        $strOrderBy   = $Arabic->arQueryOrderBy($keyword);

        $StrSQL = "SELECT `field` FROM `table` WHERE $strCondition ORDER BY $strOrderBy";
        
        $this->assertEquals(
            $StrSQL,
            "SELECT `field` FROM `table` WHERE (field LIKE 'Ø£ØµÙÙÙÙ\') OR ( REPLACE(field, 'Ù', '') REGEXP 'ÙÙØ³Ø·ÙÙÙ(ÙÙ)?') OR ( REPLACE(field, 'Ù', '') REGEXP '\') ORDER BY ((field LIKE 'Ø£ØµÙÙÙÙ') + (CASE WHEN  REPLACE(field, 'Ù', '') REGEXP 'ÙÙØ³Ø·ÙÙÙ(ÙÙ)?' THEN 1 ELSE 0 END)) DESC"
        );
    }

    public function testArabicQuearyGetSqlStatementByFieldsStrAndLogic(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $keyword = 'Ø«ÙØ¨ Ø£Ø³ÙØ¯';

        $Arabic->setQueryStrFields('field');
        $Arabic->setQueryMode(1);

        $strCondition = $Arabic->arQueryWhereCondition($keyword);
        $strOrderBy   = $Arabic->arQueryOrderBy($keyword);

        $StrSQL = "SELECT `field` FROM `table` WHERE $strCondition ORDER BY $strOrderBy";
        
        $this->assertEquals(
            $StrSQL,
            "SELECT `field` FROM `table` WHERE ( REPLACE(field, 'Ù', '') REGEXP 'Ø«ÙØ¨') AND ( REPLACE(field, 'Ù', '') REGEXP '(Ø§|Ø£|Ø¥|Ø¢)Ø³ÙØ¯') ORDER BY ((CASE WHEN  REPLACE(field, 'Ù', '') REGEXP 'Ø«ÙØ¨' THEN 1 ELSE 0 END) + (CASE WHEN  REPLACE(field, 'Ù', '') REGEXP '(Ø§|Ø£|Ø¥|Ø¢)Ø³ÙØ¯' THEN 1 ELSE 0 END)) DESC"
        );
    }

    public function testArabicQuearyGetSqlStatementByFieldsArray(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();

        $keyword = 'Ø¹Ø±Ø¨ ÙÙØ³Ø·ÙÙÙÙÙ';

        $Arabic->setQueryArrFields(['field']);
        $Arabic->setQueryMode(0);

        $strCondition = $Arabic->arQueryWhereCondition($keyword);
        $strOrderBy   = $Arabic->arQueryOrderBy($keyword);

        $StrSQL = "SELECT `field` FROM `table` WHERE $strCondition ORDER BY $strOrderBy";
        
        $this->assertEquals(
            $StrSQL,
            "SELECT `field` FROM `table` WHERE ( REPLACE(field, 'Ù', '') REGEXP 'Ø¹Ø±Ø¨') OR ( REPLACE(field, 'Ù', '') REGEXP 'ÙÙØ³Ø·ÙÙÙ(ÙÙ)?') ORDER BY ((CASE WHEN  REPLACE(field, 'Ù', '') REGEXP 'Ø¹Ø±Ø¨' THEN 1 ELSE 0 END) + (CASE WHEN  REPLACE(field, 'Ù', '') REGEXP 'ÙÙØ³Ø·ÙÙÙ(ÙÙ)?' THEN 1 ELSE 0 END)) DESC"
        );
    }
    
    public function testIsArabicFunction(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $test = array();
        
        $test[] = $Arabic->isArabic('Ø®Ø§ÙØ¯ Ø§ÙØ´ÙØ¹Ø©');
        $test[] = $Arabic->isArabic('Khaled Al-Shamaa');
        
        $this->assertEquals(
            $test,
            [true, false]
        );
    }

    public function testArabicAutoSummarizeGeneral(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $rate = 25;
$fulltext = <<<END
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
        $fulltext = str_replace("\n", ' ', $fulltext);
        $summary = $Arabic->arSummary($fulltext, '', $rate, 1, 1);
    
        $this->assertEquals(
            $summary,
            '   ÙØ¬Ø§Ø¡ Ø§ÙØªØ·ÙØ± ÙÙ Ø§ÙØ³Ø§Ø¹Ø§Øª Ø§ÙØ£ÙÙÙ Ø¨Ø¹Ø¯ ØªØºØ°ÙØ© ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± Ø¨Ø­Ø²ÙØ© Ø£Ø´Ø¹Ø© Ø¨ÙØ§  Ø¬Ø³ÙÙØ§Øª Ø£ÙØ«Ø± Ø¨Ø­ÙØ§ÙÙ Ø³ØªØ© ÙÙ Ø§ÙÙØ¦Ø© ÙÙÙ ÙØ­Ø¯Ø© Ø¨Ø§ÙÙÙØ§Ø±ÙØ© ÙØ¹ Ø§ÙÙØ³ØªÙÙ Ø§ÙÙÙØ§Ø³Ù Ø§ÙØ³Ø§Ø¨Ù  Ø§ÙØ°Ù Ø³Ø¬ÙÙ ÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ Ø§ÙØªØ§Ø¨Ø¹ ÙÙØ®ØªØ¨Ø± ÙØ±ÙÙÙØ§Ø¨ Ø§ÙØ£ÙØ±ÙÙÙ Ø§ÙØ¹Ø§Ù Ø§ÙÙØ§Ø¶Ù.  ÙÙÙÙØ§ Ø²Ø§Ø¯Øª "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ©" Ø£Ù Ø§Ø±ØªÙØ¹ Ø¹Ø¯Ø¯ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙÙØ§ Ø²Ø§Ø¯  Ø¹Ø¯Ø¯ Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø§ÙØªÙ ØªØ­Ø¯Ø« ÙØ²Ø§Ø¯Øª Ø£ÙØ¶Ø§ Ø§ÙÙØ§Ø¯Ø© Ø§ÙØªÙ ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ ØªØ­ÙÙÙÙØ§.  ÙÙØ²ÙØ¯  ÙÙ Ø§ÙØ¨ÙØ§ÙØ§Øª ÙØ¹ÙÙ Ø¥ÙÙØ§ÙÙØ© Ø£ÙØ¨Ø± ÙÙÙØ´Ù.   ÙÙÙ Ø®ÙØ§Ù ÙØªØ§Ø¨Ø¹Ø© Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø¹ÙÙ Ø£Ø¬ÙØ²Ø© Ø§ÙÙÙØ¨ÙÙØªØ± ÙÙ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ©  ÙÙÙ ÙØ¹Ø§ÙÙ ÙÙ Ø£ÙØ­Ø§Ø¡ Ø§ÙØ¹Ø§ÙÙ ÙØ±ØªØ¨Ø·Ø© Ø¨ÙØ§ ÙØ£ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ Ø£ÙØ¶Ø§ Ø£Ù ÙØ¬Ø¯ÙØ§ Ø¯ÙÙÙØ§ ÙÙÙØ§ Ø¹ÙÙ  ÙØ¬ÙØ¯ Ø§ÙÙØ§Ø¯Ø© Ø§ÙÙØ¹ØªÙØ© Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªØ´ÙÙ Ø­ÙØ§ÙÙ Ø±Ø¨Ø¹ Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙØ±Ø¨ÙØ§ Ø§ÙØ·Ø§ÙØ© Ø§ÙÙØ¹ØªÙØ©  Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªÙØ«Ù Ø­ÙØ§ÙÙ 70 ÙÙ Ø§ÙÙØ¦Ø© ÙÙ Ø§ÙÙÙÙ.   ÙØ¨Ø¹Ø¯ Ø§ÙØªÙÙÙ Ø¹Ø§Ù 2013 ÙÙØ¯Ù Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© Ø¥ÙÙ Ø²ÙØ§Ø¯Ø©  Ø§ÙØ·Ø§ÙØ© Ø§ÙÙÙÙØ© ÙÙÙ ØªØµØ§Ø¯Ù Ø¨ÙÙ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙ Ø§ÙØ­Ø¯ Ø§ÙØ§ÙØµÙ Ø§ÙØ­Ø§ÙÙ Ø§ÙØ¨Ø§ÙØº 7 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª  Ø¥ÙÙ 14 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª.'
        );
    }

    public function testArabicAutoSummarizeGeneralHighlighted(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $rate = 25;
$fulltext = <<<END
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
        $fulltext = str_replace("\n", ' ', $fulltext);
        $summary = $Arabic->arSummary($fulltext, '', $rate, 1, 2);
    
        $this->assertEquals(
            $summary,
            'ÙØ§Ù Ø¹ÙÙØ§Ø¡ ÙÙ ÙØ±ÙØ² Ø£Ø¨Ø­Ø§Ø« Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØªØ§Ø¨Ø¹ ÙÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ§Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙ Ø§ÙØ¬ÙØ¹Ø© Ø£ÙÙÙ Ø­ÙÙÙØ§ ØªØµØ§Ø¯ÙØ§ Ø¨ÙÙ Ø¬Ø³ÙÙØ§Øª Ø¨ÙØ«Ø§ÙØ© ÙÙØ§Ø³ÙØ© ÙÙ Ø¥ÙØ¬Ø§Ø² ÙÙÙ ÙÙ Ø¨Ø±ÙØ§ÙØ¬ÙÙ ÙÙØ´Ù Ø£Ø³Ø±Ø§Ø± Ø§ÙÙÙÙ.<mark>  ÙØ¬Ø§Ø¡ Ø§ÙØªØ·ÙØ± ÙÙ Ø§ÙØ³Ø§Ø¹Ø§Øª Ø§ÙØ£ÙÙÙ Ø¨Ø¹Ø¯ ØªØºØ°ÙØ© ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± Ø¨Ø­Ø²ÙØ© Ø£Ø´Ø¹Ø© Ø¨ÙØ§  Ø¬Ø³ÙÙØ§Øª Ø£ÙØ«Ø± Ø¨Ø­ÙØ§ÙÙ Ø³ØªØ© ÙÙ Ø§ÙÙØ¦Ø© ÙÙÙ ÙØ­Ø¯Ø© Ø¨Ø§ÙÙÙØ§Ø±ÙØ© ÙØ¹ Ø§ÙÙØ³ØªÙÙ Ø§ÙÙÙØ§Ø³Ù Ø§ÙØ³Ø§Ø¨Ù  Ø§ÙØ°Ù Ø³Ø¬ÙÙ ÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ Ø§ÙØªØ§Ø¨Ø¹ ÙÙØ®ØªØ¨Ø± ÙØ±ÙÙÙØ§Ø¨ Ø§ÙØ£ÙØ±ÙÙÙ Ø§ÙØ¹Ø§Ù Ø§ÙÙØ§Ø¶Ù.</mark>  ÙÙÙ ØªØµØ§Ø¯Ù ÙÙ Ø§ÙÙÙÙ Ø§ÙØ¯Ø§Ø¦Ø±Ù ÙÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙØ¨Ø§ÙØº Ø·ÙÙÙ 27 ÙÙÙÙÙØªØ±Ø§ ØªØ­Øª Ø§ÙØ£Ø±Ø¶  Ø¨Ø³Ø±Ø¹Ø© Ø£ÙÙ ÙÙ Ø³Ø±Ø¹Ø© Ø§ÙØ¶ÙØ¡ ÙØ­Ø¯Ø« ÙØ­Ø§ÙØ§Ø© ÙÙØ§ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ Ø§ÙØ°Ù ÙÙØ³Ø± Ø¨Ù Ø¹ÙÙØ§Ø¡ ÙØ´ÙØ¡ Ø§ÙÙÙÙ  ÙØ¨Ù 13.<mark> ÙÙÙÙØ§ Ø²Ø§Ø¯Øª "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ©" Ø£Ù Ø§Ø±ØªÙØ¹ Ø¹Ø¯Ø¯ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙÙØ§ Ø²Ø§Ø¯  Ø¹Ø¯Ø¯ Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø§ÙØªÙ ØªØ­Ø¯Ø« ÙØ²Ø§Ø¯Øª Ø£ÙØ¶Ø§ Ø§ÙÙØ§Ø¯Ø© Ø§ÙØªÙ ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ ØªØ­ÙÙÙÙØ§.</mark>  ÙÙØ¬Ø±Ù ÙØ¹ÙÙØ§ Ø§ÙØªØ§Ø¬ ÙÙØ§ÙÙÙ ÙØ«ÙØ±Ø© ÙÙ ÙØ°Ù "Ø§ÙØ§ÙÙØ¬Ø§Ø±Ø§Øª Ø§ÙØ¹Ø¸ÙÙØ© Ø§ÙÙØµØºØ±Ø©" ÙÙÙÙØ§.  ÙÙØ§Ù Ø±ÙÙÙ ÙÙÙØ± Ø§ÙÙØ¯ÙØ± Ø§ÙØ¹Ø§Ù ÙÙÙÙØ¸ÙØ© Ø§ÙØ§ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙØ±ÙØ§ Ø¹ÙÙ Ø§ÙØ­Ø¯ÙØ¯  Ø§ÙÙØ±ÙØ³ÙØ© Ø§ÙØ³ÙÙØ³Ø±ÙØ© ÙØ±Ø¨ Ø¬ÙÙÙ Ø£Ù "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ© ÙÙ Ø§ÙØ£Ø³Ø§Ø³ ÙÙØ¬Ø§Ø­ ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ±  ÙÙØ°Ø§ ÙÙØ°Ù Ø®Ø·ÙØ© ÙÙÙØ© Ø¬Ø¯Ø§"Ø ÙØ£Ø¶Ø§Ù "Ø§ÙÙØ«Ø§ÙØ© Ø§ÙØ£Ø¹ÙÙ ØªØ¹ÙÙ ÙØ²ÙØ¯Ø§ ÙÙ Ø§ÙØ¨ÙØ§ÙØ§ØªØ<mark> ÙÙØ²ÙØ¯  ÙÙ Ø§ÙØ¨ÙØ§ÙØ§Øª ÙØ¹ÙÙ Ø¥ÙÙØ§ÙÙØ© Ø£ÙØ¨Ø± ÙÙÙØ´Ù.</mark>" ÙÙØ§Ù Ø³ÙØ±Ø¬ÙÙ Ø¨Ø±ØªÙÙÙØªØ´Ù ÙØ¯ÙØ± Ø§ÙØ£Ø¨Ø­Ø§Ø« ÙÙ Ø§ÙÙÙØ¸ÙØ©  "ÙÙØ¬Ø¯ Ø¥Ø­Ø³Ø§Ø³ ÙÙÙÙØ³ Ø¨Ø£ÙÙØ§ Ø¹ÙÙ Ø£Ø¹ØªØ§Ø¨ ÙØ´Ù Ø¬Ø¯ÙØ¯". ÙÙÙ Ø­ÙÙ Ø²Ø§Ø¯ Ø§ÙÙÙØ²ÙØ§Ø¦ÙÙÙ ÙØ§ÙÙÙÙØ¯Ø³ÙÙ  ÙÙ Ø§ÙÙÙØ¸ÙØ© ÙØ«Ø§ÙØ© Ø­Ø²Ù Ø§ÙØ£Ø´Ø¹Ø© Ø¹ÙÙ ÙØ¯Ù Ø§ÙØ£Ø³Ø¨ÙØ¹ Ø§ÙÙÙØµØ±Ù ÙØ§Ù Ø¬ÙÙØ³ Ø¬ÙÙÙÙ Ø§ÙÙØªØ­Ø¯Ø« Ø¨Ø§Ø³Ù Ø§ÙÙÙØ¸ÙØ©  Ø£ÙÙÙ Ø¬ÙØ¹ÙØ§ ÙØ¹ÙÙÙØ§Øª ØªØ²ÙØ¯ Ø¹ÙÙ ÙØ§ Ø¬ÙØ¹ÙÙ Ø¹ÙÙ ÙØ¯Ù ØªØ³Ø¹Ø© Ø£Ø´ÙØ± ÙÙ Ø¹ÙÙ ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª ÙÙ 2010.  ÙØªØ®Ø²Ù ØªÙÙ Ø§ÙÙØ¹ÙÙÙØ§Øª Ø¹ÙÙ Ø¢ÙØ§Ù ÙÙ Ø£ÙØ±Ø§Øµ Ø§ÙÙÙØ¨ÙÙØªØ±. ÙÙÙØ«Ù Ø§ÙÙØµØ§Ø¯Ù Ø§ÙØ¨Ø§ÙØºØ© ØªÙÙÙØªÙ  Ø¹Ø´Ø±Ø© ÙÙÙØ§Ø±Ø§Øª Ø¯ÙÙØ§Ø± Ø£ÙØ¨Ø± ØªØ¬Ø±Ø¨Ø© Ø¹ÙÙÙØ© ÙÙÙØ±Ø¯Ø© ÙÙ Ø§ÙØ¹Ø§ÙÙ ÙÙØ¯ Ø¨Ø¯Ø£ ØªØ´ØºÙÙÙ ÙÙ ÙÙØ§ÙØ©  ÙØ§Ø±Ø³ Ø¢Ø°Ø§Ø± 2010. ÙØ¨Ø¹Ø¯ Ø§ÙØ¥ØºÙØ§Ù Ø§ÙØ¯Ø§Ø¦Ù ÙÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ ÙÙ Ø§ÙØ®Ø±ÙÙ Ø§ÙÙØ§Ø¯Ù Ø³ÙØµØ¨Ø­  ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØµØ§Ø¯Ù Ø§ÙÙØ¨ÙØ± Ø§ÙÙØ­ÙØ¯ Ø§ÙÙÙØ¬ÙØ¯ ÙÙ Ø§ÙØ¹Ø§ÙÙ. ÙÙÙ Ø¨ÙÙ Ø£ÙØ¯Ø§Ù  ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± ÙØ¹Ø±ÙØ© ÙØ§ Ø¥Ø°Ø§ ÙØ§Ù Ø§ÙØ¬Ø³ÙÙ Ø§ÙØ¨Ø³ÙØ· Ø§ÙÙØ¹Ø±ÙÙ Ø¨Ø¥Ø³Ù Ø¬Ø³ÙÙ ÙÙØ¬Ø²  Ø£Ù Ø¨ÙØ²ÙÙ ÙÙØ¬Ø² ÙÙØ¬ÙØ¯ ÙØ¹ÙÙØ§. ÙÙØ­ÙÙ Ø§ÙØ¬Ø³ÙÙ Ø¥Ø³Ù Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±ÙØ·Ø§ÙÙ Ø¨ÙØªØ± ÙÙØ¬Ø²  Ø§ÙØ°Ù ÙØ§Ù Ø£ÙÙ ÙÙ Ø§ÙØªØ±Ø¶ ÙØ¬ÙØ¯Ù ÙØ¹Ø§ÙÙ Ø£Ø¹Ø·Ù Ø§ÙÙØªÙØ© ÙÙØ¬Ø³ÙÙØ§Øª Ø¨Ø¹Ø¯ Ø§ÙØ¥ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ.<mark>  ÙÙÙ Ø®ÙØ§Ù ÙØªØ§Ø¨Ø¹Ø© Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø¹ÙÙ Ø£Ø¬ÙØ²Ø© Ø§ÙÙÙØ¨ÙÙØªØ± ÙÙ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ©  ÙÙÙ ÙØ¹Ø§ÙÙ ÙÙ Ø£ÙØ­Ø§Ø¡ Ø§ÙØ¹Ø§ÙÙ ÙØ±ØªØ¨Ø·Ø© Ø¨ÙØ§ ÙØ£ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ Ø£ÙØ¶Ø§ Ø£Ù ÙØ¬Ø¯ÙØ§ Ø¯ÙÙÙØ§ ÙÙÙØ§ Ø¹ÙÙ  ÙØ¬ÙØ¯ Ø§ÙÙØ§Ø¯Ø© Ø§ÙÙØ¹ØªÙØ© Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªØ´ÙÙ Ø­ÙØ§ÙÙ Ø±Ø¨Ø¹ Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙØ±Ø¨ÙØ§ Ø§ÙØ·Ø§ÙØ© Ø§ÙÙØ¹ØªÙØ©  Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªÙØ«Ù Ø­ÙØ§ÙÙ 70 ÙÙ Ø§ÙÙØ¦Ø© ÙÙ Ø§ÙÙÙÙ.</mark> ÙÙÙÙÙ Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙÙ Ø£Ù ØªØ¬Ø§Ø±Ø¨  Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙØ¯ ØªÙÙÙ Ø§ÙØ¶ÙØ¡ Ø£ÙØ¶Ø§ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© Ø¨Ø§Ø²ØºØ©  ØªØ´ÙØ± Ø¥ÙÙ Ø£Ù Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙÙ ÙØ¬Ø±Ø¯ Ø¬Ø²Ø¡ ÙÙ ÙØ¸Ø§Ù ÙØ£ÙÙØ§Ù ÙØ«ÙØ±Ø© ØºÙØ± ÙØ±Ø¦ÙØ© ÙØ¨Ø¹Ø¶ÙØ§ Ø§ÙØ¨Ø¹Ø¶  ÙÙØ§ ØªÙØ¬Ø¯ ÙØ³Ø§Ø¦Ù ÙÙØªÙØ§ØµÙ Ø¨ÙÙÙØ§. ÙÙØ£ÙÙÙÙ Ø£ÙØ¶Ø§ Ø£Ù ÙÙØ¯Ù ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ±  Ø§ÙØ°Ù Ø³ÙØ¨ÙÙ ÙØ¹ÙÙ Ø¹ÙÙ ÙØ¯Ù Ø¹ÙØ¯ Ø¨Ø¹Ø¯ ØªÙÙÙ ÙÙÙ ÙÙØ¯Ø© Ø¹Ø§Ù ÙÙ 2013 Ø¨Ø¹Ø¶ Ø§ÙØ¯Ø¹Ù  ÙØ¯ÙØ§Ø¦Ù ÙØªØ¹ÙØ¨ÙØ§ Ø¨Ø§Ø­Ø«ÙÙ Ø¢Ø®Ø±ÙÙ Ø¹ÙÙ Ø£Ù Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ Ø³Ø¨ÙÙ ÙÙÙ Ø¢Ø®Ø± ÙØ¨Ù Ø§ÙØ§ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ.<mark>  ÙØ¨Ø¹Ø¯ Ø§ÙØªÙÙÙ Ø¹Ø§Ù 2013 ÙÙØ¯Ù Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© Ø¥ÙÙ Ø²ÙØ§Ø¯Ø©  Ø§ÙØ·Ø§ÙØ© Ø§ÙÙÙÙØ© ÙÙÙ ØªØµØ§Ø¯Ù Ø¨ÙÙ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙ Ø§ÙØ­Ø¯ Ø§ÙØ§ÙØµÙ Ø§ÙØ­Ø§ÙÙ Ø§ÙØ¨Ø§ÙØº 7 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª  Ø¥ÙÙ 14 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª.</mark> ÙØ³ÙØ²ÙØ¯ Ø°ÙÙ Ø£ÙØ¶Ø§ ÙÙ ÙØ±ØµØ© Ø§ÙØªÙØµÙ ÙØ§ÙØªØ´Ø§ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© ÙÙÙØ§ ØªØµÙÙ  Ø§ÙÙÙØ¸ÙØ© Ø¨Ø£ÙÙ "Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØ¬Ø¯ÙØ¯Ø©" Ø¨ÙØ§ ÙØ¯ÙØ¹ Ø§ÙÙØ¹Ø±ÙØ© ÙØªØ¬Ø§ÙØ² ÙØ§ ÙØ³ÙÙ Ø§ÙÙÙÙØ°Ø¬ Ø§ÙÙØ¹ÙØ§Ø±Ù  Ø§ÙÙØ¹ØªÙØ¯ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±Øª Ø§ÙÙØ´ØªØ§ÙÙ ÙÙ Ø§ÙØ§Ø¦Ù Ø§ÙÙØ±Ù Ø§ÙØ¹Ø´Ø±ÙÙ.'
        );
    }

    public function testArabicAutoSummarizeForSpecificWord(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $rate = 25;
$fulltext = <<<END
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
        $fulltext = str_replace("\n", ' ', $fulltext);
        $summary = $Arabic->arSummary($fulltext, 'ÙÙØ¬ÙØ²', $rate, 1, 1);
    
        $this->assertEquals(
            $summary,
            ' ÙØ§Ù Ø¹ÙÙØ§Ø¡ ÙÙ ÙØ±ÙØ² Ø£Ø¨Ø­Ø§Ø« Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØªØ§Ø¨Ø¹ ÙÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ§Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙ Ø§ÙØ¬ÙØ¹Ø© Ø£ÙÙÙ Ø­ÙÙÙØ§ ØªØµØ§Ø¯ÙØ§ Ø¨ÙÙ Ø¬Ø³ÙÙØ§Øª Ø¨ÙØ«Ø§ÙØ© ÙÙØ§Ø³ÙØ© ÙÙ Ø¥ÙØ¬Ø§Ø² ÙÙÙ ÙÙ Ø¨Ø±ÙØ§ÙØ¬ÙÙ ÙÙØ´Ù Ø£Ø³Ø±Ø§Ø± Ø§ÙÙÙÙ.  ÙÙÙ Ø¨ÙÙ Ø£ÙØ¯Ø§Ù  ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± ÙØ¹Ø±ÙØ© ÙØ§ Ø¥Ø°Ø§ ÙØ§Ù Ø§ÙØ¬Ø³ÙÙ Ø§ÙØ¨Ø³ÙØ· Ø§ÙÙØ¹Ø±ÙÙ Ø¨Ø¥Ø³Ù Ø¬Ø³ÙÙ ÙÙØ¬Ø²  Ø£Ù Ø¨ÙØ²ÙÙ ÙÙØ¬Ø² ÙÙØ¬ÙØ¯ ÙØ¹ÙÙØ§.  ÙÙØ­ÙÙ Ø§ÙØ¬Ø³ÙÙ Ø¥Ø³Ù Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±ÙØ·Ø§ÙÙ Ø¨ÙØªØ± ÙÙØ¬Ø²  Ø§ÙØ°Ù ÙØ§Ù Ø£ÙÙ ÙÙ Ø§ÙØªØ±Ø¶ ÙØ¬ÙØ¯Ù ÙØ¹Ø§ÙÙ Ø£Ø¹Ø·Ù Ø§ÙÙØªÙØ© ÙÙØ¬Ø³ÙÙØ§Øª Ø¨Ø¹Ø¯ Ø§ÙØ¥ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ.   ÙÙÙ Ø®ÙØ§Ù ÙØªØ§Ø¨Ø¹Ø© Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø¹ÙÙ Ø£Ø¬ÙØ²Ø© Ø§ÙÙÙØ¨ÙÙØªØ± ÙÙ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ©  ÙÙÙ ÙØ¹Ø§ÙÙ ÙÙ Ø£ÙØ­Ø§Ø¡ Ø§ÙØ¹Ø§ÙÙ ÙØ±ØªØ¨Ø·Ø© Ø¨ÙØ§ ÙØ£ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ Ø£ÙØ¶Ø§ Ø£Ù ÙØ¬Ø¯ÙØ§ Ø¯ÙÙÙØ§ ÙÙÙØ§ Ø¹ÙÙ  ÙØ¬ÙØ¯ Ø§ÙÙØ§Ø¯Ø© Ø§ÙÙØ¹ØªÙØ© Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªØ´ÙÙ Ø­ÙØ§ÙÙ Ø±Ø¨Ø¹ Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙØ±Ø¨ÙØ§ Ø§ÙØ·Ø§ÙØ© Ø§ÙÙØ¹ØªÙØ©  Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªÙØ«Ù Ø­ÙØ§ÙÙ 70 ÙÙ Ø§ÙÙØ¦Ø© ÙÙ Ø§ÙÙÙÙ.  ÙØ³ÙØ²ÙØ¯ Ø°ÙÙ Ø£ÙØ¶Ø§ ÙÙ ÙØ±ØµØ© Ø§ÙØªÙØµÙ ÙØ§ÙØªØ´Ø§ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© ÙÙÙØ§ ØªØµÙÙ  Ø§ÙÙÙØ¸ÙØ© Ø¨Ø£ÙÙ "Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØ¬Ø¯ÙØ¯Ø©" Ø¨ÙØ§ ÙØ¯ÙØ¹ Ø§ÙÙØ¹Ø±ÙØ© ÙØªØ¬Ø§ÙØ² ÙØ§ ÙØ³ÙÙ Ø§ÙÙÙÙØ°Ø¬ Ø§ÙÙØ¹ÙØ§Ø±Ù  Ø§ÙÙØ¹ØªÙØ¯ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±Øª Ø§ÙÙØ´ØªØ§ÙÙ ÙÙ Ø§ÙØ§Ø¦Ù Ø§ÙÙØ±Ù Ø§ÙØ¹Ø´Ø±ÙÙ.'
        );
    }

    public function testArabicAutoSummarizeForSpecificWordHighlighted(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $rate = 25;
$fulltext = <<<END
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
        $fulltext = str_replace("\n", ' ', $fulltext);
        $summary = $Arabic->arSummary($fulltext, 'ÙÙØ¬ÙØ²', $rate, 1, 2, 'summary');
    
        $this->assertEquals(
            $summary,
            '<mark>ÙØ§Ù Ø¹ÙÙØ§Ø¡ ÙÙ ÙØ±ÙØ² Ø£Ø¨Ø­Ø§Ø« Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØªØ§Ø¨Ø¹ ÙÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ§Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙ Ø§ÙØ¬ÙØ¹Ø© Ø£ÙÙÙ Ø­ÙÙÙØ§ ØªØµØ§Ø¯ÙØ§ Ø¨ÙÙ Ø¬Ø³ÙÙØ§Øª Ø¨ÙØ«Ø§ÙØ© ÙÙØ§Ø³ÙØ© ÙÙ Ø¥ÙØ¬Ø§Ø² ÙÙÙ ÙÙ Ø¨Ø±ÙØ§ÙØ¬ÙÙ ÙÙØ´Ù Ø£Ø³Ø±Ø§Ø± Ø§ÙÙÙÙ.</mark>  ÙØ¬Ø§Ø¡ Ø§ÙØªØ·ÙØ± ÙÙ Ø§ÙØ³Ø§Ø¹Ø§Øª Ø§ÙØ£ÙÙÙ Ø¨Ø¹Ø¯ ØªØºØ°ÙØ© ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± Ø¨Ø­Ø²ÙØ© Ø£Ø´Ø¹Ø© Ø¨ÙØ§  Ø¬Ø³ÙÙØ§Øª Ø£ÙØ«Ø± Ø¨Ø­ÙØ§ÙÙ Ø³ØªØ© ÙÙ Ø§ÙÙØ¦Ø© ÙÙÙ ÙØ­Ø¯Ø© Ø¨Ø§ÙÙÙØ§Ø±ÙØ© ÙØ¹ Ø§ÙÙØ³ØªÙÙ Ø§ÙÙÙØ§Ø³Ù Ø§ÙØ³Ø§Ø¨Ù  Ø§ÙØ°Ù Ø³Ø¬ÙÙ ÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ Ø§ÙØªØ§Ø¨Ø¹ ÙÙØ®ØªØ¨Ø± ÙØ±ÙÙÙØ§Ø¨ Ø§ÙØ£ÙØ±ÙÙÙ Ø§ÙØ¹Ø§Ù Ø§ÙÙØ§Ø¶Ù.  ÙÙÙ ØªØµØ§Ø¯Ù ÙÙ Ø§ÙÙÙÙ Ø§ÙØ¯Ø§Ø¦Ø±Ù ÙÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙØ¨Ø§ÙØº Ø·ÙÙÙ 27 ÙÙÙÙÙØªØ±Ø§ ØªØ­Øª Ø§ÙØ£Ø±Ø¶  Ø¨Ø³Ø±Ø¹Ø© Ø£ÙÙ ÙÙ Ø³Ø±Ø¹Ø© Ø§ÙØ¶ÙØ¡ ÙØ­Ø¯Ø« ÙØ­Ø§ÙØ§Ø© ÙÙØ§ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ Ø§ÙØ°Ù ÙÙØ³Ø± Ø¨Ù Ø¹ÙÙØ§Ø¡ ÙØ´ÙØ¡ Ø§ÙÙÙÙ  ÙØ¨Ù 13. ÙÙÙÙØ§ Ø²Ø§Ø¯Øª "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ©" Ø£Ù Ø§Ø±ØªÙØ¹ Ø¹Ø¯Ø¯ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙÙØ§ Ø²Ø§Ø¯  Ø¹Ø¯Ø¯ Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø§ÙØªÙ ØªØ­Ø¯Ø« ÙØ²Ø§Ø¯Øª Ø£ÙØ¶Ø§ Ø§ÙÙØ§Ø¯Ø© Ø§ÙØªÙ ÙÙÙÙ Ø¹ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ ØªØ­ÙÙÙÙØ§.  ÙÙØ¬Ø±Ù ÙØ¹ÙÙØ§ Ø§ÙØªØ§Ø¬ ÙÙØ§ÙÙÙ ÙØ«ÙØ±Ø© ÙÙ ÙØ°Ù "Ø§ÙØ§ÙÙØ¬Ø§Ø±Ø§Øª Ø§ÙØ¹Ø¸ÙÙØ© Ø§ÙÙØµØºØ±Ø©" ÙÙÙÙØ§.  ÙÙØ§Ù Ø±ÙÙÙ ÙÙÙØ± Ø§ÙÙØ¯ÙØ± Ø§ÙØ¹Ø§Ù ÙÙÙÙØ¸ÙØ© Ø§ÙØ§ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙÙÙØ±ÙØ§ Ø¹ÙÙ Ø§ÙØ­Ø¯ÙØ¯  Ø§ÙÙØ±ÙØ³ÙØ© Ø§ÙØ³ÙÙØ³Ø±ÙØ© ÙØ±Ø¨ Ø¬ÙÙÙ Ø£Ù "ÙØ«Ø§ÙØ© Ø§ÙØ­Ø²ÙØ© ÙÙ Ø§ÙØ£Ø³Ø§Ø³ ÙÙØ¬Ø§Ø­ ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ±  ÙÙØ°Ø§ ÙÙØ°Ù Ø®Ø·ÙØ© ÙÙÙØ© Ø¬Ø¯Ø§"Ø ÙØ£Ø¶Ø§Ù "Ø§ÙÙØ«Ø§ÙØ© Ø§ÙØ£Ø¹ÙÙ ØªØ¹ÙÙ ÙØ²ÙØ¯Ø§ ÙÙ Ø§ÙØ¨ÙØ§ÙØ§ØªØ ÙÙØ²ÙØ¯  ÙÙ Ø§ÙØ¨ÙØ§ÙØ§Øª ÙØ¹ÙÙ Ø¥ÙÙØ§ÙÙØ© Ø£ÙØ¨Ø± ÙÙÙØ´Ù." ÙÙØ§Ù Ø³ÙØ±Ø¬ÙÙ Ø¨Ø±ØªÙÙÙØªØ´Ù ÙØ¯ÙØ± Ø§ÙØ£Ø¨Ø­Ø§Ø« ÙÙ Ø§ÙÙÙØ¸ÙØ©  "ÙÙØ¬Ø¯ Ø¥Ø­Ø³Ø§Ø³ ÙÙÙÙØ³ Ø¨Ø£ÙÙØ§ Ø¹ÙÙ Ø£Ø¹ØªØ§Ø¨ ÙØ´Ù Ø¬Ø¯ÙØ¯". ÙÙÙ Ø­ÙÙ Ø²Ø§Ø¯ Ø§ÙÙÙØ²ÙØ§Ø¦ÙÙÙ ÙØ§ÙÙÙÙØ¯Ø³ÙÙ  ÙÙ Ø§ÙÙÙØ¸ÙØ© ÙØ«Ø§ÙØ© Ø­Ø²Ù Ø§ÙØ£Ø´Ø¹Ø© Ø¹ÙÙ ÙØ¯Ù Ø§ÙØ£Ø³Ø¨ÙØ¹ Ø§ÙÙÙØµØ±Ù ÙØ§Ù Ø¬ÙÙØ³ Ø¬ÙÙÙÙ Ø§ÙÙØªØ­Ø¯Ø« Ø¨Ø§Ø³Ù Ø§ÙÙÙØ¸ÙØ©  Ø£ÙÙÙ Ø¬ÙØ¹ÙØ§ ÙØ¹ÙÙÙØ§Øª ØªØ²ÙØ¯ Ø¹ÙÙ ÙØ§ Ø¬ÙØ¹ÙÙ Ø¹ÙÙ ÙØ¯Ù ØªØ³Ø¹Ø© Ø£Ø´ÙØ± ÙÙ Ø¹ÙÙ ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª ÙÙ 2010.  ÙØªØ®Ø²Ù ØªÙÙ Ø§ÙÙØ¹ÙÙÙØ§Øª Ø¹ÙÙ Ø¢ÙØ§Ù ÙÙ Ø£ÙØ±Ø§Øµ Ø§ÙÙÙØ¨ÙÙØªØ±. ÙÙÙØ«Ù Ø§ÙÙØµØ§Ø¯Ù Ø§ÙØ¨Ø§ÙØºØ© ØªÙÙÙØªÙ  Ø¹Ø´Ø±Ø© ÙÙÙØ§Ø±Ø§Øª Ø¯ÙÙØ§Ø± Ø£ÙØ¨Ø± ØªØ¬Ø±Ø¨Ø© Ø¹ÙÙÙØ© ÙÙÙØ±Ø¯Ø© ÙÙ Ø§ÙØ¹Ø§ÙÙ ÙÙØ¯ Ø¨Ø¯Ø£ ØªØ´ØºÙÙÙ ÙÙ ÙÙØ§ÙØ©  ÙØ§Ø±Ø³ Ø¢Ø°Ø§Ø± 2010. ÙØ¨Ø¹Ø¯ Ø§ÙØ¥ØºÙØ§Ù Ø§ÙØ¯Ø§Ø¦Ù ÙÙØµØ§Ø¯Ù ØªÙÙØ§ØªØ±ÙÙ ÙÙ Ø§ÙØ®Ø±ÙÙ Ø§ÙÙØ§Ø¯Ù Ø³ÙØµØ¨Ø­  ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØµØ§Ø¯Ù Ø§ÙÙØ¨ÙØ± Ø§ÙÙØ­ÙØ¯ Ø§ÙÙÙØ¬ÙØ¯ ÙÙ Ø§ÙØ¹Ø§ÙÙ.<mark> ÙÙÙ Ø¨ÙÙ Ø£ÙØ¯Ø§Ù  ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ± ÙØ¹Ø±ÙØ© ÙØ§ Ø¥Ø°Ø§ ÙØ§Ù Ø§ÙØ¬Ø³ÙÙ Ø§ÙØ¨Ø³ÙØ· Ø§ÙÙØ¹Ø±ÙÙ Ø¨Ø¥Ø³Ù Ø¬Ø³ÙÙ ÙÙØ¬Ø²  Ø£Ù Ø¨ÙØ²ÙÙ ÙÙØ¬Ø² ÙÙØ¬ÙØ¯ ÙØ¹ÙÙØ§.</mark><mark> ÙÙØ­ÙÙ Ø§ÙØ¬Ø³ÙÙ Ø¥Ø³Ù Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±ÙØ·Ø§ÙÙ Ø¨ÙØªØ± ÙÙØ¬Ø²  Ø§ÙØ°Ù ÙØ§Ù Ø£ÙÙ ÙÙ Ø§ÙØªØ±Ø¶ ÙØ¬ÙØ¯Ù ÙØ¹Ø§ÙÙ Ø£Ø¹Ø·Ù Ø§ÙÙØªÙØ© ÙÙØ¬Ø³ÙÙØ§Øª Ø¨Ø¹Ø¯ Ø§ÙØ¥ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ.</mark><mark>  ÙÙÙ Ø®ÙØ§Ù ÙØªØ§Ø¨Ø¹Ø© Ø§ÙØªØµØ§Ø¯ÙØ§Øª Ø¹ÙÙ Ø£Ø¬ÙØ²Ø© Ø§ÙÙÙØ¨ÙÙØªØ± ÙÙ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ©  ÙÙÙ ÙØ¹Ø§ÙÙ ÙÙ Ø£ÙØ­Ø§Ø¡ Ø§ÙØ¹Ø§ÙÙ ÙØ±ØªØ¨Ø·Ø© Ø¨ÙØ§ ÙØ£ÙÙ Ø§ÙØ¹ÙÙØ§Ø¡ Ø£ÙØ¶Ø§ Ø£Ù ÙØ¬Ø¯ÙØ§ Ø¯ÙÙÙØ§ ÙÙÙØ§ Ø¹ÙÙ  ÙØ¬ÙØ¯ Ø§ÙÙØ§Ø¯Ø© Ø§ÙÙØ¹ØªÙØ© Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªØ´ÙÙ Ø­ÙØ§ÙÙ Ø±Ø¨Ø¹ Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙØ±Ø¨ÙØ§ Ø§ÙØ·Ø§ÙØ© Ø§ÙÙØ¹ØªÙØ©  Ø§ÙØªÙ ÙØ¹ØªÙØ¯ Ø£ÙÙØ§ ØªÙØ«Ù Ø­ÙØ§ÙÙ 70 ÙÙ Ø§ÙÙØ¦Ø© ÙÙ Ø§ÙÙÙÙ.</mark> ÙÙÙÙÙ Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙÙ Ø£Ù ØªØ¬Ø§Ø±Ø¨  Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© ÙØ¯ ØªÙÙÙ Ø§ÙØ¶ÙØ¡ Ø£ÙØ¶Ø§ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© Ø¨Ø§Ø²ØºØ©  ØªØ´ÙØ± Ø¥ÙÙ Ø£Ù Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ ÙÙ ÙØ¬Ø±Ø¯ Ø¬Ø²Ø¡ ÙÙ ÙØ¸Ø§Ù ÙØ£ÙÙØ§Ù ÙØ«ÙØ±Ø© ØºÙØ± ÙØ±Ø¦ÙØ© ÙØ¨Ø¹Ø¶ÙØ§ Ø§ÙØ¨Ø¹Ø¶  ÙÙØ§ ØªÙØ¬Ø¯ ÙØ³Ø§Ø¦Ù ÙÙØªÙØ§ØµÙ Ø¨ÙÙÙØ§. ÙÙØ£ÙÙÙÙ Ø£ÙØ¶Ø§ Ø£Ù ÙÙØ¯Ù ÙØµØ§Ø¯Ù Ø§ÙÙØ¯Ø±ÙÙØ§Øª Ø§ÙÙØ¨ÙØ±  Ø§ÙØ°Ù Ø³ÙØ¨ÙÙ ÙØ¹ÙÙ Ø¹ÙÙ ÙØ¯Ù Ø¹ÙØ¯ Ø¨Ø¹Ø¯ ØªÙÙÙ ÙÙÙ ÙÙØ¯Ø© Ø¹Ø§Ù ÙÙ 2013 Ø¨Ø¹Ø¶ Ø§ÙØ¯Ø¹Ù  ÙØ¯ÙØ§Ø¦Ù ÙØªØ¹ÙØ¨ÙØ§ Ø¨Ø§Ø­Ø«ÙÙ Ø¢Ø®Ø±ÙÙ Ø¹ÙÙ Ø£Ù Ø§ÙÙÙÙ Ø§ÙÙØ¹Ø±ÙÙ Ø³Ø¨ÙÙ ÙÙÙ Ø¢Ø®Ø± ÙØ¨Ù Ø§ÙØ§ÙÙØ¬Ø§Ø± Ø§ÙØ¹Ø¸ÙÙ.  ÙØ¨Ø¹Ø¯ Ø§ÙØªÙÙÙ Ø¹Ø§Ù 2013 ÙÙØ¯Ù Ø¹ÙÙØ§Ø¡ Ø§ÙÙÙØ¸ÙØ© Ø§ÙØ£ÙØ±ÙØ¨ÙØ© ÙÙØ£Ø¨Ø­Ø§Ø« Ø§ÙÙÙÙÙØ© Ø¥ÙÙ Ø²ÙØ§Ø¯Ø©  Ø§ÙØ·Ø§ÙØ© Ø§ÙÙÙÙØ© ÙÙÙ ØªØµØ§Ø¯Ù Ø¨ÙÙ Ø§ÙØ¬Ø³ÙÙØ§Øª ÙÙ Ø§ÙØ­Ø¯ Ø§ÙØ§ÙØµÙ Ø§ÙØ­Ø§ÙÙ Ø§ÙØ¨Ø§ÙØº 7 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª  Ø¥ÙÙ 14 ØªÙØ±Ø§ Ø§ÙÙØªØ±ÙÙ ÙÙÙØª.<mark> ÙØ³ÙØ²ÙØ¯ Ø°ÙÙ Ø£ÙØ¶Ø§ ÙÙ ÙØ±ØµØ© Ø§ÙØªÙØµÙ ÙØ§ÙØªØ´Ø§ÙØ§Øª Ø¬Ø¯ÙØ¯Ø© ÙÙÙØ§ ØªØµÙÙ  Ø§ÙÙÙØ¸ÙØ© Ø¨Ø£ÙÙ "Ø§ÙÙÙØ²ÙØ§Ø¡ Ø§ÙØ¬Ø¯ÙØ¯Ø©" Ø¨ÙØ§ ÙØ¯ÙØ¹ Ø§ÙÙØ¹Ø±ÙØ© ÙØªØ¬Ø§ÙØ² ÙØ§ ÙØ³ÙÙ Ø§ÙÙÙÙØ°Ø¬ Ø§ÙÙØ¹ÙØ§Ø±Ù  Ø§ÙÙØ¹ØªÙØ¯ Ø¹ÙÙ ÙØ¸Ø±ÙØ§Øª Ø§ÙØ¹Ø§ÙÙ Ø§ÙØ¨Ø±Øª Ø§ÙÙØ´ØªØ§ÙÙ ÙÙ Ø§ÙØ§Ø¦Ù Ø§ÙÙØ±Ù Ø§ÙØ¹Ø´Ø±ÙÙ.</mark>'
        );
    }

    public function testArabicAutoSummarizeKeywords(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $rate = 25;
$fulltext = <<<END
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
        $fulltext = str_replace("\n", '', $fulltext);
        
        $Arabic->arSummaryLoadExtra();
        
        $keywords = $Arabic->arSummaryKeywords($fulltext, 10);
    
        $this->assertEquals(
            $keywords,
            '2010Ø 2013'
        );
    }
    
    public function testArabicPluralForms(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $number = 0;
        $expected[] = 'ÙØ§ ØªØ¹ÙÙÙØ§Øª';
        $text       = $Arabic->arPlural('ØªØ¹ÙÙÙ', $number);
        $actual[]   = str_replace('%d', $number, $text);
        
        $number = 1;
        $expected[] = 'ØªØ¹ÙÙÙ ÙØ§Ø­Ø¯';
        $text       = $Arabic->arPlural('ØªØ¹ÙÙÙ', $number);
        $actual[]   = str_replace('%d', $number, $text);
        
        $number = 2;
        $expected[] = 'ØªØ¹ÙÙÙØ§Ù';
        $text       = $Arabic->arPlural('ØªØ¹ÙÙÙ', $number);
        $actual[]   = str_replace('%d', $number, $text);
        
        $number = 9;
        $expected[] = '9 ØªØ¹ÙÙÙØ§Øª';
        $text       = $Arabic->arPlural('ØªØ¹ÙÙÙ', $number);
        $actual[]   = str_replace('%d', $number, $text);
        
        $number = 16;
        $expected[] = '16 ØµÙØ¯ÙÙØ§';
        $text       = $Arabic->arPlural('ØµÙØ¯ÙÙ', $number, 'ØµÙØ¯ÙÙØ§Ù', 'ØµÙØ§Ø¯ÙÙ', 'ØµÙØ¯ÙÙØ§');
        $actual[]   = str_replace('%d', $number, $text);        
        
        $number = 101;
        $expected[] = '101 ØµÙØ¯ÙÙ';
        $text       = $Arabic->arPlural('ØµÙØ¯ÙÙ', $number, 'ØµÙØ¯ÙÙØ§Ù', 'ØµÙØ§Ø¯ÙÙ', 'ØµÙØ¯ÙÙØ§');
        $actual[]   = str_replace('%d', $number, $text);        
        
        $this->assertEquals($actual, $expected);
    }
    
    public function testStripArabicHarakat(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $text = 'Ø¥Ø°Ø§ Ø±ÙÙØªÙ Ø£ÙÙ ØªÙØ­ÙØ§ Ø³ÙÙÙÙØ§Ù ÙÙÙ Ø§ÙØ£Ø°Ù ... ÙÙ Ø¯ÙÙÙÙÙ ÙÙÙÙÙØ±Ù ÙØ¹ÙØ±ÙØ¶ÙÙÙ ØµÙÙÙÙÙÙ';
        $expected[] = 'Ø¥Ø°Ø§ Ø±ÙØª Ø£Ù ØªØ­ÙØ§ Ø³ÙÙÙØ§ ÙÙ Ø§ÙØ£Ø°Ù ... Ù Ø¯ÙÙÙ ÙÙÙÙØ± ÙØ¹Ø±Ø¶Ù ØµÙÙ';
        $actual[]   = $Arabic->stripHarakat($text);
        
        $text = 'ÙÙØ³ÙÙÙÙÙÙÙØ§ÙÙÙÙ ÙØ§ ØªÙØ°ÙÙØ±Ù Ø¨ÙÙÙ Ø¹ÙÙØ±ÙØ©Ù Ø§ÙØ±Ø¦Ù ... ÙÙÙÙÙÙÙÙÙ Ø¹ÙÙØ±Ø§ØªÙ ÙÙÙÙÙØ§Ø³Ù Ø£ÙØ³ÙÙÙ';
        $expected[] = 'ÙØ³Ø§ÙÙ ÙØ§ ØªØ°ÙØ± Ø¨Ù Ø¹ÙØ±Ø© Ø§ÙØ±Ø¦ ... ÙÙÙÙ Ø¹ÙØ±Ø§Øª ÙÙÙÙØ§Ø³ Ø£ÙØ³Ù';
        $actual[]   = $Arabic->stripHarakat($text);
        
        $text = 'Ø¥Ø°Ø§ Ø±ÙÙØªÙ Ø£ÙÙ ØªÙØ­ÙØ§ Ø³ÙÙÙÙØ§Ù ÙÙÙ Ø§ÙØ£Ø°Ù ... ÙÙ Ø¯ÙÙÙÙÙ ÙÙÙÙÙØ±Ù ÙØ¹ÙØ±ÙØ¶ÙÙÙ ØµÙÙÙÙÙÙ';
        $expected[] = 'Ø¥Ø°Ø§ Ø±ÙØªÙ Ø£ÙÙ ØªØ­ÙØ§ Ø³ÙÙÙØ§Ù ÙÙ Ø§ÙØ£Ø°Ù ... ÙÙ Ø¯ÙÙÙÙ ÙÙÙÙØ±Ù ÙØ¹Ø±Ø¶ÙÙ ØµÙÙÙÙ';
        $actual[]   = $Arabic->stripHarakat($text, false, false, false, false);
        
        $text = 'ÙÙØ³ÙÙÙÙÙÙÙØ§ÙÙÙÙ ÙØ§ ØªÙØ°ÙÙØ±Ù Ø¨ÙÙÙ Ø¹ÙÙØ±ÙØ©Ù Ø§ÙØ±Ø¦Ù ... ÙÙÙÙÙÙÙÙÙ Ø¹ÙÙØ±Ø§ØªÙ ÙÙÙÙÙØ§Ø³Ù Ø£ÙØ³ÙÙÙ';
        $expected[] = 'ÙØ³ÙÙÙÙÙÙÙØ§ÙÙÙ ÙØ§ ØªØ°ÙØ±Ù Ø¨ÙÙ Ø¹ÙØ±Ø©Ù Ø§ÙØ±Ø¦Ù ... ÙÙÙÙÙÙ Ø¹ÙØ±Ø§ØªÙ ÙÙÙÙÙØ§Ø³Ù Ø£ÙØ³ÙÙ';
        $actual[]   = $Arabic->stripHarakat($text, false, false, false, false);
        
        $Arabic->setNorm('all', true);

        $actual[] = $Arabic->getNorm('stripTatweel');
        $actual[] = $Arabic->getNorm('stripTanween');
        $actual[] = $Arabic->getNorm('stripShadda');
        $actual[] = $Arabic->getNorm('stripLastHarakat');
        $actual[] = $Arabic->getNorm('stripWordHarakat');
        $actual[] = $Arabic->getNorm('normaliseLamAlef');
        $actual[] = $Arabic->getNorm('normaliseAlef');
        $actual[] = $Arabic->getNorm('normaliseHamza');
        $actual[] = $Arabic->getNorm('normaliseTaa');
        $actual[] = $Arabic->getNorm('notExist');
        
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = true;
        $expected[] = false;

        $this->assertEquals($expected, $actual);
    }
    
    public function testOpenLocationCode(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $expected[] = true;
        $actual[]   = $Arabic->volc('8G6RM7C7+PF');
        
        $expected[] = false;
        $actual[]   = $Arabic->volc('8G6RM7C7-PF');
        
        $expected[] = false;
        $actual[]   = $Arabic->volc('8G6RM7C7+PA');
        
        $expected[] = false;
        $actual[]   = $Arabic->volc('8G6RM7C7+PF2');
        
        $expected[] = '8G6RM7C7+PF';
        $actual[]   = $Arabic->dd2olc(34.67175, 36.263625);
        
        $expected[] = array(34.67175, 36.263625);
        $actual[]   = $Arabic->olc2dd('8G6RM7C7+PF');
        
        $expected[] = array(null, null);
        $actual[]   = $Arabic->olc2dd('8G6RM7C7-PF');
        
        $this->assertEquals($expected, $actual);
    }
    
    public function testArabicSentimentAnalysis(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $expected[] = false;
        $actual[]   = $Arabic->arSentiment('Ø§ÙØ®Ø¯ÙØ© ÙØ§ÙØª Ø¨Ø·ÙØ¦Ø©')['isPositive'];
        
        $expected[] = true;
        $actual[]   = $Arabic->arSentiment('Ø§ÙØ¥Ø·ÙØ§ÙØ© Ø±Ø§Ø¦Ø¹Ø© ÙØ§ÙØ·Ø¹Ø§Ù ÙØ°ÙØ°')['isPositive'];
        
        $expected[] = false;
        $actual[]   = $Arabic->arSentiment('Ø§ÙØªØ¨Ø±ÙØ¯ ÙØ§ ÙØ¹ÙÙ ÙØ§ÙÙØ§Ù ÙØ§Ù Ø¶Ø¹ÙÙØ©')['isPositive'];
        
        $expected[] = true;
        $actual[]   = $Arabic->arSentiment('Ø§ÙÙØ¸Ø§ÙØ© ÙÙÙØ²Ø© ÙÙÙØ¸ÙÙ Ø§ÙØ§Ø³ØªÙØ¨Ø§Ù ÙØªØ¹Ø§ÙÙÙÙ')['isPositive'];
        
        $expected[] = false;
        $actual[]   = $Arabic->arSentiment('Ø¬Ø§Ø¡Øª Ø§ÙÙØ·Ø¹Ø© ÙÙØ³ÙØ±Ø© ÙØ§ÙØ¹ÙØ¨Ø© ÙÙØªÙØ­Ø©')['isPositive'];
        
        $expected[] = true;
        $actual[]   = $Arabic->arSentiment('Ø§ÙÙÙØªØ¬ ÙØ·Ø§Ø¨Ù ÙÙÙÙØ§ØµÙØ§Øª ÙØ§ÙØªØ³ÙÙÙ Ø³Ø±ÙØ¹')['isPositive'];
        
        $this->assertEquals($expected, $actual);
    }
    
    public function testArabicNoDots(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $text = 'ÙÙ ØªØ¹ÙÙ Ø£Ù Ø§ÙÙÙØ§Ø· ØªÙ Ø¥Ø®ØªØ±Ø§Ø¹ÙØ§ ÙÙØ¹Ø¬Ù ÙÙÙØ³ ÙÙØ¹Ø±Ø¨Ø Ø­ØªÙ Ø£Ù Ø§ÙØ¹Ø±Ø¨ ÙØ¯ÙÙØ§ ÙØ§ÙÙØ§ ÙØ§ ÙØ³ØªØ®Ø¯ÙÙÙ Ø§ÙÙÙØ§Ø· ÙØ£ÙØª ÙØ°ÙÙ ÙÙÙÙÙ Ø£Ù ØªÙØ±Ø£ ÙÙØ§Ø·Ø¹ ÙØ§ÙÙØ© Ø¨Ø¯ÙÙ ÙÙØ§Ø· ÙÙØ§ ÙØ§Ù ÙÙØ¹Ù Ø§ÙØ£Ø³ÙØ§ÙØ ÙÙØ§ÙÙØ§ ÙÙÙÙÙÙ Ø§ÙÙÙÙØ§Øª ÙÙ Ø³ÙØ§Ù Ø§ÙØ¬ÙÙØ© ÙØ£Ø¨Ø³Ø· ÙØ«Ø§Ù Ø¹ÙÙ Ø°ÙÙ Ø£ÙÙ ØªÙØ±Ø£ ÙØ°Ø§ Ø§ÙÙÙØ·Ø¹ ÙÙ Ø¯ÙÙ ÙØ´Ø§ÙÙ.';
        $expected[] = 'ÙÙ Ù®Ø¹ÙÙ Ø§Úº Ø§ÙÙ®Ù¯Ø§Ø· Ù®Ù Ø§Ø­Ù®Ø±Ø§Ø¹ÙØ§ ÙÙØ¹Ø­Ù ÙÙÙØ³ ÙÙØ¹Ø±Ù®Ø Ø­Ù®Ù Ø§Úº Ø§ÙØ¹Ø±Ù® Ù¯Ø¯ÙÙØ§ ÙØ§Ù®ÙØ§ ÙØ§ ÙØ³Ù®Ø­Ø¯ÙÙÚº Ø§ÙÙ®Ù¯Ø§Ø· ÙØ§Ù®Ù® ÙØ¯ÙÚ© ÙÙÙÙ®Ú© Ø§Úº Ù®Ù¯Ø±Ø§ ÙÙ¯Ø§Ø·Ø¹ ÙØ§ÙÙÙ Ù®Ø¯ÙÚº Ù®Ù¯Ø§Ø· ÙÙØ§ ÙØ§Úº ÙÚ¡Ø¹Ù Ø§ÙØ§Ø³ÙØ§Ú¡Ø ÙÙØ§Ù®ÙØ§ ÙÚ¡ÙÙÙÚº Ø§ÙÙÙÙØ§Ù® ÙÚº Ø³ÙØ§Ù¯ Ø§ÙØ­ÙÙÙ ÙØ§Ù®Ø³Ø· ÙÙ®Ø§Ù Ø¹ÙÙ Ø¯ÙÚ© Ø§Ù®Ú© Ù®Ù¯Ø±Ø§ ÙØ¯Ø§ Ø§ÙÙÙ¯Ø·Ø¹ ÙÚº Ø¯ÙÚº ÙØ³Ø§ÙÙ.';
        $actual[]   = $Arabic->noDots($text);
        
        $this->assertEquals($expected, $actual);
    }
    
    public function testNormalizeText(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();
        
        $text = 'Ø¢Ø³ÙÙÙÙÙØ©Ù ÙØ§ ØªÙÙÙØ¨ÙÙØ¤Ù 456';
        
        $expected[] = 'Ø§Ø³ÙÙ ÙØ§ ØªÙØ¨Ø¡ 456';
        $actual[]   = $Arabic->arNormalizeText($text);
        
        $expected[] = 'Ø§Ø³ÙÙ ÙØ§ ØªÙØ¨Ø¡ 456';
        $actual[]   = $Arabic->arNormalizeText($text, 'Arabic');
        
        $expected[] = 'Ø§Ø³ÙÙ ÙØ§ ØªÙØ¨Ø¡ Ù¤Ù¥Ù¦';
        $actual[]   = $Arabic->arNormalizeText($text, 'Hindu');
        
        $expected[] = 'Ø§Ø³ÙÙ ÙØ§ ØªÙØ¨Ø¡ Û´ÛµÛ¶';
        $actual[]   = $Arabic->arNormalizeText($text, 'Persian');
        
        $this->assertEquals($expected, $actual);
    }
    
    public function testDiffForHumans(): void
    {
        $Arabic = new \ArPHP\I18N\Arabic();
        
        $expected = array();
        $actual   = array();

        $time  = time();
        $other = $time - 1.618 * 3600 * 24 * 365;

        $expected[] = 'Ø¨Ø¹Ø¯ Ø³ÙØ© ÙØ§Ø­Ø¯Ø© Ù 7 Ø£Ø´ÙØ±';
        $actual[]   = $Arabic->diffForHumans($time, $other);

        $expected[] = 'Ø¨Ø¹Ø¯ Ø³ÙØ© ÙØ§Ø­Ø¯Ø© Ù 7 Ø£Ø´ÙØ± Ù Ø¥Ø³Ø¨ÙØ¹ÙÙ';
        $actual[]   = $Arabic->diffForHumans($time, $other, 3);

        $expected[] = 'Ø¨Ø¹Ø¯ Ø³ÙØ© ÙØ§Ø­Ø¯Ø© Ù 7 Ø£Ø´ÙØ± Ù 3 Ø£Ø³Ø§Ø¨ÙØ¹';
        $actual[]   = $Arabic->diffForHumans($time, $other, 3, false);

        $expected[] = 'ÙØ¨Ù Ø³ÙØ© ÙØ§Ø­Ø¯Ø© Ù 7 Ø£Ø´ÙØ± Ù Ø¥Ø³Ø¨ÙØ¹ÙÙ Ù ÙÙÙ ÙØ§Ø­Ø¯ Ù 13 Ø³Ø§Ø¹Ø© Ù 40 Ø¯ÙÙÙØ© Ù 48 Ø«Ø§ÙÙØ©';
        $actual[]   = $Arabic->diffForHumans($other, $time, 7);

        $this->assertEquals($expected, $actual);
    }
}
