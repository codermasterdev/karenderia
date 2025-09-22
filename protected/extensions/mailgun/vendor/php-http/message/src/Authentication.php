<?php

namespace Http\Message;

use Psr\Http\Message\RequestInterface;

/**
 * Add authentication information to a PSR-7 Request.
 *
 * @author MÃ¡rk SÃ¡gi-KazÃ¡r <mark.sagikazar@gmail.com>
 */
interface Authentication
{
    /**
     * Alter the request to add the authentication credentials.
     *
     * To do that, the implementation might use pre-stored credentials or do
     * separate HTTP requests to obtain a valid token.
     *
     * @param RequestInterface $request The request without authentication information
     *
     * @return RequestInterface The request with added authentication information
     */
    public function authenticate(RequestInterface $request);
}
