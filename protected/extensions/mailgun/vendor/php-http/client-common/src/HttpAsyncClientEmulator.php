<?php

declare(strict_types=1);

namespace Http\Client\Common;

use Http\Client\Exception;
use Http\Client\Promise;
use Psr\Http\Message\RequestInterface;
use Psr\Http\Message\ResponseInterface;

/**
 * Emulates an HTTP Async Client in an HTTP Client.
 *
 * @author MÃ¡rk SÃ¡gi-KazÃ¡r <mark.sagikazar@gmail.com>
 */
trait HttpAsyncClientEmulator
{
    /**
     * {@inheritdoc}
     *
     * @see HttpClient::sendRequest
     */
    abstract public function sendRequest(RequestInterface $request): ResponseInterface;

    /**
     * {@inheritdoc}
     *
     * @see HttpAsyncClient::sendAsyncRequest
     */
    public function sendAsyncRequest(RequestInterface $request)
    {
        try {
            return new Promise\HttpFulfilledPromise($this->sendRequest($request));
        } catch (Exception $e) {
            return new Promise\HttpRejectedPromise($e);
        }
    }
}
