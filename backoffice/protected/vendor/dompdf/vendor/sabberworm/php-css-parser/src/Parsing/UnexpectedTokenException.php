<?php

namespace Sabberworm\CSS\Parsing;

/**
 * Thrown if the CSS parser encounters a token it did not expect.
 */
class UnexpectedTokenException extends SourceException
{
    /**
     * @var string
     */
    private $sExpected;

    /**
     * @var string
     */
    private $sFound;

    /**
     * Possible values: literal, identifier, count, expression, search
     *
     * @var string
     */
    private $sMatchType;

    /**
     * @param string $sExpected
     * @param string $sFound
     * @param string $sMatchType
     * @param int $iLineNo
     */
    public function __construct($sExpected, $sFound, $sMatchType = 'literal', $iLineNo = 0)
    {
        $this->sExpected = $sExpected;
        $this->sFound = $sFound;
        $this->sMatchType = $sMatchType;
        $sMessage = "Token â{$sExpected}â ({$sMatchType}) not found. Got â{$sFound}â.";
        if ($this->sMatchType === 'search') {
            $sMessage = "Search for â{$sExpected}â returned no results. Context: â{$sFound}â.";
        } elseif ($this->sMatchType === 'count') {
            $sMessage = "Next token was expected to have {$sExpected} chars. Context: â{$sFound}â.";
        } elseif ($this->sMatchType === 'identifier') {
            $sMessage = "Identifier expected. Got â{$sFound}â";
        } elseif ($this->sMatchType === 'custom') {
            $sMessage = trim("$sExpected $sFound");
        }

        parent::__construct($sMessage, $iLineNo);
    }
}
