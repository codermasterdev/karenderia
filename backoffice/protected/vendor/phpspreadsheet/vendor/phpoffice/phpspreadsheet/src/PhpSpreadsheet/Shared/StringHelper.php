<?php

namespace PhpOffice\PhpSpreadsheet\Shared;

class StringHelper
{
    /**
     * Control characters array.
     *
     * @var string[]
     */
    private static $controlCharacters = [];

    /**
     * SYLK Characters array.
     *
     * @var array
     */
    private static $SYLKCharacters = [];

    /**
     * Decimal separator.
     *
     * @var ?string
     */
    private static $decimalSeparator;

    /**
     * Thousands separator.
     *
     * @var ?string
     */
    private static $thousandsSeparator;

    /**
     * Currency code.
     *
     * @var string
     */
    private static $currencyCode;

    /**
     * Is iconv extension avalable?
     *
     * @var ?bool
     */
    private static $isIconvEnabled;

    /**
     * iconv options.
     *
     * @var string
     */
    private static $iconvOptions = '//IGNORE//TRANSLIT';

    /**
     * Build control characters array.
     */
    private static function buildControlCharacters(): void
    {
        for ($i = 0; $i <= 31; ++$i) {
            if ($i != 9 && $i != 10 && $i != 13) {
                $find = '_x' . sprintf('%04s', strtoupper(dechex($i))) . '_';
                $replace = chr($i);
                self::$controlCharacters[$find] = $replace;
            }
        }
    }

    /**
     * Build SYLK characters array.
     */
    private static function buildSYLKCharacters(): void
    {
        self::$SYLKCharacters = [
            "\x1B 0" => chr(0),
            "\x1B 1" => chr(1),
            "\x1B 2" => chr(2),
            "\x1B 3" => chr(3),
            "\x1B 4" => chr(4),
            "\x1B 5" => chr(5),
            "\x1B 6" => chr(6),
            "\x1B 7" => chr(7),
            "\x1B 8" => chr(8),
            "\x1B 9" => chr(9),
            "\x1B :" => chr(10),
            "\x1B ;" => chr(11),
            "\x1B <" => chr(12),
            "\x1B =" => chr(13),
            "\x1B >" => chr(14),
            "\x1B ?" => chr(15),
            "\x1B!0" => chr(16),
            "\x1B!1" => chr(17),
            "\x1B!2" => chr(18),
            "\x1B!3" => chr(19),
            "\x1B!4" => chr(20),
            "\x1B!5" => chr(21),
            "\x1B!6" => chr(22),
            "\x1B!7" => chr(23),
            "\x1B!8" => chr(24),
            "\x1B!9" => chr(25),
            "\x1B!:" => chr(26),
            "\x1B!;" => chr(27),
            "\x1B!<" => chr(28),
            "\x1B!=" => chr(29),
            "\x1B!>" => chr(30),
            "\x1B!?" => chr(31),
            "\x1B'?" => chr(127),
            "\x1B(0" => 'â¬', // 128 in CP1252
            "\x1B(2" => 'â', // 130 in CP1252
            "\x1B(3" => 'Æ', // 131 in CP1252
            "\x1B(4" => 'â', // 132 in CP1252
            "\x1B(5" => 'â¦', // 133 in CP1252
            "\x1B(6" => 'â ', // 134 in CP1252
            "\x1B(7" => 'â¡', // 135 in CP1252
            "\x1B(8" => 'Ë', // 136 in CP1252
            "\x1B(9" => 'â°', // 137 in CP1252
            "\x1B(:" => 'Å ', // 138 in CP1252
            "\x1B(;" => 'â¹', // 139 in CP1252
            "\x1BNj" => 'Å', // 140 in CP1252
            "\x1B(>" => 'Å½', // 142 in CP1252
            "\x1B)1" => 'â', // 145 in CP1252
            "\x1B)2" => 'â', // 146 in CP1252
            "\x1B)3" => 'â', // 147 in CP1252
            "\x1B)4" => 'â', // 148 in CP1252
            "\x1B)5" => 'â¢', // 149 in CP1252
            "\x1B)6" => 'â', // 150 in CP1252
            "\x1B)7" => 'â', // 151 in CP1252
            "\x1B)8" => 'Ë', // 152 in CP1252
            "\x1B)9" => 'â¢', // 153 in CP1252
            "\x1B):" => 'Å¡', // 154 in CP1252
            "\x1B);" => 'âº', // 155 in CP1252
            "\x1BNz" => 'Å', // 156 in CP1252
            "\x1B)>" => 'Å¾', // 158 in CP1252
            "\x1B)?" => 'Å¸', // 159 in CP1252
            "\x1B*0" => ' ', // 160 in CP1252
            "\x1BN!" => 'Â¡', // 161 in CP1252
            "\x1BN\"" => 'Â¢', // 162 in CP1252
            "\x1BN#" => 'Â£', // 163 in CP1252
            "\x1BN(" => 'Â¤', // 164 in CP1252
            "\x1BN%" => 'Â¥', // 165 in CP1252
            "\x1B*6" => 'Â¦', // 166 in CP1252
            "\x1BN'" => 'Â§', // 167 in CP1252
            "\x1BNH " => 'Â¨', // 168 in CP1252
            "\x1BNS" => 'Â©', // 169 in CP1252
            "\x1BNc" => 'Âª', // 170 in CP1252
            "\x1BN+" => 'Â«', // 171 in CP1252
            "\x1B*<" => 'Â¬', // 172 in CP1252
            "\x1B*=" => 'Â­', // 173 in CP1252
            "\x1BNR" => 'Â®', // 174 in CP1252
            "\x1B*?" => 'Â¯', // 175 in CP1252
            "\x1BN0" => 'Â°', // 176 in CP1252
            "\x1BN1" => 'Â±', // 177 in CP1252
            "\x1BN2" => 'Â²', // 178 in CP1252
            "\x1BN3" => 'Â³', // 179 in CP1252
            "\x1BNB " => 'Â´', // 180 in CP1252
            "\x1BN5" => 'Âµ', // 181 in CP1252
            "\x1BN6" => 'Â¶', // 182 in CP1252
            "\x1BN7" => 'Â·', // 183 in CP1252
            "\x1B+8" => 'Â¸', // 184 in CP1252
            "\x1BNQ" => 'Â¹', // 185 in CP1252
            "\x1BNk" => 'Âº', // 186 in CP1252
            "\x1BN;" => 'Â»', // 187 in CP1252
            "\x1BN<" => 'Â¼', // 188 in CP1252
            "\x1BN=" => 'Â½', // 189 in CP1252
            "\x1BN>" => 'Â¾', // 190 in CP1252
            "\x1BN?" => 'Â¿', // 191 in CP1252
            "\x1BNAA" => 'Ã', // 192 in CP1252
            "\x1BNBA" => 'Ã', // 193 in CP1252
            "\x1BNCA" => 'Ã', // 194 in CP1252
            "\x1BNDA" => 'Ã', // 195 in CP1252
            "\x1BNHA" => 'Ã', // 196 in CP1252
            "\x1BNJA" => 'Ã', // 197 in CP1252
            "\x1BNa" => 'Ã', // 198 in CP1252
            "\x1BNKC" => 'Ã', // 199 in CP1252
            "\x1BNAE" => 'Ã', // 200 in CP1252
            "\x1BNBE" => 'Ã', // 201 in CP1252
            "\x1BNCE" => 'Ã', // 202 in CP1252
            "\x1BNHE" => 'Ã', // 203 in CP1252
            "\x1BNAI" => 'Ã', // 204 in CP1252
            "\x1BNBI" => 'Ã', // 205 in CP1252
            "\x1BNCI" => 'Ã', // 206 in CP1252
            "\x1BNHI" => 'Ã', // 207 in CP1252
            "\x1BNb" => 'Ã', // 208 in CP1252
            "\x1BNDN" => 'Ã', // 209 in CP1252
            "\x1BNAO" => 'Ã', // 210 in CP1252
            "\x1BNBO" => 'Ã', // 211 in CP1252
            "\x1BNCO" => 'Ã', // 212 in CP1252
            "\x1BNDO" => 'Ã', // 213 in CP1252
            "\x1BNHO" => 'Ã', // 214 in CP1252
            "\x1B-7" => 'Ã', // 215 in CP1252
            "\x1BNi" => 'Ã', // 216 in CP1252
            "\x1BNAU" => 'Ã', // 217 in CP1252
            "\x1BNBU" => 'Ã', // 218 in CP1252
            "\x1BNCU" => 'Ã', // 219 in CP1252
            "\x1BNHU" => 'Ã', // 220 in CP1252
            "\x1B-=" => 'Ã', // 221 in CP1252
            "\x1BNl" => 'Ã', // 222 in CP1252
            "\x1BN{" => 'Ã', // 223 in CP1252
            "\x1BNAa" => 'Ã ', // 224 in CP1252
            "\x1BNBa" => 'Ã¡', // 225 in CP1252
            "\x1BNCa" => 'Ã¢', // 226 in CP1252
            "\x1BNDa" => 'Ã£', // 227 in CP1252
            "\x1BNHa" => 'Ã¤', // 228 in CP1252
            "\x1BNJa" => 'Ã¥', // 229 in CP1252
            "\x1BNq" => 'Ã¦', // 230 in CP1252
            "\x1BNKc" => 'Ã§', // 231 in CP1252
            "\x1BNAe" => 'Ã¨', // 232 in CP1252
            "\x1BNBe" => 'Ã©', // 233 in CP1252
            "\x1BNCe" => 'Ãª', // 234 in CP1252
            "\x1BNHe" => 'Ã«', // 235 in CP1252
            "\x1BNAi" => 'Ã¬', // 236 in CP1252
            "\x1BNBi" => 'Ã­', // 237 in CP1252
            "\x1BNCi" => 'Ã®', // 238 in CP1252
            "\x1BNHi" => 'Ã¯', // 239 in CP1252
            "\x1BNs" => 'Ã°', // 240 in CP1252
            "\x1BNDn" => 'Ã±', // 241 in CP1252
            "\x1BNAo" => 'Ã²', // 242 in CP1252
            "\x1BNBo" => 'Ã³', // 243 in CP1252
            "\x1BNCo" => 'Ã´', // 244 in CP1252
            "\x1BNDo" => 'Ãµ', // 245 in CP1252
            "\x1BNHo" => 'Ã¶', // 246 in CP1252
            "\x1B/7" => 'Ã·', // 247 in CP1252
            "\x1BNy" => 'Ã¸', // 248 in CP1252
            "\x1BNAu" => 'Ã¹', // 249 in CP1252
            "\x1BNBu" => 'Ãº', // 250 in CP1252
            "\x1BNCu" => 'Ã»', // 251 in CP1252
            "\x1BNHu" => 'Ã¼', // 252 in CP1252
            "\x1B/=" => 'Ã½', // 253 in CP1252
            "\x1BN|" => 'Ã¾', // 254 in CP1252
            "\x1BNHy" => 'Ã¿', // 255 in CP1252
        ];
    }

    /**
     * Get whether iconv extension is available.
     *
     * @return bool
     */
    public static function getIsIconvEnabled()
    {
        if (isset(self::$isIconvEnabled)) {
            return self::$isIconvEnabled;
        }

        // Assume no problems with iconv
        self::$isIconvEnabled = true;

        // Fail if iconv doesn't exist
        if (!function_exists('iconv')) {
            self::$isIconvEnabled = false;
        } elseif (!@iconv('UTF-8', 'UTF-16LE', 'x')) {
            // Sometimes iconv is not working, and e.g. iconv('UTF-8', 'UTF-16LE', 'x') just returns false,
            self::$isIconvEnabled = false;
        } elseif (defined('PHP_OS') && @stristr(PHP_OS, 'AIX') && defined('ICONV_IMPL') && (@strcasecmp(ICONV_IMPL, 'unknown') == 0) && defined('ICONV_VERSION') && (@strcasecmp(ICONV_VERSION, 'unknown') == 0)) {
            // CUSTOM: IBM AIX iconv() does not work
            self::$isIconvEnabled = false;
        }

        // Deactivate iconv default options if they fail (as seen on IMB i)
        if (self::$isIconvEnabled && !@iconv('UTF-8', 'UTF-16LE' . self::$iconvOptions, 'x')) {
            self::$iconvOptions = '';
        }

        return self::$isIconvEnabled;
    }

    private static function buildCharacterSets(): void
    {
        if (empty(self::$controlCharacters)) {
            self::buildControlCharacters();
        }

        if (empty(self::$SYLKCharacters)) {
            self::buildSYLKCharacters();
        }
    }

    /**
     * Convert from OpenXML escaped control character to PHP control character.
     *
     * Excel 2007 team:
     * ----------------
     * That's correct, control characters are stored directly in the shared-strings table.
     * We do encode characters that cannot be represented in XML using the following escape sequence:
     * _xHHHH_ where H represents a hexadecimal character in the character's value...
     * So you could end up with something like _x0008_ in a string (either in a cell value (<v>)
     * element or in the shared string <t> element.
     *
     * @param string $textValue Value to unescape
     *
     * @return string
     */
    public static function controlCharacterOOXML2PHP($textValue)
    {
        self::buildCharacterSets();

        return str_replace(array_keys(self::$controlCharacters), array_values(self::$controlCharacters), $textValue);
    }

    /**
     * Convert from PHP control character to OpenXML escaped control character.
     *
     * Excel 2007 team:
     * ----------------
     * That's correct, control characters are stored directly in the shared-strings table.
     * We do encode characters that cannot be represented in XML using the following escape sequence:
     * _xHHHH_ where H represents a hexadecimal character in the character's value...
     * So you could end up with something like _x0008_ in a string (either in a cell value (<v>)
     * element or in the shared string <t> element.
     *
     * @param string $textValue Value to escape
     *
     * @return string
     */
    public static function controlCharacterPHP2OOXML($textValue)
    {
        self::buildCharacterSets();

        return str_replace(array_values(self::$controlCharacters), array_keys(self::$controlCharacters), $textValue);
    }

    /**
     * Try to sanitize UTF8, replacing invalid sequences with Unicode substitution characters.
     */
    public static function sanitizeUTF8(string $textValue): string
    {
        $textValue = str_replace(["\xef\xbf\xbe", "\xef\xbf\xbf"], "\xef\xbf\xbd", $textValue);
        $subst = mb_substitute_character(); // default is question mark
        mb_substitute_character(65533); // Unicode substitution character
        // Phpstan does not think this can return false.
        $returnValue = mb_convert_encoding($textValue, 'UTF-8', 'UTF-8');
        mb_substitute_character(/** @scrutinizer ignore-type */ $subst);

        return self::returnString($returnValue);
    }

    /**
     * Strictly to satisfy Scrutinizer.
     *
     * @param mixed $value
     */
    private static function returnString($value): string
    {
        return is_string($value) ? $value : '';
    }

    /**
     * Check if a string contains UTF8 data.
     */
    public static function isUTF8(string $textValue): bool
    {
        return $textValue === self::sanitizeUTF8($textValue);
    }

    /**
     * Formats a numeric value as a string for output in various output writers forcing
     * point as decimal separator in case locale is other than English.
     *
     * @param float|int|string $numericValue
     */
    public static function formatNumber($numericValue): string
    {
        if (is_float($numericValue)) {
            return str_replace(',', '.', (string) $numericValue);
        }

        return (string) $numericValue;
    }

    /**
     * Converts a UTF-8 string into BIFF8 Unicode string data (8-bit string length)
     * Writes the string using uncompressed notation, no rich text, no Asian phonetics
     * If mbstring extension is not available, ASCII is assumed, and compressed notation is used
     * although this will give wrong results for non-ASCII strings
     * see OpenOffice.org's Documentation of the Microsoft Excel File Format, sect. 2.5.3.
     *
     * @param string $textValue UTF-8 encoded string
     * @param mixed[] $arrcRuns Details of rich text runs in $value
     */
    public static function UTF8toBIFF8UnicodeShort(string $textValue, array $arrcRuns = []): string
    {
        // character count
        $ln = self::countCharacters($textValue, 'UTF-8');
        // option flags
        if (empty($arrcRuns)) {
            $data = pack('CC', $ln, 0x0001);
            // characters
            $data .= self::convertEncoding($textValue, 'UTF-16LE', 'UTF-8');
        } else {
            $data = pack('vC', $ln, 0x09);
            $data .= pack('v', count($arrcRuns));
            // characters
            $data .= self::convertEncoding($textValue, 'UTF-16LE', 'UTF-8');
            foreach ($arrcRuns as $cRun) {
                $data .= pack('v', $cRun['strlen']);
                $data .= pack('v', $cRun['fontidx']);
            }
        }

        return $data;
    }

    /**
     * Converts a UTF-8 string into BIFF8 Unicode string data (16-bit string length)
     * Writes the string using uncompressed notation, no rich text, no Asian phonetics
     * If mbstring extension is not available, ASCII is assumed, and compressed notation is used
     * although this will give wrong results for non-ASCII strings
     * see OpenOffice.org's Documentation of the Microsoft Excel File Format, sect. 2.5.3.
     *
     * @param string $textValue UTF-8 encoded string
     */
    public static function UTF8toBIFF8UnicodeLong(string $textValue): string
    {
        // character count
        $ln = self::countCharacters($textValue, 'UTF-8');

        // characters
        $chars = self::convertEncoding($textValue, 'UTF-16LE', 'UTF-8');

        return pack('vC', $ln, 0x0001) . $chars;
    }

    /**
     * Convert string from one encoding to another.
     *
     * @param string $to Encoding to convert to, e.g. 'UTF-8'
     * @param string $from Encoding to convert from, e.g. 'UTF-16LE'
     */
    public static function convertEncoding(string $textValue, string $to, string $from): string
    {
        if (self::getIsIconvEnabled()) {
            $result = iconv($from, $to . self::$iconvOptions, $textValue);
            if (false !== $result) {
                return $result;
            }
        }

        return self::returnString(mb_convert_encoding($textValue, $to, $from));
    }

    /**
     * Get character count.
     *
     * @param string $encoding Encoding
     *
     * @return int Character count
     */
    public static function countCharacters(string $textValue, string $encoding = 'UTF-8'): int
    {
        return mb_strlen($textValue, $encoding);
    }

    /**
     * Get character count using mb_strwidth rather than mb_strlen.
     *
     * @param string $encoding Encoding
     *
     * @return int Character count
     */
    public static function countCharactersDbcs(string $textValue, string $encoding = 'UTF-8'): int
    {
        return mb_strwidth($textValue, $encoding);
    }

    /**
     * Get a substring of a UTF-8 encoded string.
     *
     * @param string $textValue UTF-8 encoded string
     * @param int $offset Start offset
     * @param ?int $length Maximum number of characters in substring
     */
    public static function substring(string $textValue, int $offset, ?int $length = 0): string
    {
        return mb_substr($textValue, $offset, $length, 'UTF-8');
    }

    /**
     * Convert a UTF-8 encoded string to upper case.
     *
     * @param string $textValue UTF-8 encoded string
     */
    public static function strToUpper(string $textValue): string
    {
        return mb_convert_case($textValue, MB_CASE_UPPER, 'UTF-8');
    }

    /**
     * Convert a UTF-8 encoded string to lower case.
     *
     * @param string $textValue UTF-8 encoded string
     */
    public static function strToLower(string $textValue): string
    {
        return mb_convert_case($textValue, MB_CASE_LOWER, 'UTF-8');
    }

    /**
     * Convert a UTF-8 encoded string to title/proper case
     * (uppercase every first character in each word, lower case all other characters).
     *
     * @param string $textValue UTF-8 encoded string
     */
    public static function strToTitle(string $textValue): string
    {
        return mb_convert_case($textValue, MB_CASE_TITLE, 'UTF-8');
    }

    public static function mbIsUpper(string $character): bool
    {
        return mb_strtolower($character, 'UTF-8') !== $character;
    }

    /**
     * Splits a UTF-8 string into an array of individual characters.
     */
    public static function mbStrSplit(string $string): array
    {
        // Split at all position not after the start: ^
        // and not before the end: $
        $split = preg_split('/(?<!^)(?!$)/u', $string);

        return ($split === false) ? [] : $split;
    }

    /**
     * Reverse the case of a string, so that all uppercase characters become lowercase
     * and all lowercase characters become uppercase.
     *
     * @param string $textValue UTF-8 encoded string
     */
    public static function strCaseReverse(string $textValue): string
    {
        $characters = self::mbStrSplit($textValue);
        foreach ($characters as &$character) {
            if (self::mbIsUpper($character)) {
                $character = mb_strtolower($character, 'UTF-8');
            } else {
                $character = mb_strtoupper($character, 'UTF-8');
            }
        }

        return implode('', $characters);
    }

    /**
     * Get the decimal separator. If it has not yet been set explicitly, try to obtain number
     * formatting information from locale.
     */
    public static function getDecimalSeparator(): string
    {
        if (!isset(self::$decimalSeparator)) {
            $localeconv = localeconv();
            self::$decimalSeparator = ($localeconv['decimal_point'] != '')
                ? $localeconv['decimal_point'] : $localeconv['mon_decimal_point'];

            if (self::$decimalSeparator == '') {
                // Default to .
                self::$decimalSeparator = '.';
            }
        }

        return self::$decimalSeparator;
    }

    /**
     * Set the decimal separator. Only used by NumberFormat::toFormattedString()
     * to format output by \PhpOffice\PhpSpreadsheet\Writer\Html and \PhpOffice\PhpSpreadsheet\Writer\Pdf.
     *
     * @param string $separator Character for decimal separator
     */
    public static function setDecimalSeparator(string $separator): void
    {
        self::$decimalSeparator = $separator;
    }

    /**
     * Get the thousands separator. If it has not yet been set explicitly, try to obtain number
     * formatting information from locale.
     */
    public static function getThousandsSeparator(): string
    {
        if (!isset(self::$thousandsSeparator)) {
            $localeconv = localeconv();
            self::$thousandsSeparator = ($localeconv['thousands_sep'] != '')
                ? $localeconv['thousands_sep'] : $localeconv['mon_thousands_sep'];

            if (self::$thousandsSeparator == '') {
                // Default to .
                self::$thousandsSeparator = ',';
            }
        }

        return self::$thousandsSeparator;
    }

    /**
     * Set the thousands separator. Only used by NumberFormat::toFormattedString()
     * to format output by \PhpOffice\PhpSpreadsheet\Writer\Html and \PhpOffice\PhpSpreadsheet\Writer\Pdf.
     *
     * @param string $separator Character for thousands separator
     */
    public static function setThousandsSeparator(string $separator): void
    {
        self::$thousandsSeparator = $separator;
    }

    /**
     *    Get the currency code. If it has not yet been set explicitly, try to obtain the
     *        symbol information from locale.
     */
    public static function getCurrencyCode(): string
    {
        if (!empty(self::$currencyCode)) {
            return self::$currencyCode;
        }
        self::$currencyCode = '$';
        $localeconv = localeconv();
        if (!empty($localeconv['currency_symbol'])) {
            self::$currencyCode = $localeconv['currency_symbol'];

            return self::$currencyCode;
        }
        if (!empty($localeconv['int_curr_symbol'])) {
            self::$currencyCode = $localeconv['int_curr_symbol'];

            return self::$currencyCode;
        }

        return self::$currencyCode;
    }

    /**
     * Set the currency code. Only used by NumberFormat::toFormattedString()
     *        to format output by \PhpOffice\PhpSpreadsheet\Writer\Html and \PhpOffice\PhpSpreadsheet\Writer\Pdf.
     *
     * @param string $currencyCode Character for currency code
     */
    public static function setCurrencyCode(string $currencyCode): void
    {
        self::$currencyCode = $currencyCode;
    }

    /**
     * Convert SYLK encoded string to UTF-8.
     *
     * @param string $textValue SYLK encoded string
     *
     * @return string UTF-8 encoded string
     */
    public static function SYLKtoUTF8(string $textValue): string
    {
        self::buildCharacterSets();

        // If there is no escape character in the string there is nothing to do
        if (strpos($textValue, '') === false) {
            return $textValue;
        }

        foreach (self::$SYLKCharacters as $k => $v) {
            $textValue = str_replace($k, $v, $textValue);
        }

        return $textValue;
    }

    /**
     * Retrieve any leading numeric part of a string, or return the full string if no leading numeric
     * (handles basic integer or float, but not exponent or non decimal).
     *
     * @param string $textValue
     *
     * @return mixed string or only the leading numeric part of the string
     */
    public static function testStringAsNumeric($textValue)
    {
        if (is_numeric($textValue)) {
            return $textValue;
        }
        $v = (float) $textValue;

        return (is_numeric(substr($textValue, 0, strlen((string) $v)))) ? $v : $textValue;
    }
}
