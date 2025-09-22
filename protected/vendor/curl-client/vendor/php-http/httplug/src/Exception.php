<?php

namespace Http\Client;

use Psr\Http\Client\ClientExceptionInterface as PsrClientException;

/**
 * Every HTTP Client related Exception must implement this interface.
 *
 * @author MÃ¡rk SÃ¡gi-KazÃ¡r <mark.sagikazar@gmail.com>
 */
interface Exception extends PsrClientException
{
}
